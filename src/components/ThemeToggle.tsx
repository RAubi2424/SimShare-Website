import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'relative',
        flexShrink: 0,
        width: '28px',
        height: '28px',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
        background: 'transparent',
        border: 'none',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.7';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={24} color="#F2F2F2" strokeWidth={2} />
      ) : (
        <Moon size={22} color="#F2F2F2" strokeWidth={2} />
      )}
    </button>
  );
}