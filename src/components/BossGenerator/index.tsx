import { useState } from 'react'
import { randomBoss } from '../../hooks/BossFetch'
import type { BossType } from '../../types/Boss'
import BossCard from "../BossCard"
import Button from "../Button"

const BossGenerator = () => {
  const [diplayBoss, setDisplayBoss] = useState<BossType>(randomBoss)

  return (
    <div className="text-yellow-50 m-4">
        <Button updateBoss={() => setDisplayBoss(randomBoss())} />
        <div className="flex flex-col items-center p-6 justify-center">
          <BossCard boss={diplayBoss} />
        </div>
    </div>
  )
}

export default BossGenerator