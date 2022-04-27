import StartingQuestionaireHover from 'Components/svgs/StartingQuestionaireHover.svg';
import StartingQuestionnaire from 'Components/svgs/StartingQuestionnaire';
import { Link } from 'react-router-dom';

function StartButton(props) {
  return (
    <>
      {!props.hover ? (
        <StartingQuestionnaire />
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
