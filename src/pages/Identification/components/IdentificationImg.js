import { boyAndGirl } from 'assets/images';

function IdentificationImg() {
  return (
    <div className='absolute right-[10%] top-[12%] '>
      <img src={boyAndGirl} alt='boy and girl' className='max-w-4xl' />
    </div>
  );
}

export default IdentificationImg;
