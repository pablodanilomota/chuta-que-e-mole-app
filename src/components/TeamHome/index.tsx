import { TeamHome } from '~/types/game'
import { Container, Title } from './style'

export function TeamHome({ teamHome }: { teamHome: TeamHome }) {
  return (
    <Container>
      <Title>{teamHome.name}</Title>
    </Container>
  )
}
