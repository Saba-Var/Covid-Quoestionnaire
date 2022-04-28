import { Link } from 'react-router-dom';
import {
  StartingQuestionaireHover,
  StartingQuestionnaire,
} from 'components/svgs';
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
