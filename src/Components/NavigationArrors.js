import Arrow from '../Assets/svg/Arrow.svg';
import { Link } from 'react-router-dom';

function NavigationArrors(props) {
  return (
    <div
      className={`absolute ${
        props.top
      }  right-1/2 top-full hover:cursor-pointer z-10 w-36 h-fit flex ${
        props.back && props.back && 'justify-between'
      } ${!props.back && 'justify-end'} ${!props.next && 'justify-start'}`}
    >
      {props.back && (
        <Link to={props.back}>
          <button>
            <img
              src={Arrow}
              alt='arrow icon'
              className='w-4 hover:cursor-pointer z-10 rotate-180'
            />
          </button>
        </Link>
      )}

      {props.next &&
        (props.isValid ? (
          <Link to={props.next}>
            <button>
              <img
                src={Arrow}
                alt='arrow icon'
                className='w-4 hover:cursor-pointer z-10'
              />
            </button>
          </Link>
        ) : (
          <button>
            <img
              src={Arrow}
              alt='arrow icon'
              className='w-4 hover:cursor-pointer z-10'
            />
          </button>
        ))}
    </div>
  );
}

export default NavigationArrors;
