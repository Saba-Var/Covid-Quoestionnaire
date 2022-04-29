import { highTemperature } from 'assets/images';
function CovidImg() {
  return (
    <div className='pb-20'>
      <img
        src={highTemperature}
        alt='sick boy'
        className='absolute top-[14%] w-[42%] right-[10%]'
      />
    </div>
  );
}

export default CovidImg;
