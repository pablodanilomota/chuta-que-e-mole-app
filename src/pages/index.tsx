import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { Game } from '~/components/Game'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { IGame } from '~/types/game'

export default function Home({ games }: { games: string }) {
  const gamesParse = JSON.parse(games) as IGame[]

  return (
    <>
      <Head>
        <title>Chuta que é mole</title>
      </Head>

      <AliceCarousel
        mouseTracking
        items={gamesParse.map(game => (
          <Game key={game.id} game={game} />
        ))}
      />
    </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()

  const games = JSON.stringify(
    await prisma.game
      .findMany({
        include: {
          Championship: true,
          Stadium: true,
          TeamAway: true,
          TeamHome: true
        }
      })
      .then(async data => {
        await prisma.$disconnect()
        return data
      }),
    null,
    2
  )

  return {
    props: { games }
  }
}
