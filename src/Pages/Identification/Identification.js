import illustration from '../../Assets/images/boy&girl.png';
import RightArrow from '../../Assets/svg/rightArrow.svg';
import InputWrapper from '../../Components/InputWrapper';
import Header from '../../Layouts/Header';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

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
          <InputWrapper target={errors.firstName}>
            <label className='font-bold text-tiny'>სახელი*</label>
            <input
              {...register('firstName', {
                required: `სახელის ${errStr}`,
                validate: {
                  minLength: (v) => minLength(v, 'სახელის'),
                  onlyLetters: (v) => onlyLetters(v, 'სახელის'),
                },
              })}
              type='text'
              className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
                errors.firstName && 'bg-red-200'
              }`}
              placeholder='იოსებ'
            />
          </InputWrapper>
          <InputWrapper target={errors.lastName}>
            <label className='font-bold text-tiny '>გვარი*</label>
            <input
              {...register('lastName', {
                required: `გვარის ${errStr}`,
                validate: {
                  minLength: (v) => minLength(v, 'გვარის'),
                  onlyLetters: (v) => onlyLetters(v, 'გვარის'),
                },
              })}
              type='text'
              className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
                errors.lastName && 'bg-red-200'
              }`}
              placeholder='ჯუღაშვილი'
            />
          </InputWrapper>
          <InputWrapper target={errors.email}>
            <label className='font-bold text-tiny '>მეილი*</label>
            <input
              {...register('email', {
                required: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
                validate: {
                  emailFormat: (v) =>
                    v.includes('@redberry.ge') ||
                    'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
                },
              })}
              type='email'
              className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
                errors.email && 'bg-red-200'
              }`}
              placeholder='fbi@redberry.ge'
            />
          </InputWrapper>
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
