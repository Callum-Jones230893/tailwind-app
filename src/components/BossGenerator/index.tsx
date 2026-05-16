// import { useState } from "react";
import BossCard from "../BossCard"
import { bossData } from "../../hooks/BossFetch"

const BossGenerator = () => {

  return (
    <div className="text-yellow-50 mt-4">
      {bossData.map((boss, index) => 
        <div key={index} className="flex flex-col items-center p-6 m-[0 auto]">
          <BossCard {...boss} />
        </div>
      )}
    </div>
  )
}

export default BossGenerator