import StartingQuestionaireHover from 'Components/svgs/StartingQuestionaireHover';
import StartingQuestionnaire from 'Components/svgs/StartingQuestionnaire';
import { Link } from 'react-router-dom';

function StartButton(props) {
  return (
    <>
      {!props.hover ? (
        <StartingQuestionnaire />
      ) : (
        <Link to='/identification'>
          <StartingQuestionaireHover />
        </Link>
      )}
    </>
  );
}

export default StartButton;
