const CarCards = ({
        imageLink,
        altText = 'CarImage',
        carName,
        price,
        specs=[],
        className = "",
         ...props
    }) => {
  return (
    <div 
        className={`mt-10 bg-zinc-900 text-white rounded-3xl grid grid-rows-[auto_auto_auto] gap-4 shadow-lg overflow-hidden ${className}`}
        {...props}
    >
        <div className={`h-56 w-full rounded-2xl overflow-hidden`}>
            <img 
                src={imageLink} 
                alt={altText} 
                className={`w-full h-full object-cover`}
            />
        </div>

        {/*Car specs*/}
        <div className={`px-5 flex items-center justify-between text-zinc-400 text-sm py-2 border-b border-zinc-800`}
        >
            {specs.map((spec,index) => {
                const SpecIcon = spec.icon;

                return(
                    <div key={index} className="flex items-center gap-2">
                        {SpecIcon && <SpecIcon className="h-5 w-5 text-blue-400" />}
                        <span>{spec.text}</span>
                    </div>
                )
            })}
        </div>

        {/**/}
        <div className="flex items-center justify-between pt-1 pb-3 px-5">
            <h3 className="text-xl font-semibold text-white">{carName}</h3>
            <span className="text-xl font-bold text-blue-500">{price}</span>
      </div>

    </div>
  )
}

export default CarCards