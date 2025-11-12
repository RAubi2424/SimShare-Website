import { useTheme } from '@/contexts/ThemeContext';
import { supabase } from '@/lib/supabase';
import { AlertCircle, CheckCircle2, Loader2, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  provinceTerritory: string;
  phone?: string;
  interest: 'player' | 'host' | 'both';
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputStyle = (isDark: boolean) => ({
  backgroundColor: isDark ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 100%)',
  color: isDark ? '#FFFFFF' : '#191919',
  border: `1px solid ${isDark ? 'hsl(0, 0%, 15%)' : '#E5E5E5'}`,
  borderRadius: '8px',
  padding: '12px',
  fontSize: '14px',
  fontFamily: 'Poppins, sans-serif',
  width: '100%',
  outline: 'none',
});

const labelStyle = (isDark: boolean) => ({
  fontFamily: 'Poppins, sans-serif',
  color: isDark ? '#ffffffff' : '#191919',
  marginBottom: '8px',
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
});

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Supabase
      const { error } = await supabase.from('waitlist_signups').insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email_address: data.email,
          city: data.city,
          province_territory: data.provinceTerritory,
          phone_number: data.phone || null,
          interest: data.interest,
        },
      ]);

      if (error) {
        throw error;
      }

      // Success
      setSubmitStatus('success');
      reset();
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 3000);
      //   setTimeout(() => {
      //     setSubmitStatus('idle');
      //     onClose();
      //   }, 3000);
      // } else {
      //   setSubmitStatus('error');
      // }
    } catch (error: any) {
      console.error('Form submission error:', error);
      console.log('Error message:', error?.message);
      console.log('Error details:', error?.details);
      console.log('Error hint:', error?.hint);
      console.log('Error code:', error?.code);
      console.log('Full error object:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9998,
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: isDark ? 'hsl(0, 0%, 5%)' : 'hsl(0, 0%, 95%)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: isDark ? '#FFFFFF' : '#191919',
            padding: '8px',
          }}
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: isDark ? '#FFFFFF' : '#191919',
              margin: '0 0 12px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Join the Waitlist
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Be among the first to experience SimShare when we launch
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Name Fields */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <div>
              <Label htmlFor="firstName" style={labelStyle(isDark)}>
                First Name *
              </Label>
              <Input
                id="firstName"
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters',
                  },
                })}
                placeholder="John"
                disabled={isSubmitting}
                style={inputStyle(isDark)}
              />
              {errors.firstName && (
                <p
                  style={{
                    color: '#EF4444',
                    fontSize: '14px',
                    marginTop: '4px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" style={labelStyle(isDark)}>
                Last Name *
              </Label>
              <Input
                id="lastName"
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                })}
                placeholder="Doe"
                disabled={isSubmitting}
                style={inputStyle(isDark)}
              />
              {errors.lastName && (
                <p
                  style={{
                    color: '#EF4444',
                    fontSize: '14px',
                    marginTop: '4px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" style={labelStyle(isDark)}>
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="john@example.com"
              disabled={isSubmitting}
              style={inputStyle(isDark)}
            />
            {errors.email && (
              <p
                style={{
                  color: '#EF4444',
                  fontSize: '14px',
                  marginTop: '4px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" style={labelStyle(isDark)}>
              Phone Number <span style={{ opacity: 0.6 }}>(Optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', {
                pattern: {
                  value: /^[0-9\-\(\)\s]+$/,
                  message: 'Invalid phone number',
                },
              })}
              placeholder="(555) 123-4567"
              disabled={isSubmitting}
              style={inputStyle(isDark)}
            />
            {errors.phone && (
              <p
                style={{
                  color: '#EF4444',
                  fontSize: '14px',
                  marginTop: '4px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <div>
              <Label htmlFor="city" style={labelStyle(isDark)}>
                City *
              </Label>
              <Input
                id="city"
                {...register('city', {
                  required: 'City is required',
                  minLength: {
                    value: 2,
                    message: 'City must be at least 2 characters',
                  },
                })}
                placeholder="Toronto"
                disabled={isSubmitting}
                style={inputStyle(isDark)}
              />
              {errors.city && (
                <p
                  style={{
                    color: '#EF4444',
                    fontSize: '14px',
                    marginTop: '4px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="provinceTerritory" style={labelStyle(isDark)}>
                Province/Territory *
              </Label>
              <select
                id="provinceTerritory"
                {...register('provinceTerritory', {
                  required: 'Province/Territory is required',
                })}
                disabled={isSubmitting}
                style={{
                  ...inputStyle(isDark),
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${isDark ? '%23FFFFFF' : '%23191919'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '40px',
                }}
              >
                <option value="">Select province/territory</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NT">Northwest Territories</option>
                <option value="NS">Nova Scotia</option>
                <option value="NU">Nunavut</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon</option>
              </select>
              {errors.provinceTerritory && (
                <p
                  style={{
                    color: '#EF4444',
                    fontSize: '14px',
                    marginTop: '4px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {errors.provinceTerritory.message}
                </p>
              )}
            </div>
          </div>

          {/* Interest */}
          <div>
            <Label htmlFor="interest" style={labelStyle(isDark)}>
              I'm interested in *
            </Label>
            <select
              id="interest"
              {...register('interest', {
                required: 'Please select your interest',
              })}
              disabled={isSubmitting}
              style={{
                ...inputStyle(isDark),
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${isDark ? '%23FFFFFF' : '%23191919'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '40px',
              }}
            >
              <option value="">Select your interest</option>
              <option value="player">Booking simulators as a player</option>
              <option value="host">Hosting my simulator to earn income</option>
              <option value="both">Both playing and hosting</option>
            </select>
            {errors.interest && (
              <p
                style={{
                  color: '#EF4444',
                  fontSize: '14px',
                  marginTop: '4px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {errors.interest.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              backgroundColor: '#478547',
              color: '#FFFFFF',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: '12px',
              border: 'none',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="mr-2 h-5 w-5 animate-spin"
                  style={{ display: 'inline' }}
                />
                Submitting...
              </>
            ) : (
              'Join Waitlist'
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#22C55E',
              }}
            >
              <CheckCircle2 size={20} />
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Thank you! You've been added to our waitlist. We'll be in touch
                soon!
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
              }}
            >
              <AlertCircle size={20} />
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}

          <p
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: isDark ? '#888' : '#666',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            By joining, you agree to receive updates about SimShare. We respect
            your privacy.
          </p>
        </form>
      </div>
    </>
  );
}
