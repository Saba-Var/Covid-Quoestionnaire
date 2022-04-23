function Card(props) {
  return (
    <div className=' bg-gray w-full pb-26 pl-50 pr-41.2 pt-12 h-270'>
      {props.children}
    </div>
  );
}

export default Card;
