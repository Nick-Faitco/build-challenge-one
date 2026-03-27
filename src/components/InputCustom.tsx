interface InputCustomProps {
  input: string;
  setInput : React.Dispatch<React.SetStateAction<string>>
}

const InputCustom = (props: InputCustomProps) => {
  const { input, setInput } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (<input id='input_field'type='text' onChange={(e) => handleChange(e)} value={input} placeholder="enter your own awesome quote" style={{width: "50%"}}></input>)
}

export default InputCustom;