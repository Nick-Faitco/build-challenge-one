import { useRef } from "react";

interface InputCustomProps {
  setInput : React.Dispatch<React.SetStateAction<string>>
}

const InputCustom = (props: InputCustomProps) => {
  const { setInput } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = () => {
    if ( inputRef.current ) {
      if (inputRef.current.value.length > 0){
        setInput(inputRef.current.value)
      }
      else {
        setInput('')
      }
    }
  }

  return (<><input onChange={() => handleChange()} ref={inputRef} placeholder="enter your own awesome quote"></input></>)
}

export default InputCustom;