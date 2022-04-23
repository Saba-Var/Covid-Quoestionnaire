import ErrorMessage from '../ErrosMessage';
function Antibodies(props) {
  const updateValue = (value) => {
    props.setValue('antibodies', value, { shouldValidate: true });
    if (value === 'YES') props.unregister('date');
    else {
      props.unregister('count');
      props.unregister('antibody count');
    }
  };
  const errorMessage = 'ამ ველის შევსება სავალდებულოა';
  return (
    <div>
      <p className='font-bold text-tiny mb-4'>
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-5'>
          <label className='flex items-center gap-5  text-xl font-medium text-charcoal'>
            <input
              {...props.register('antibodies', { required: true })}
              onClick={() => updateValue('YES')}
              type='radio'
              name='anti'
              value='YES'
              className='w-6 h-6 bg-red-400 text-red-400'
            />
            <span>კი</span>
          </label>
          <label className='flex items-center gap-5 text-xl font-medium text-charcoal'>
            <input
              {...props.register('antibodies', { required: true })}
              onClick={() => updateValue('NO')}
              type='radio'
              name='anti'
              value='NO'
              className='w-6 h-6'
            />
            <span>არა</span>
          </label>
          {props.errors.antibodies && <ErrorMessage text={errorMessage} />}
        </div>
      </div>
    </div>
  );
}

export default Antibodies;
