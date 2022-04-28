import { useContext, useEffect } from 'react';
import FormContext from 'state/form-context';
import { useForm } from 'react-hook-form';
import { Header, Card, NavigationArrows } from 'components';
import { Email, FirstName, LastName, IdentificationImg } from './components';

function Identification() {
  const ctx = useContext(FormContext).state.identification;
  const dispatch = useContext(FormContext).dispatch;

  useEffect(() => {
    setValue('firstName', ctx.firstName);
    setValue('lastName', ctx.lastName);
    setValue('email', ctx.email);
  }, [ctx.email, ctx.firstName, ctx.lastName]);

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch({ type: 'identification', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  const minLength = (value, target) =>
    value.trim().length >= 2 ||
    `${target} ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`;

  const onlyLetters = (value, target) =>
    !/\d/.test(value) || `${target} ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;

  const hookForm = {
    errors,
    register,
    minLength,
    onlyLetters,
  };

  return (
    <Card>
      <Header page='1' />
      <div className='flex justify-between'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FirstName hookForm={hookForm} />
          <LastName hookForm={hookForm} />
          <Email errors={errors} register={register} />
          <div className='border-t-[1px] w-fit pt-4 mt-12'>
            <p className='text-slate-500'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
          <NavigationArrows
            isValid={isValid}
            top={'top-[88%]'}
            left={'left-[48%]'}
            next='/Covid'
          />
        </form>
        <IdentificationImg />
      </div>
    </Card>
  );
}

export default Identification;
