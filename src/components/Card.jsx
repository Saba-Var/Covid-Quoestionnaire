function Card(props) {
  return (
    <div className='w-full pb-26 pl-50 pr-41.2 pt-12 overflow-hidden'>
      {props.children}
    </div>
  );
}

export default Card;
