import styled from 'styled-components'
import { Button } from '../../components/Button'
import { saveAs } from 'file-saver';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(203, 213, 225, 0.1);
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const NavItems = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

export const Header = () => {
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
    <HeaderWrapper>
      <Nav>
        <Logo>CNST01</Logo>
        <NavItems>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <Button 
            variant="primary" 
            size="medium"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? 'Baixando...' : 'Currículo'}
          </Button>
        </NavItems>
      </Nav>
    </HeaderWrapper>
  )
}