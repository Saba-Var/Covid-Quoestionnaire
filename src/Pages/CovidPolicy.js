import PhysicalGathering from 'Components/04-inputs/PhysicalGathering';
import NavigationArrors from 'Components/NavigationArrors';
import Frequency from 'Components/04-inputs/Frequency';
import Opinions from 'Components/04-inputs/Opinions';
import WorkDays from 'Components/04-inputs/WorkDays';
import FormContext from 'context/form-context';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image04 from 'Components/Image04';
import Header from 'Layouts/Header';
import Card from 'UI/Card';

function CovidPolicy() {
  const ctx = useContext(FormContext).state.covidPolicy;
  const dispatch = useContext(FormContext).dispatch;

  useEffect(() => {
    setValue('physicalGathering', ctx.physicalGathering);
    setValue('frequency', ctx.frequency);
    setValue('opinions', ctx.opinions);
    setValue('workDays', ctx.workDays);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      frequency: '',
      workDays: '',
      physicalGathering: '',
      opinions: '',
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      dispatch({ type: 'covidPolicy', newState: data });
    });
    return () => subscription.unsubscribe();
  }, [ctx, dispatch, watch]);

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <div className='bg-gray'>
      <div className='bg-gray h-492'>
        <Card>
          <Header page='4' />
          <p className='text-standard leading-7 w-176 mb-11'>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
            <br /> <br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ
            პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <form
            className='flex flex-col gap-14 w-162'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Frequency register={register} errors={errors} />
            <WorkDays register={register} errors={errors} />
            <PhysicalGathering register={register} />
            <Opinions register={register} />
            <button className='ml-auto rounded-[42px] text-white px-7 py-4 w-44 bg-cyan-600 font-bold text-lg z-20 hover:bg-cyan-800'>
              დასრულება
            </button>
          </form>
        </Card>
        <Image04 />
      </div>
      <div className='h-8 mt-8 pt-8 pb-6'>
        <NavigationArrors back='/Vaccinated' top={'pt-248'} />
      </div>
      <div className='h-2'></div>
    </div>
  );
}

export default CovidPolicy;
