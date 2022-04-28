function Card(props) {
  return (
    <div
      className={`w-full pb-26 pl-50 pr-41.2 pt-12 h-screen overflow-hidden ${props.styles}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
