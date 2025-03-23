import styled from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  as?: React.ElementType
  href?: string
  download?: string
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme, size }) => {
    if (size === 'small') return `${theme.spacing.sm} ${theme.spacing.base}`
    if (size === 'large') return `${theme.spacing.md} ${theme.spacing.lg}`
    return `${theme.spacing.sm} ${theme.spacing.md}`
  }};
  
  background: ${({ theme, variant }) => {
    if (variant === 'primary') return theme.colors.gradient
    if (variant === 'secondary') return theme.colors.surface
    return 'transparent'
  }};
  
  color: ${({ theme, variant }) => 
    variant === 'primary' ? theme.colors.text : theme.colors.primaryLight};
  
  border: ${({ theme, variant }) => 
    variant === 'ghost' ? `2px solid ${theme.colors.primary}` : 'none'};
  
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  display: inline-block; // Adicionado para melhor controle
  transition: all 0.3s ease; // Transição suave para todas as propriedades
  font-family: inherit; // Herda a fonte do tema

  // Efeito de brilho animado
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.2),
      transparent
    );
    transition: inherit;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.purple};
    
    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  // Estilo específico para quando usado como link
  &[href] {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`