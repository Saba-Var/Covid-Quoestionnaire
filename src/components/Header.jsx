import { RedberryLogoText } from 'components/svgs';
function Header(props) {
  return (
    <div
      className={`flex justify-between font-header font-bold items-center h-24 border-b-2 mb-10 z-[9999] ${props.styles}`}
    >
      <RedberryLogoText />
      <p className='text-normal font-anonymous z-[9999]'>{props.page}/4</p>
    </div>
  );
}

export default Header;
