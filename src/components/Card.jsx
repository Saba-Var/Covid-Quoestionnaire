function Card(props) {
  return (
    <div
      className={`w-full px-28 2xl:px-50  2xl:pt-12 h-screen overflow-hidden ${props.styles}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
