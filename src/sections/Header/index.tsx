import styled from 'styled-components'
import { Button } from '../../components/Button'

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
  return (
    <HeaderWrapper>
      <Nav>
        <Logo>CNST01</Logo>
        <NavItems>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <Button variant="primary" size="medium">
            Currículo
          </Button>
        </NavItems>
      </Nav>
    </HeaderWrapper>
  )
}