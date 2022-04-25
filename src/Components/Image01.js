import illustration from '../Assets/images/boy&girl.png';
function Image01() {
  return (
    <div className='absolute right-40 top-36 '>
      <img src={illustration} alt='boy and girl' className='max-w-4xl' />
      <div className='h-[75px] w-[622px] z-30 bg-yellow left-1/2 absolute translate-x-[-50%] top-56 mix-blend-darken'></div>
    </div>
  );
}

export default Image01;
