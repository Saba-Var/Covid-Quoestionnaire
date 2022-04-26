import RedberryLogo from '../../Assets/images/Redberry-Logo.png';
import StartButton from '../../Components/StartButton';
import { useState } from 'react';
import Card from '../../UI/Card';

function StartingPage() {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => setHover(true);
  const mouseLeaveHandler = () => setHover(false);

  return (
    <Card>
      <div className='flex items-center flex-col mt-63.7 hover:cursor-pointer '>
        <img
          src={RedberryLogo}
          alt='Redberry logo'
          className='w-16 h-16 mb-24 hover:animate-rotate-center'
        />
        <div onMouseEnter={hoverHandler} onMouseLeave={mouseLeaveHandler}>
          <StartButton hover={hover} />
        </div>
      </div>
    </Card>
  );
}

export default StartingPage;
