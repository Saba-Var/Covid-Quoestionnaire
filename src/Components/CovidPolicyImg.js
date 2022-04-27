import HeartIcon from 'Assets/svg/HeartIcon.svg';
import Bike from 'Assets/images/bike.png';
function CovidPolicyImg() {
  return (
    <div className='absolute right-48 top-28 '>
      <img src={Bike} alt='boy with bike' className='pt-32' />
      <img
        src={HeartIcon}
        alt='heart icon'
        className='w-48 z-10 absolute top-48 left-24 mix-blend-multiply'
      />
    </div>
  );
}

export default CovidPolicyImg;
