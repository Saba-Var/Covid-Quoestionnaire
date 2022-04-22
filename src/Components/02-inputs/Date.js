function Date() {
  return (
    <div>
      <p className='font-bold text-tiny mb-4'>
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </p>
      <input
        type='date'
        placeholder='დდ/თთ/წწ'
        max='2022-05-01'
        min='2019-11-01'
        className='pl-4 bg-transparent border-[1px] border-charcoal h-12 w-128 px-5'
      />
    </div>
  );
}

export default Date;
