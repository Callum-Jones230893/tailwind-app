type ButtonProps = {
  updateBoss: () => void
}

const Button = ({updateBoss}: ButtonProps) => {

  return (
    <button className="bg-button p-5 text-2xl rounded-4xl tracking-wider border border-yellow-50 
      border-solid cursor-pointer hover:scale-115 hover:bg-primary hover:shadow-lg 
      hover:shadow-yellow-50 transition-all duration-300 w-fit"
      onClick={updateBoss}
    >
      Generate a Boss
    </button>
  )
}

export default Button