import { useContext, useEffect } from 'react';
import FormContext from 'state/form-context';
import { Header, Card } from 'components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Arrow } from 'components/svgs';
import {
  CovidPolicyImg,
  Frequency,
  Opinions,
  PhysicalGathering,
  WorkDays,
} from './components';

function CovidPolicy() {
  const ctx = useContext(FormContext).state.covidPolicy;
  const dispatch = useContext(FormContext).dispatch;

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
    setValue('physicalGathering', ctx.physicalGathering);
    setValue('frequency', ctx.frequency);
    setValue('opinions', ctx.opinions);
    setValue('workDays', ctx.workDays);
  }, [
    ctx.frequency,
    ctx.opinions,
    ctx.physicalGathering,
    ctx.workDays,
    setValue,
  ]);

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
    <div className='h-[2050px]'>
      <div className='h-[1940px]'>
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
            className='flex flex-col gap-14 w-162 relative'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Frequency register={register} errors={errors} />
            <WorkDays register={register} errors={errors} />
            <PhysicalGathering register={register} />
            <Opinions register={register} />
            <button className='ml-auto rounded-[42px] text-white px-7 py-4 w-44 bg-cyan-600 font-bold text-lg z-20 hover:bg-cyan-800'>
              დასრულება
            </button>
            <div className='flex justify-center absolute top-[103%] right-[-5%] pb-10'>
              <Link to='/Vaccinated'>
                <Arrow styles='rotate-180 w-4 hover:cursor-pointer' />
              </Link>
            </div>
          </form>
        </Card>
        <CovidPolicyImg />
      </div>
    </div>
  );
}

export default CovidPolicy;
