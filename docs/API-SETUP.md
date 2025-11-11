# API Setup for SimShare Waitlist

## Overview

The waitlist form is configured to send POST requests to `/api/waitlist`. You'll need to set up a backend server to receive and store this data.

## Data Structure

The form sends the following JSON payload:

```typescript
interface WaitlistSubmission {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  phone?: string;  // Optional
  interest: 'player' | 'host' | 'both';
  submittedAt?: Date;  // You should add this on the server
}
```

## Backend Options

### Option 1: Simple Node.js/Express Server

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/waitlist', async (req, res) => {
  try {
    const { firstName, lastName, email, city, state, phone, interest } = req.body;

    // Validate data
    if (!firstName || !lastName || !email || !city || !state || !interest) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to database (example with MongoDB)
    // const waitlistEntry = await WaitlistModel.create({
    //   ...req.body,
    //   submittedAt: new Date()
    // });

    // For now, just log it
    console.log('New waitlist signup:', req.body);

    res.status(200).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
```

### Option 2: Serverless Functions (Vercel, Netlify)

#### Vercel Function (api/waitlist.ts)
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate
    if (!data.firstName || !data.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store in database or send email
    // await storeInDatabase(data);

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
```

### Option 3: Firebase

```typescript
// firebase functions
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const addToWaitlist = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data = req.body;

    // Add to Firestore
    await admin.firestore().collection('waitlist').add({
      ...data,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding to waitlist' });
  }
});
```

### Option 4: Supabase

```typescript
// Use Supabase client directly from frontend
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_KEY!
);

// In WaitlistForm.tsx
const { data, error } = await supabase
  .from('waitlist')
  .insert([formData]);
```

## Database Schema

Recommended database schema for waitlist table:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  interest VARCHAR(20) NOT NULL CHECK (interest IN ('player', 'host', 'both')),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_email ON waitlist(email);
CREATE INDEX idx_interest ON waitlist(interest);
CREATE INDEX idx_submitted_at ON waitlist(submitted_at DESC);
```

## Environment Variables

Add these to your `.env` file (not committed to git):

```env
# For development - proxy API requests to backend
VITE_API_URL=http://localhost:3001

# For production
VITE_API_URL=https://your-backend-url.com

# If using Supabase
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_KEY=your-anon-key

# If using Firebase
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## Vite Configuration

Update `vite.config.ts` to proxy API requests in development:

```typescript
export default defineConfig({
  // ... existing config
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
});
```

## Email Notifications

Consider sending email notifications when someone joins:

```javascript
// Using SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: email,
  from: 'noreply@simshare.com',
  subject: 'Welcome to SimShare Waitlist',
  text: `Hi ${firstName}, thank you for joining our waitlist!`,
  html: `<strong>Hi ${firstName}</strong>, thank you for joining our waitlist!`,
};

await sgMail.send(msg);
```

## Testing the API

Use this curl command to test:

```bash
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "city": "Phoenix",
    "state": "Arizona",
    "phone": "(555) 123-4567",
    "interest": "both"
  }'
```

## Security Considerations

1. **Rate Limiting**: Prevent spam submissions
   ```javascript
   const rateLimit = require('express-rate-limit');

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 5 // limit each IP to 5 requests per windowMs
   });

   app.use('/api/waitlist', limiter);
   ```

2. **Email Validation**: Verify email addresses
3. **CORS**: Configure properly for production
4. **Input Sanitization**: Prevent SQL injection and XSS
5. **HTTPS Only**: Always use HTTPS in production

## Admin Dashboard

Consider creating an admin panel to view waitlist entries:

```typescript
// GET endpoint to view waitlist (protected)
app.get('/api/admin/waitlist', authenticateAdmin, async (req, res) => {
  const entries = await WaitlistModel.find().sort({ submittedAt: -1 });
  res.json(entries);
});
```

## Export Data

Add ability to export waitlist to CSV:

```javascript
const { Parser } = require('json2csv');

app.get('/api/admin/export', authenticateAdmin, async (req, res) => {
  const data = await WaitlistModel.find();
  const parser = new Parser();
  const csv = parser.parse(data);

  res.header('Content-Type', 'text/csv');
  res.attachment('waitlist.csv');
  res.send(csv);
});
```

## Next Steps

1. Choose your backend technology
2. Set up database (PostgreSQL, MongoDB, or Firestore)
3. Implement the API endpoint
4. Test with the form
5. Deploy backend
6. Update frontend with production API URL
7. Set up email notifications
8. Create admin dashboard for viewing submissions