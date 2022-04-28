import Arrow from 'Components/svgs/Arrow';
import { Link } from 'react-router-dom';

function NavigationArrors(props) {
  return (
    <div
      className={`absolute h-10 flex items-center ${props.top} ${
        props.left
      }  hover:cursor-pointer z-10 w-36 h-fit flex ${
        props.back && props.back && 'justify-between'
      } ${!props.back && 'justify-end'} ${!props.next && 'justify-start'}`}
    >
      <div className='flex gap-32'>
        {props.back && (
          <Link to={props.back}>
            <Arrow styles='rotate-180 w-4 hover:cursor-pointer ' />
          </Link>
        )}

        {props.next &&
          (props.isValid ? (
            <Link to={props.next}>
              <button>
                <Arrow styles='w-4 hover:cursor-pointer ' />
              </button>
            </Link>
          ) : (
            <button>
              <Arrow styles='w-4 hover:cursor-pointer' />
            </button>
          ))}
      </div>
    </div>
  );
}

export default NavigationArrors;
