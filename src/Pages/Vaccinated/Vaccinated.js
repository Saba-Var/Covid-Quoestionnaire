import HadVaccinated from '../../Components/03-inputs/HadVaccinated';
import NavigationArrors from '../../Components/NavigationArrors';
import WhichStage from '../../Components/03-inputs/WhichStage';
import Waiting from '../../Components/03-inputs/Waiting';
import DoctorImg from '../../Assets/images/doctor.png';
import FormContext from '../../context/form-context';
import { useForm } from 'react-hook-form';
import Header from '../../Layouts/Header';
import { useContext } from 'react';
import { useEffect } from 'react';
import Card from '../../UI/Card';

function Vaccinated() {
  const ctx = useContext(FormContext);
  useEffect(() => {
    setValue('HadVaccinated', ctx.state.vaccinated.HadVaccinated);
    setValue('stage', ctx.state.vaccinated.stage);
    setValue('waiting', ctx.state.vaccinated.waiting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      HadVaccinated: '',
      stage: '',
      waiting: '',
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      ctx.dispatch({ type: 'vaccinated', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [ctx, watch]);

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
        {formState.HadVaccinated === 'კი' && (
          <WhichStage
            register={register}
            formState={formState}
            errors={errors}
          />
        )}
        {formState.HadVaccinated === 'არა' && (
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
