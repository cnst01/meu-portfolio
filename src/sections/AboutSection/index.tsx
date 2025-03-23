// src/sections/AboutSection/index.tsx
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { 
  FaRobot, 
  FaCode, 
  FaTrophy, 
  FaGlobeAmericas,
  FaChalkboardTeacher,
  FaAward,
  FaReact,
  FaDatabase,
  FaMobileAlt,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaExclamationTriangle
} from 'react-icons/fa'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.surface};
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  flex: 1;
  min-width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    flex-direction: column;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    
    svg {
      transform: rotate(15deg) scale(1.1);
    }
  }
`

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const TabsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const TabButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme, active }) => 
    active ? theme.colors.text : theme.colors.primaryLight};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.purple};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

const ExperienceList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`

const ExperienceItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.md};
    margin: 0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(10px);
    border-left-color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: none;
    }
  }
`

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`


const ThumbnailWrapper = styled.a`
  flex: 0 0 35%;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all 0.3s ease;
  display: block;
  height: 200px;
  min-height: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 150px;
    order: 2;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.purple};

    .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    svg {
      color: white;
      font-size: 2rem;
    }
  }
`

const DetailList = styled.ul`
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing.lg};
`

const DetailItem = styled.li`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &::before {
    content: '▹';
    position: absolute;
    left: -1em;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    
    &::before {
      left: -0.8em;
    }
  }
`

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'robotics' | 'dev'>('robotics')

  const roboticsAchievements = [
    { 
      icon: <FaTrophy />,
      text: 'Campeão Brasileiro de Robótica na categoria @Home em 2023 no evento Robótica 2023 em Salvador'
    },
    {
      icon: <FaGlobeAmericas />,
      text: '11º do mundo na Robocup 2024 na Holanda, categoria @home'
    },
    {
      icon: <FaChalkboardTeacher />,
      text: 'Professor de Robótica por 3 anos no Colégio Marista São Francisco',
      subItems: [
        { icon: <FaAward />, text: '8 Prêmios da Olimpíada Brasileira de Robótica' },
        { icon: <FaAward />, text: '2 Prêmios do Festival Marista de Robótica' }
      ]
    }
  ]

  const devProjects = [
    {
      icon: <FaReact />,
      title: 'Sistema para Restaurante Escolar',
      details: [
        { icon: <FaCode />, text: 'React.js e CSS' },
        { icon: <FaDatabase />, text: 'Firebase' },
        { icon: <FaMobileAlt />, text: 'UX com Drag and Drop components e responsividade' },
        { icon: <FaExclamationTriangle />, text: 'Sistema vendido portanto com acesso exclusivo do cliente'}
      ],
      thumbnailUrl: '/images/projects/restaurante.jpg',
      
    },
    {
      icon: <FaCode />,
      title: 'Fbot WebSite',
      details: [
        { icon: <FaCode />, text: 'TypeScript e Tailwind' },
        { icon: <FaMobileAlt />, text: 'Layout responsivo' }
      ],
      thumbnailUrl: '/images/projects/fbot_webpage.png',
      link: 'https://fbotwork.vercel.app/'
    },
    {
      icon: <FaWhatsapp />,
      title: 'Escola Infantil Protagonistas WebPage',
      details: [
        { icon: <FaCode />, text: 'TypeScript e Styled Components' },
        { icon: <FaMobileAlt />, text: 'Botão Flutuante para WhatsApp' }
      ],
      thumbnailUrl: '/images/projects/eiprotagonistas.png',
      link: 'https://ei-protagonistas-app.vercel.app/'
    }
  ]

  return (
    <AboutContainer id="sobre">
      <ContentWrapper>
        <SectionTitle>
          <FaRobot />
          Sobre Mim
          <FaCode />
        </SectionTitle>

        <IntroText>
          Prazer, meu nome é <strong>Cassio Nicoletti Schroeder Teixeira</strong>, 
          nascido em 02/07/2001. Trabalho com desenvolvimento de software há 5 anos 
          e com robótica há mais de 10 anos. Sou entusiasta da tecnologia, atuando 
          tanto em front-end quanto back-end, com primeiras aplicações desenvolvidas 
          aos 10 anos de idade.
        </IntroText>

        <IntroText>
          <strong>Formação:</strong> Estudante de Engenharia de Automação na FURG e 
          formado técnico em Automação Industrial pelo IFRS.<br/>
          <strong>Idiomas:</strong> Português (nativo) e Inglês (fluente).
        </IntroText>

        <SectionTitle id="projetos">
            Meus Projetos
        </SectionTitle>

        <TabsWrapper>
          <TabButton 
            active={activeTab === 'robotics'}
            onClick={() => setActiveTab('robotics')}
          >
            <FaRobot />
            Robótica
          </TabButton>
          <TabButton 
            active={activeTab === 'dev'}
            onClick={() => setActiveTab('dev')}
          >
            <FaCode />
            Desenvolvimento
          </TabButton>
        </TabsWrapper>

        {activeTab === 'robotics' ? (
          <ExperienceList>
            {roboticsAchievements.map((item, index) => (
              <ExperienceItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                <ContentWrapper>
                  <DetailItem>
                    {item.text}
                    {item.subItems && (
                      <DetailList>
                        {item.subItems.map((subItem, idx) => (
                          <DetailItem key={idx}>
                            {subItem.icon}
                            {subItem.text}
                          </DetailItem>
                        ))}
                      </DetailList>
                    )}
                  </DetailItem>
                </ContentWrapper>
              </ExperienceItem>
            ))}
          </ExperienceList>
        ) : (
          <ExperienceList>
            {devProjects.map((project, index) => (
              <ExperienceItem key={index}>
                <IconWrapper>{project.icon}</IconWrapper>
                <ContentWrapper>
                  <ProjectTitle>
                    {project.icon}
                    {project.title}
                  </ProjectTitle>
                  <DetailList>
                    {project.details.map((detail, idx) => (
                      <DetailItem key={idx}>
                        {detail.icon}
                        {detail.text}
                      </DetailItem>
                    ))}
                  </DetailList>
                </ContentWrapper>
                <ThumbnailWrapper 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src={project.thumbnailUrl} 
                    alt={`Thumbnail do projeto ${project.title}`} 
                  />
                  <div className="overlay">
                    <FaExternalLinkAlt />
                  </div>
                </ThumbnailWrapper>
              </ExperienceItem>
            ))}
          </ExperienceList>
        )}
      </ContentWrapper>
    </AboutContainer>
  )
}