import Input from "../../Template/Input"
import Label from "../../Template/Label"

const InputGroup = (props) => {
  return (
    <div className={`input-group ${ props.inputGroupClass ?? '' }`}>
        <Label htmlFor={props.inputGrouId}>{ props.labelContent }</Label>
        <Input 
        id={ props.inputGrouId } 
        type={ props.inputType } 
        placeholder={ props.placeholder } 
        defaultValue={ props.value } 
        onChange={ (e) => console.log(e.target.value) }/>
    </div>
  )
}

export default InputGroup