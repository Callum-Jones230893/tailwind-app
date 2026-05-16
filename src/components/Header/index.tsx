import { CaretDoubleRightIcon, CaretDoubleLeftIcon } from "@phosphor-icons/react"

const Header = () => {
  return (
    <div className="flex justify-center p-8 bg-backdrop backdrop-blur-xs text-center sticky top-0 tracking-wide z-20 shadow-2xl">
      <div className="flex flex-1 justify-center">
        <h1 className="text-[32px] font-bold tracking-wider text-yellow-50">Elden Ring</h1>
      </div>
    </div>
  )
}

export default Header