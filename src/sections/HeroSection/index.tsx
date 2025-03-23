import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../../components/Button'
import { SocialFrame } from '@/src/components/SocialFrame';

const HeroContainer = styled.section`
  margin-top: 1vh;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 50%,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 0;
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8rem ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    
    &::before {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.background} 40%,
        rgba(255,255,255,0) 100%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6rem ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  background: rgba(16, 0, 32, 0.7);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0px;
  box-shadow: ${({ theme }) => theme.shadows.purple};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
  }
`


const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.0rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  max-height: 500px;

  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    order: 2;
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 0;

  /* Glow principal */
  &.primary-glow {
    width: 600px;
    height: 600px;
    background: ${({ theme }) => theme.colors.primary};
    filter: blur(150px);
    opacity: 0.1;
  }

  /* Glow secundário */
  &.secondary-glow {
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.colors.accent};
    filter: blur(100px);
    opacity: 0.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &.primary-glow {
      width: 300px;
      height: 300px;
      filter: blur(80px);
    }
    
    &.secondary-glow {
      width: 200px;
      height: 200px;
      filter: blur(60px);
    }
  }
`

const PurpleGradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`

export const HeroSection = () => {
  return (
    <HeroContainer>
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <GlowEffect
        className="primary-glow"
        initial={{ x: -200, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      />
      
      <GlowEffect
        className="secondary-glow"
        initial={{ x: 200, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 2
        }}
        style={{ top: '30%', right: '20%' }}
      />
      <GridContainer>
      <ImageWrapper
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <SocialFrame 
          imageUrl="/images/image.png" 
          altText="Sua foto de perfil"
        />
      </ImageWrapper>

        <TextContent>
          <ContentWrapper>
          <Title>
            <PurpleGradientText> Olá, eu sou o Cassio</PurpleGradientText>
          </Title>
            <Subtitle>
              Desenvolvedor <PurpleGradientText>Full Stack</PurpleGradientText> motivado a aprender!
            </Subtitle>
            <Button variant="primary" size="large">
              Ver Projetos
            </Button>
          </ContentWrapper>
        </TextContent>
      </GridContainer>

      
    </HeroContainer>
  )
}