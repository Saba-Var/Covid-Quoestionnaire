import RedberryLogoText from 'Assets/svg/Redberry-Logo(text).svg';

function Header(props) {
  return (
    <div className='bg-gray flex justify-between font-header font-bold items-center h-24 border-b-2 mb-10'>
      <img src={RedberryLogoText} alt='Redberry logo' className='w-36' />
      <p className='text-normal font-anonymous'>{props.page}/4</p>
    </div>
  );
}

export default Header;
