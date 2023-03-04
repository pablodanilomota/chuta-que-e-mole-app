import { Championship } from '~/types/game'
import { Container, Title } from './style'

export function Championship({ championship }: { championship: Championship }) {
  return (
    <Container>
      <Title>{championship.name}</Title>
    </Container>
  )
}
