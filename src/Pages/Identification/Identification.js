import Card from '../../UI/Card';
import RedberryLogoText from '../../Assets/svg/Redberry-Logo(text).svg';
import illustration from '../../Assets/images/boy&girl.png';
import RightArrow from '../../Assets/svg/rightArrow.svg';

function Identification() {
  return (
    <Card>
      <div className='bg-gray flex justify-between font-header font-bold items-center h-24 border-b-2 mb-10'>
        <img src={RedberryLogoText} alt='Redberry logo' className='w-36' />
        <p className='text-normal font-anonymous'>1/4</p>
      </div>
      <div className='flex justify-between'>
        <form>
          <div className='flex flex-col gap-4 mb-6 h-32'>
            <label className='font-bold text-tiny w-128'>სახელი*</label>
            <input
              type='text'
              className='border-2 h-12 px-5 border-black border-x border-y bg-transparent'
              placeholder='იოსებ'
            />
          </div>
          <div className='flex flex-col gap-4 mb-6 h-32'>
            <label className='font-bold text-tiny w-128'>გვარი*</label>
            <input
              type='text'
              className='border-2 h-12 px-5 border-black border-x border-y bg-transparent'
              placeholder='ჯუღაშვილი'
            />
          </div>
          <div className='flex flex-col gap-4 mb-16 h-32'>
            <label className='font-bold text-tiny w-128'>მეილი*</label>
            <input
              type='email'
              className='border-2 h-12 px-5 border-black border-x border-y bg-transparent'
              placeholder='fbi@redberry.ge'
            />
          </div>
          <div className='border-t-[1px] w-fit pt-4'>
            <p className='text-slate-500'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
          <button>
            <img
              src={RightArrow}
              alt='arrow icon'
              className='w-4 absolute bottom-4 right-1/2 top-full hover:cursor-pointer z-10'
            />
          </button>
        </form>
        <div className='absolute right-40 top-36 '>
          <img src={illustration} alt='boy and girl' className='max-w-4xl' />
          <div className='h-[75px] w-[622px] z-30 bg-yellow left-1/2 absolute translate-x-[-50%] top-56 mix-blend-darken'></div>
        </div>
      </div>
    </Card>
  );
}

export default Identification;
