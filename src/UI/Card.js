function Card(props) {
  return (
    <div className='h-screen w-full bg-gray pb-26 pl-50 pr-41.2 pt-22.2'>
      {props.children}
    </div>
  );
}

export default Card;
