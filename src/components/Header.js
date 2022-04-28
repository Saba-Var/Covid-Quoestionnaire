import { RedberryLogoText } from 'components/svgs';
function Header(props) {
  return (
    <div className=' flex justify-between font-header font-bold items-center h-24 border-b-2 mb-10'>
      <RedberryLogoText />
      <p className='text-normal font-anonymous'>{props.page}/4</p>
    </div>
  );
}

export default Header;
