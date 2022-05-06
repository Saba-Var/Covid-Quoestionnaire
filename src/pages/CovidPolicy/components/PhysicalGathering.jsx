function PhysicalGathering(props) {
  return (
    <div>
      <span className='flex items-center gap-5 text-xl font-medium text-charcoal mb-5'>
        რას ფიქრობ ფიზიკურ შეკრებებზე?
      </span>
      <textarea
        dataTestId={'physicalGathering'}
        {...props.register('what_about_meetings_in_live')}
        className='w-full h-48 bg-transparent border-[0.8px] resize-none text-2xl p-2 border-charcoal'
      />
    </div>
  );
}

export default PhysicalGathering;
