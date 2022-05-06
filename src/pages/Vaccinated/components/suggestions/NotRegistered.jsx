function NotRegistered() {
  return (
    <div className='pl-12' dataTestId='notRegistered'>
      <p className='text-xl font-normal text-charcoal'>
        რომ არ გადადო,
        <br /> ბარემ ახლავე დარეგისტრირდი <br />
        <a
          href='https://booking.moh.gov.ge/'
          className='text-sky-600 font-medium'
        >
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
  );
}

export default NotRegistered;
