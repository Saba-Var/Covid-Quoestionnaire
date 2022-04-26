import RedberryLogo from '../../Assets/images/Redberry-Logo.png';
import StartButton from '../../Components/StartButton';
import start from '../../Assets/images/start.png';
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
          src={start}
          alt='Redberry logo'
          className='w-0 h-0 animate-shrink-center absolute z-10'
        />
        <img
          src={RedberryLogo}
          alt='Redberry logo'
          className='w-16 h-16 mb-24 hover:animate-rotate-center animat'
        />
        <div onMouseEnter={hoverHandler} onMouseLeave={mouseLeaveHandler}>
          <div className='overflow-hidden h-20 animate-hidden'>
            <div className=' animate-slide-down  '>
              <StartButton hover={hover} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StartingPage;
