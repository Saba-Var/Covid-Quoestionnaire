import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

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
      <h2 className='text-6xl font-bold text-white tracking-[0.24rem]'>
        მადლობა
      </h2>
    </div>
  );
};
export default Thanks;
