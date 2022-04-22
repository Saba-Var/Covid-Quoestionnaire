import RedberryLogoText from '../../Assets/svg/Redberry-Logo(text).svg';
import illustration from '../../Assets/images/boy&girl.png';
import RightArrow from '../../Assets/svg/rightArrow.svg';
import { useForm } from 'react-hook-form';
import Card from '../../UI/Card';
import Header from '../../Layouts/Header';

function Identification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <Header page='1' />
      <div className='flex justify-between'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-2 h-36'>
            <div className='flex flex-col gap-4'>
              <label className='font-bold text-tiny'>სახელი*</label>
              <input
                {...register('firstName', {
                  required:
                    'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
                  minLength: {
                    value: 2,
                    message:
                      'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                  },
                })}
                type='text'
                className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
                  errors.firstName && 'bg-red-200'
                }`}
                placeholder='იოსებ'
              />
            </div>
            {errors.firstName && (
              <p className='text-red-500 pl-5 text-base'>
                სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან
              </p>
            )}
          </div>

          <div className='mb-4 h-32'>
            <div className='flex flex-col gap-4'>
              <label className='font-bold text-tiny '>გვარი*</label>
              <input
                {...register('lastName', {
                  required: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
                  minLength: {
                    value: 2,
                    message:
                      'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                  },
                })}
                type='text'
                className={`border-2 h-12 px-5 border-black border-x border-y bg-transparent w-128 ${
                  errors.lastName && 'bg-red-200'
                }`}
                placeholder='ჯუღაშვილი'
              />
            </div>
            {errors.lastName && (
              <p className='text-red-500 pl-5 text-base'>
                გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან
              </p>
            )}
          </div>

          <div className=' gap-4 mb-16 h-32'>
            <div className='flex flex-col gap-4'>
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
            </div>
            {errors.email && (
              <p className='text-red-500 pl-5 text-base'>
                გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)
              </p>
            )}
          </div>

          <div className='border-t-[1px] w-fit pt-4'>
            <p className='text-slate-500'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
          <button>
            <img
              src={RightArrow}
              alt='arrow icon'
              className='w-4 absolute bottom-4 right-1/2 top-full hover:cursor-pointer z-10'
            />
          </button>
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
