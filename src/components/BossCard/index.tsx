import { randomBoss } from "../../hooks/BossFetch"

const BossCard = () => {
  return (
    <div className="flex flex-col justify-center p-6 rounded-2xl  bg-black/50 shadow-2xl shadow-yellow-50  backdrop-blur-xs sm:w-full md:w-1/2">
      <h2 className="pb-5 text-center font-bold underline underline-offset-8 tracking-widest text-2xl first-letter:text-3xl">{randomBoss.name}</h2>
      {randomBoss.image && <img className="rounded-md object-fill shadow-lg w-125 mx-auto transition-all duration-300 hover:scale-110 bg-linear-to-tr from-yellow-50 to-red-50 p-0.5" 
        src={randomBoss.image} 
        alt={randomBoss.name} 
      />}
      <div className="flex flex-col gap-2 pt-5 tracking-wide">
        <p className="pb-4 text-2xl">{randomBoss.description}</p>
        <p>Hitpoints : {randomBoss.healthPoints}</p>
        <p className="first-letter:text-2xl text-[20px]">Location : {randomBoss.location}</p>
      </div>
    </div>
  )
}

export default BossCard