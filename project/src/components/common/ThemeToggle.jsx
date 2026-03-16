import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: 52,
        height: 28,
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        flexShrink: 0,
        /* Track color */
        background: isDark ? '#3B82F6' : '#CBD5E1',
        transition: 'background 0.3s ease',
        boxShadow: isDark
          ? '0 0 0 1px rgba(59,130,246,0.4), inset 0 1px 3px rgba(0,0,0,0.3)'
          : 'inset 0 1px 3px rgba(0,0,0,0.15)',
      }}
    >
      {/* Sliding knob */}
      <span
        style={{
          position: 'absolute',
          top: 3,
          left: 3,
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isDark ? 'translateX(24px)' : 'translateX(0)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        }}
      >
        {isDark ? (
          <Moon size={12} strokeWidth={2.5} color="#3B82F6" />
        ) : (
          <Sun size={12} strokeWidth={2.5} color="#F59E0B" />
        )}
      </span>
    </button>
  );
}
