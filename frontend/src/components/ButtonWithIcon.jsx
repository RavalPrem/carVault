const ButtonWithIcon = ({icon:Icon, children ,className, ...props}) => {
  return (
    <button
      type='button'
      className={`text-[20px] flex items-center gap-2 transition-colors rounded-full px-5 py-4 ${className}`}
      {...props}
    >
      {Icon && <Icon className='h-7 w-7'/>}
      <span>{children}</span>
    </button>
  )
}

export default ButtonWithIcon