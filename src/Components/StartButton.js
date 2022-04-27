import startTextHover from 'Assets/svg/startingQuestionaire-hover.svg';
import startText from 'Assets/svg/startingQuestionnaire.svg';
import { Link } from 'react-router-dom';

function StartButton(props) {
  return (
    <>
      {!props.hover ? (
        <img
          src={startText}
          alt='start questionnaire button'
          className='p-4 pt-1 hover:cursor-pointer w-50'
        />
      ) : (
        <Link to='/identification'>
          <img
            src={startTextHover}
            alt='start questionnaire button'
            className='p-4 pt-0 hover:cursor-pointer w-50'
          />
        </Link>
      )}
    </>
  );
}

export default StartButton;
