export interface Championship {
  id: number
  name: string
  createdAt: Date
}

export interface Stadium {
  id: number
  name: string
  address: string
  createdAt: Date
}

export interface TeamAway {
  id: number
  name: string
  shieldUrl: string
  createdAt: Date
}

export interface TeamHome {
  id: number
  name: string
  shieldUrl: string
  createdAt: Date
}

export interface IGame {
  id: number
  eventType: string
  startDate: Date
  createdAt: Date
  stadiumId: number
  teamHomeId: number
  teamAwayId: number
  championshipId: number
  Championship: Championship
  Stadium: Stadium
  TeamAway: TeamAway
  TeamHome: TeamHome
}
