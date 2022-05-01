import { useContext, useEffect } from 'react';
import FormContext from 'state/form-context';
import { Card, Header } from 'components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Arrow } from 'components/svgs';
import {
  CovidPolicyImg,
  Frequency,
  Opinions,
  PhysicalGathering,
  WorkDays,
} from 'pages/CovidPolicy/components';

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
      non_formal_meetings: '',
      number_of_days_from_office: '',
      what_about_meetings_in_live: '',
      tell_us_your_opinion_about_us: '',
    },
  });

  useEffect(() => {
    setValue('what_about_meetings_in_live', ctx.what_about_meetings_in_live);
    setValue('non_formal_meetings', ctx.non_formal_meetings);
    setValue(
      'tell_us_your_opinion_about_us',
      ctx.tell_us_your_opinion_about_us
    );
    setValue('number_of_days_from_office', ctx.number_of_days_from_office);
  }, [
    ctx.non_formal_meetings,
    ctx.tell_us_your_opinion_about_us,
    ctx.what_about_meetings_in_live,
    ctx.number_of_days_from_office,
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
    <div className='pt-5'>
      <div>
        <Card styles={'h-full  pb-26'}>
          <div className='bg-gray h-24 w-full fixed top-0 left-0 z-[9999] px-28 2xl:px-50  2xl:pt-12'>
            <Header page='4' styles={' bg-gray  '} />
          </div>

          <div className='flex justify-between '>
            <div>
              <p className='text-standard leading-7 w-176 mb-11 pt-16'>
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი — ჩვენთან გადმოსვლის.
                <br /> <br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ
                პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
              </p>
              <form
                className='flex flex-col gap-14 w-162 relative z-50'
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
            </div>
            <CovidPolicyImg />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CovidPolicy;
