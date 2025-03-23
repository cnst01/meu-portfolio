// src/components/SocialFrame/index.tsx
import styled from 'styled-components'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

interface SocialFrameProps {
  imageUrl: string
  altText: string
}

const FrameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .social-links {
      opacity: 1 !important;
      width: 100%;
      transform: translateX(-25%) translateY(0) !important;
    }
    
    &:hover .social-links {
      transform: translateX(0) translateY(0) !important;
    }
  }

  &:hover {
    .social-links {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SocialLinks = styled.div`
  position: absolute;
  width: 50%;
  left: 25%;
  bottom: 20px;
  transform: translateY(50%);
  display: flex;
  gap: 2.5rem;
  opacity: 0;
  transition: all 0.3s ease;
  background: rgba(42, 0, 77, 0.8);
  padding: 1rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);

  /* Versão mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    opacity: 1 !important;
    transform: translateX(-50%) translateY(0) !important;
    bottom: 0px;
    padding: 0.8rem 1.5rem;
    gap: 3.6rem;
    border-radius: 0%;
    background: rgba(42, 0, 77, 0.9);
  }

`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: all 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SocialFrame = ({ imageUrl, altText }: SocialFrameProps) => {
  return (
    <FrameContainer>
      <ProfileImage src={imageUrl} alt={altText} />
      
      <SocialLinks className="social-links">
        <SocialLink 
          href="https://github.com/cnst01" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        
        <SocialLink 
          href="https://www.linkedin.com/in/cassionicoletti/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        
        <SocialLink 
          href="https://instagram.com/c_nicoletti" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialLink>
        
        <SocialLink href="mailto:cassionst@gmail.com">
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
    </FrameContainer>
  )
}