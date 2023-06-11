type ButtonProps = {
  children: string
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[100px] bg-indigo-50 px-8 py-2 text-center font-bold uppercase text-midnight-950 transition-colors hover:bg-lavender-500 hover:text-white"
    >
      {children}
    </button>
  )
}
export default Button
