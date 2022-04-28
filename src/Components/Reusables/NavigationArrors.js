import Arrow from 'Components/svgs/Arrow';
import { Link } from 'react-router-dom';

function NavigationArrors(props) {
  const arrow = <Arrow styles='w-4 hover:cursor-pointer hover:w-5 z-10' />;
  return (
    <div
      className={`absolute h-10 flex items-center ${
        props.top
      } translate-x-2/4  right-1/2 top-full hover:cursor-pointer z-10 w-36 h-fit flex ${
        props.back && props.back && 'justify-between'
      } ${!props.back && 'justify-end'} ${!props.next && 'justify-start'}`}
    >
      {props.back && (
        <Link to={props.back}>
          <div className='rotate-180'>{arrow}</div>
        </Link>
      )}
      {props.next &&
        (props.isValid ? (
          <Link to={props.next}>
            <button>{arrow}</button>
          </Link>
        ) : (
          <button>{arrow}</button>
        ))}
    </div>
  );
}

export default NavigationArrors;
