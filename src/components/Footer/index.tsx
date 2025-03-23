// src/components/Footer/index.tsx
import styled from 'styled-components'
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { useState } from 'react'
import { saveAs } from 'file-saver';
import { Button } from '../Button';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
    }
  }
`

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: transform 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }

  &:hover {
    transform: translateX(10px);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
`

export const Footer = () => {

  const [isDownloading, setIsDownloading] = useState(false)
  
  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      // 1. Usar caminho absoluto
      const response = await fetch(`${window.location.origin}/pdf/curriculo.pdf`)
      
      // 2. Verificar se a resposta é válida
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      // 3. Criar blob e verificar tamanho
      const blob = await response.blob()
      
      if (blob.size === 0) {
        throw new Error('O arquivo está vazio ou não foi encontrado')
      }
      
      // 4. Salvar arquivo
      saveAs(blob, 'Curriculo_Cassio_Nicoletti.pdf')
      
    } catch (error) {
      console.error('Erro no download:', error)
      alert('Erro ao baixar o currículo. Por favor, tente novamente.')
    } finally {
      setIsDownloading(false)
    }
  }
  

  return (
    <FooterContainer id="contato">
      <FooterContent>
        {/* Seção Contato */}
        <FooterSection>
          <h3>
            <FaMapMarkerAlt />
            Contato
          </h3>
          <ContactList>
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <p>Rio Grande, RS</p>
                <p>Brasil</p>
              </div>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:cassionst@gmail.com">
                cassionst@gmail.com
              </a>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <a href="tel:+5553981473135">
                +55 (53) 98147-3135
              </a>
            </ContactItem>
          </ContactList>
        </FooterSection>

        {/* Seção Redes Sociais */}
        <FooterSection>
          <h3>
            <FaLinkedin />
            Redes Sociais
          </h3>
          <SocialLinks>
            <a href="https://github.com/cnst01" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/cassionicoletti/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/c_nicoletti" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialLinks>
        </FooterSection>

        {/* Seção Links Rápidos */}
        <FooterSection>
          <h3>Links Rápidos</h3>
          <ContactList>
            <ContactItem>
              <a href="#sobre">Sobre Mim</a>
            </ContactItem>
            <ContactItem>
              <a href="#projetos">Projetos</a>
            </ContactItem>
            <ContactItem>
              <Button 
                variant="primary" 
                size="medium"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? 'Baixando...' : 'Currículo'}
              </Button>
            </ContactItem>
          </ContactList>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Cassio Nicoletti. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  )
}