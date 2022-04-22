import illustration from '../../Assets/images/boy&girl.png';
import RightArrow from '../../Assets/svg/rightArrow.svg';
import Header from '../../Layouts/Header';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';
import FirstName from '../../Components/01-Inputs/FirstName';
import LastName from '../../Components/01-Inputs/LastName';
import Email from '../../Components/01-Inputs/Email';

function Identification() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  //validation for input fields
  const errStr = 'ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან';
  const minLength = (value, target) =>
    value.trim().length >= 2 || `${target} ${errStr}`;

  const onlyLetters = (value, target) =>
    /^[a-zA-Z]+$/.test(value) ||
    `${target} ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;

  return (
    <Card>
      <Header page='1' />
      <div className='flex justify-between'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FirstName
            errors={errors}
            register={register}
            minLength={minLength}
            onlyLetters={onlyLetters}
          />
          <LastName
            errors={errors}
            register={register}
            minLength={minLength}
            onlyLetters={onlyLetters}
          />
          <Email errors={errors} register={register} />
          <div className='border-t-[1px] w-fit pt-4 mt-12'>
            <p className='text-slate-500'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
          {isValid ? (
            <Link to='/covid-situation'>
              <button>
                <img
                  src={RightArrow}
                  alt='arrow icon'
                  className='w-4 absolute bottom-4 right-1/2 top-full hover:cursor-pointer z-10'
                />
              </button>
            </Link>
          ) : (
            <button>
              <img
                src={RightArrow}
                alt='arrow icon'
                className='w-4 absolute bottom-4 right-1/2 top-full hover:cursor-pointer z-10'
              />
            </button>
          )}
        </form>
        <div className='absolute right-40 top-36 '>
          <img src={illustration} alt='boy and girl' className='max-w-4xl' />
          <div className='h-[75px] w-[622px] z-30 bg-yellow left-1/2 absolute translate-x-[-50%] top-56 mix-blend-darken'></div>
        </div>
      </div>
    </Card>
  );
}

export default Identification;
