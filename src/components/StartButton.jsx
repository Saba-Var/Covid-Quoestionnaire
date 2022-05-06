import { Link } from 'react-router-dom';
import {
  StartingQuestionaireHover,
  StartingQuestionnaire,
} from 'components/svgs';
function StartButton(props) {
  return (
    <>
      <Link to='Identification'>
        {!props.hover ? (
          <StartingQuestionnaire />
        ) : (
          <StartingQuestionaireHover />
        )}
      </Link>
    </>
  );
}

export default StartButton;
