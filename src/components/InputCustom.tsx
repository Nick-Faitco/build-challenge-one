interface InputCustomProps {
  input: string;
  setInput : React.Dispatch<React.SetStateAction<string>>
}

const InputCustom = (props: InputCustomProps) => {
  const { input, setInput } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (<><input onChange={(e) => handleChange(e)} value={input} placeholder="enter your own awesome quote"></input></>)
}

export default InputCustom;