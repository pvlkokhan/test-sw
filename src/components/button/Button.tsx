 export type ButtonProps = {
    text: string,
    fill?: boolean
 }

 function Button(props: ButtonProps) {
    return (
        <button className={`button ${props.fill ? "button__fill" : "button__primary"}`}>{props.text}</button>
    )
}

export default Button;