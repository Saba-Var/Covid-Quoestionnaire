import NavigationArrors from 'Components/NavigationArrors';
import FirstName from 'Components/IdentificationInputs/FirstName';
import LastName from 'Components/IdentificationInputs/LastName';
import Email from 'Components/IdentificationInputs/Email';
import FormContext from 'context/form-context';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image01 from 'Components/Image01';
import Header from 'Layouts/Header';
import Card from 'UI/Card';

function Identification() {
  const ctx = useContext(FormContext).state.identification;
  const dispatch = useContext(FormContext).dispatch;
  useEffect(() => {
    setValue('firstName', ctx.firstName);
    setValue('lastName', ctx.lastName);
    setValue('email', ctx.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <NavigationArrors isValid={isValid} top={'pt-4'} next='/Covid' />
        </form>
        <Image01 />
      </div>
    </Card>
  );
}

export default Identification;
