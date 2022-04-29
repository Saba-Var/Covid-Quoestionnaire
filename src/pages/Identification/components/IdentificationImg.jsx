import { boyAndGirl } from 'assets/images';

function IdentificationImg() {
  return (
    <div className='pb-20'>
      <img
        src={boyAndGirl}
        alt='boy and girl'
        className='absolute top-[10%] w-[45%] right-[10%]'
      />
    </div>
  );
}

export default IdentificationImg;
