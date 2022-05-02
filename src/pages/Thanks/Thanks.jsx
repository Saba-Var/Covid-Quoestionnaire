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
    <div className='bg-charcoal h-screen w-full flex justify-center items-center'>
      <div className='relative'>
        <img src={star} alt='star' className='absolute top-[-110%] left-[4%]' />
        <h2 className='text-6xl font-bold text-white tracking-[0.4rem]'>
          მადლობა
        </h2>
        <img
          src={star}
          alt='star'
          className='w-8 h-8 absolute top-[120%] right-[8%]'
        />
      </div>
    </div>
  );
};
export default Thanks;
