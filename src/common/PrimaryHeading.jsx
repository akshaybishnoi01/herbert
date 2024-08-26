const PrimaryHeading = (props) => {
    return (
        <h2 className={`${props.className} font-rubik font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[56px] md:leading-10 sm:leading-9 leading-7 text-black`}>{props.text}
            <span className='text-offRed font-rubik font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[56px] md:leading-10 sm:leading-9 leading-7'>{props.redText}</span>{props.blackText}
        </h2 >
    )
}

export default PrimaryHeading