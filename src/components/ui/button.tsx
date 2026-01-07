 interface ButtonProps{
    variant:"primary" | "secondary",
    size:"sm" | "md" | "lg",
    text:string,
    onClick:()=>void,
    startIcon?:any,
    endIcon?:any
}
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-700"
}
const sizeStyle={
    "sm":"w-15 h-10",
    "md":"w-28 h-10",
    "lg":"w-35 h-16"
}
const defaultStyle="rounded test-center"
// const statIconSty={

// }
export const Button=(props:ButtonProps)=>{
    return (
    <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
        {`${props.startIcon?props.startIcon:''}${props.text}${props.endIcon?props.endIcon:''}`}
    </button>
    )
}