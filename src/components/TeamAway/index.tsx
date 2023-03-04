import { TeamAway } from '~/types/game'
import { Container, Title } from './style'

export function TeamAway({ teamAway }: { teamAway: TeamAway }) {
  return (
    <Container>
      <Title>{teamAway.name}</Title>
    </Container>
  )
}
