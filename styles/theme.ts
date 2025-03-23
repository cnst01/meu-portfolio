export const theme = {
  colors: {
    primary: '#8A2BE2',       // Roxo vibrante
    primaryDark: '#4B0082',   // Índigo
    primaryLight: '#9932CC',  // Roxo médio
    secondary: '#2E0854',     // Roxo muito escuro
    accent: '#BA55D3',        // Orquídea média
    text: '#E6E6FA',          // Lavanda claro
    textDark: '#301934',      // Roxo escuro para texto em fundo claro
    background: '#0A0414',    // Fundo preto-arroxeado
    surface: '#1A0A2E',       // Superfície escura
    success: '#9D71E8',
    warning: '#FFD700',
    error: '#FF4444',
    gradient: 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)'
  },
  spacing: {
    sm: '0.5rem',
    base: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '6rem'
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.5)',
    md: '0 4px 6px rgba(0,0,0,0.7)',
    lg: '0 10px 15px rgba(0,0,0,0.9)',
    purple: '0 0 15px rgba(138,43,226,0.5)'
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    pill: '9999px'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    medium: '0.3s ease-in-out',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  // src/styles/theme.ts

  // ... outros valores
  borders: {
    primary: '2px solid #8A2BE2',
    secondary: '1px solid #4B0082'
  },
  opacities: {
    soft: 0.8,
    medium: 0.6
  }

}

export type ThemeType = typeof theme