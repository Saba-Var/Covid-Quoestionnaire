import { highTemperature } from 'assets/images';
function CovidImg() {
  return (
    <div className='absolute right-0 3xl:right-36 top-28 '>
      <img
        src={highTemperature}
        alt='sick boy'
        className='pt-8 xl:w-[72%] 3xl:w-[100%]'
      />
    </div>
  );
}

export default CovidImg;
