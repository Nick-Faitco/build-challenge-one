interface CardCustomProps {
  quote : string
}

const CardCustom = (props: CardCustomProps) => {
  const {quote} = props;

  return (<div>{quote}</div>)
}

export default CardCustom;