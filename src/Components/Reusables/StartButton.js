import StartingQuestionaireHover from 'Components/svgs/StartingQuestionaireHover.svg';
import StartingQuestionnaire from 'Components/svgs/StartingQuestionnaire.svg';
import { Link } from 'react-router-dom';

function StartButton(props) {
  return (
    <>
      {!props.hover ? (
        <img
          src={StartingQuestionnaire}
          alt='start questionnaire button'
          className='p-4 pt-1 hover:cursor-pointer w-50'
        />
      ) : (
        <Link to='/identification'>
          <img
            src={StartingQuestionaireHover}
            alt='start questionnaire button'
            className='p-4 pt-0 hover:cursor-pointer w-50'
          />
        </Link>
      )}
    </>
  );
}

export default StartButton;
