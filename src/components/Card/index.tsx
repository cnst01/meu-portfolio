import styled from 'styled-components'

interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const CardContainer = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

export const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  )
}