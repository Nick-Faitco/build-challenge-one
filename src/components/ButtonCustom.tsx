interface ButtonCustomProps {
  input: string
  handleSaveQuote: Function
}

const ButtonCustom = (props: ButtonCustomProps) => {
  const { input, handleSaveQuote} = props;

  return (
  <button onClick={() => handleSaveQuote()} disabled={input.length === 0} >add quote</button>
)
}

export default ButtonCustom;