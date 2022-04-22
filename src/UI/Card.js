function Card(props) {
  return (
    <div className=' bg-gray w-full pb-26 pl-50 pr-41.2 pt-22.2 h-270'>
      {props.children}
    </div>
  );
}

export default Card;
