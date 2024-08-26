const PrimaryButton = (props) => {
    return (
      <button className={`${props.className} rounded-lg py-[14px] text-nowrap px-6 font-rubik font-semibold sm:text-base text-sm sm:leading-[18px] leading-[16.59px] transition-all duration-500`}>{props.text}
      </button>
    )
  }
  
  export default PrimaryButton