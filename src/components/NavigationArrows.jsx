import { Link } from 'react-router-dom';
import { Arrow } from 'components/svgs';
function NavigationArrows(props) {
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
          <Link to={props.back} dataTestId='back'>
            <Arrow styles='rotate-180 w-4 hover:cursor-pointer ' />
          </Link>
        )}

        {props.next &&
          (props.isValid ? (
            <Link to={props.next} dataTestId='next'>
              <button>
                <Arrow styles='w-4 hover:cursor-pointer ' />
              </button>
            </Link>
          ) : (
            <button dataTestId='btn'>
              <Arrow styles='w-4 hover:cursor-pointer' />
            </button>
          ))}
      </div>
    </div>
  );
}

export default NavigationArrows;
