import illustration from 'Assets/images/boy&girl.png';
function IdentificationImg() {
  return (
    <div className='absolute right-[10%] top-[12%] '>
      <img src={illustration} alt='boy and girl' className='max-w-4xl' />
    </div>
  );
}

export default IdentificationImg;
