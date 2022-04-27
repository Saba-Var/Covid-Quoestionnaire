import HighTemperature from 'Assets/images/highTemperature.png';
function Image02() {
  return (
    <div className='absolute right-40 top-28 '>
      <img src={HighTemperature} alt='sick boy' className='pt-8' />
      <div className='bg-red-500 h-56 w-56 rounded-full absolute top-72 left-24 mix-blend-multiply hover:animate-flip-scale-up-hor'></div>
    </div>
  );
}

export default Image02;
