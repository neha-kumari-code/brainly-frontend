import type { ReactElement } from "react"

 interface ButtonProps{
    variant:"primary" | "secondary",
    text:string,
    onClick:()=>void,
    startIcon:ReactElement,
}
// if we want that icon should be provided with text then text: string | ReactElement, and remove the startIcon and endIcon key.
// and from button component if we wan to send icon send like this:- <Button text={<div className='flex'><PlusIcon/> share <PlusIcon/></div>}/>
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}
const defaultStyle="rounded px-4 py-2 font-light flex items-center"

export const Button=(props:ButtonProps)=>{
    return (
    <button className={`${variantStyles[props.variant]} ${defaultStyle}`}>
        <div className="flex items-center"> {/* taki tino ek line me aa jaye */}
        {props.startIcon? <div className="pr-2">{props.startIcon}</div>:null}{props.text}
        </div>
        {/* or simply write {props.startIcon} {props.text} {props.endIcon} */}
    </button>
    )
}