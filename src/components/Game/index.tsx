import { IGame } from '~/types/game'
import { Championship } from '../Championship'
import { TeamAway } from '../TeamAway'
import { TeamHome } from '../TeamHome'
import { Container, Date, TeamsContainer } from './style'

export function Game({ game }: { game: IGame }) {
  return (
    <Container>
      <Championship championship={game.Championship} />
      <TeamsContainer>
        <TeamHome teamHome={game.TeamHome} />
        <TeamAway teamAway={game.TeamAway} />
      </TeamsContainer>
      <Date>{String(game.startDate)}</Date>
    </Container>
  )
}
