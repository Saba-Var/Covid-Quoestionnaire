import StartSvgHover from '../../Assets/images/startingQuestionnaireHover.png';
import StartSvg from '../../Assets/svg/startingQuestionnaire.svg';
import RedberryLogo from '../../Assets/images/Redberry-Logo.png';
import { Link } from 'react-router-dom';
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
        <div
          className=''
          onMouseEnter={hoverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {!hover ? (
            <img
              src={StartSvg}
              alt='start questionnaire button'
              className='p-4 pt-0 hover:cursor-pointer w-50'
            />
          ) : (
            <Link to='/identification'>
              <img
                src={StartSvgHover}
                alt='start questionnaire button'
                className='p-4 pt-0 hover:cursor-pointer w-50'
              />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default StartingPage;
