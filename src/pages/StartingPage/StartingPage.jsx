import { StartButton, Card } from 'components';
import { RedberryLogo } from 'assets/images';
import { MainLogo } from 'components/svgs';
import { useState } from 'react';

function StartingPage() {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => setHover(true);
  const mouseLeaveHandler = () => setHover(false);

  return (
    <Card>
      <div className='flex items-center flex-col mt-63.7 hover:cursor-pointer '>
        <MainLogo styles={'w-0 h-0 animate-shrink-center absolute z-10'} />
        <img
          dataTestId={'RedberryLogo'}
          src={RedberryLogo}
          alt='Redberry logo'
          className='w-16 h-16 mb-24 hover:animate-rotate-center '
        />
        <div
          onMouseEnter={hoverHandler}
          onMouseLeave={mouseLeaveHandler}
          dataTestId={'startSvg'}
        >
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
