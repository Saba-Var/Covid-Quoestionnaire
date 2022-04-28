import { doctor } from 'assets/images';
function VaccinatedImg() {
  return (
    <>
      <div className='absolute right-0 3xl:right-36 top-28 '>
        <img
          src={doctor}
          alt='doctor'
          className='pt-8 xl:w-[72%] 3xl:w-[100%]'
        />
      </div>
    </>
  );
}

export default VaccinatedImg;
