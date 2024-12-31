import Input from "../../Template/Input"
import Label from "../../Template/Label"

const InputGroup = (props) => {
  return (
    <div className={`input-group ${ props.GroupClass ?? '' }`}>
        <Label htmlFor={props.inputGrouId}>{ props.labelContent }</Label>
        <Input 
        id={ props.inputGrouId } 
        type={ props.inputType } 
        placeholder={ props.placeholder } 
        defaultValue={ props.value } 
        { ...props.inputProps }
          
        />
    </div>
  )
}

export default InputGroup