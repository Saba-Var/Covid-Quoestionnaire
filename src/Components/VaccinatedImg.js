import DoctorImg from 'Assets/images/doctor.png';
import star from 'Assets/svg/star.svg';

function VaccinatedImg() {
  return (
    <>
      <div className='absolute right-40 top-36 '>
        <img src={DoctorImg} alt='doctor' className='pt-8' />
      </div>
      <img
        src={star}
        alt='star'
        className='absolute right-[622px] top-40 mix-blend-darken'
      />
    </>
  );
}

export default VaccinatedImg;
