import type { BossType } from "../types/Boss"

const GetBoss = async (): Promise<BossType[]> => {
  const response = await fetch("https://eldenring.fanapis.com/api/bosses?limit=100").then((res) => res.json())
  const bossInfo = response.data

  return bossInfo
}

export const bossData = await GetBoss()
export const randomBoss: BossType = bossData[Math.floor(Math.random() * bossData.length)]

