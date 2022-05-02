import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { star } from 'assets/images';
const Thanks = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  useEffect(() => {
    let time = setTimeout(() => {
      setRedirectNow(true);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  if (redirectNow) {
    return <Navigate to='/' />;
  }
  return (
    <div className='bg-charcoal  h-screen w-full flex justify-center items-center'>
      <div className='relative z-20'>
        <img
          src={star}
          alt='star'
          className='absolute -z-10 top-[-110%] left-[4%]  animate-reveal-star'
        />
        <h2 className='text-6xl font-bold text-white tracking-[0.4rem] animate-reveal bg-charcoal  z-50'>
          მადლობა
        </h2>
        <img
          src={star}
          alt='star'
          className='w-8 h-8 absolute -z-10 top-[120%] right-[8%] animate-reveal-star-right'
        />
      </div>
    </div>
  );
};
export default Thanks;
