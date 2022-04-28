import { doctor } from 'assets/images';
function VaccinatedImg() {
  return (
    <>
      <div className='absolute right-40 top-36 '>
        <img src={doctor} alt='doctor' className='pt-8' />
      </div>
    </>
  );
}

export default VaccinatedImg;
