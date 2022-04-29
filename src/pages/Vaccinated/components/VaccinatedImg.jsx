import { doctor } from 'assets/images';
function VaccinatedImg() {
  return (
    <>
      <div className='pb-20'>
        <img
          src={doctor}
          alt='doctor'
          className='absolute top-[20%] w-[35%] right-[13%]'
        />
      </div>
    </>
  );
}

export default VaccinatedImg;
