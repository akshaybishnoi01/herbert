const PrimaryParagraph = (props) => {
    return (
        <p className={`${props.className} font-normal sm:text-base text-sm sm:leading-6 leading-[21px] text-gray`}>{props.text}</p>
    )
}

export default PrimaryParagraph