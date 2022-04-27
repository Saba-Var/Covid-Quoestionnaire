import DoctorImg from 'Assets/images/doctor.png';

function VaccinatedImg() {
  return (
    <>
      <div className='absolute right-40 top-36 '>
        <img src={DoctorImg} alt='doctor' className='pt-8' />
      </div>
    </>
  );
}

export default VaccinatedImg;
