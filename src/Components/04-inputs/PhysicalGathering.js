function PhysicalGathering(props) {
  return (
    <div>
      <span className='flex items-center gap-5 text-xl font-medium text-charcoal mb-5'>
        რას ფიქრობ ფიზიკურ შეკრებებზე?
      </span>
      <textarea
        {...props.register('physicalGathering')}
        className='w-full h-48 bg-transparent border-[0.8px] resize-none text-2xl p-2 border-charcoal'
      />
    </div>
  );
}

export default PhysicalGathering;
