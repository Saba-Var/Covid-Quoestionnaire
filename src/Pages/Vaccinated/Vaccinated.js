import HadVaccinated from '../../Components/03-inputs/HadVaccinated';
import NavigationArrors from '../../Components/NavigationArrors';
import WhichStage from '../../Components/03-inputs/WhichStage';
import Waiting from '../../Components/03-inputs/Waiting';
import DoctorImg from '../../Assets/images/doctor.png';
import { useForm } from 'react-hook-form';
import Header from '../../Layouts/Header';
import Card from '../../UI/Card';

function Vaccinated() {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      hadVaccinated: '',
      stage: '',
      waiting: '',
    },
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  const formState = watch();
  return (
    <Card>
      <Header page='3' />
      <form
        className='flex flex-col gap-14 w-168'
        onSubmit={handleSubmit(onSubmit)}
      >
        <HadVaccinated
          register={register}
          unregister={unregister}
          errors={errors}
        />
        {formState.hadVaccinated === 'კი' && (
          <WhichStage
            register={register}
            formState={formState}
            errors={errors}
          />
        )}
        {formState.hadVaccinated === 'არა' && (
          <Waiting register={register} formState={formState} errors={errors} />
        )}
        <NavigationArrors
          back='/Covid'
          next='/Covid-Policy'
          isValid={isValid}
        />
      </form>
      <div className='absolute right-40 top-28 '>
        <img src={DoctorImg} alt='doctor' className='pt-8' />
      </div>
    </Card>
  );
}

export default Vaccinated;
