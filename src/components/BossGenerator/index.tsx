import BossCard from "../BossCard"
import Button from "../Button"

const BossGenerator = () => {

  return (
    <div className="text-yellow-50 m-4">
        <Button />
        <div className="flex flex-col items-center p-6 justify-center">
          <BossCard />
        </div>
    </div>
  )
}

export default BossGenerator