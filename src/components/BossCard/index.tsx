import type { BossType } from "../../types/Boss"

const BossCard = ({ name, image, description, location, healthPoints }: BossType) => {
  return (
    <div className="flex flex-col justify-center p-6 rounded-2xl  bg-black/50 shadow-2xl shadow-yellow-50  backdrop-blur-xs sm:w-full md:w-1/3">
      <h2 className="pb-5 text-center font-bold underline underline-offset-8 tracking-wide text-2xl">{name}</h2>
      {image && <img className="rounded-md object-fill shadow-lg w-125 mx-auto" src={image} alt={name} />}
      <div className="flex flex-col gap-2 pt-5 tracking-wide">
        <p className="pb-4">{description}</p>
        <p>Hitpoints : {healthPoints}</p>
        <p>Location : {location}</p>
      </div>
    </div>
  )
}

export default BossCard