import { boyAndGirl } from 'assets/images';

function IdentificationImg() {
  return (
    <div className='absolute right-0 3xl:right-36 top-28 '>
      <img
        src={boyAndGirl}
        alt='boy and girl'
        className='xl:w-[72%] 3xl:w-[100%]'
      />
    </div>
  );
}

export default IdentificationImg;
