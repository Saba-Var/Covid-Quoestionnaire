function Opinions(props) {
  return (
    <div>
      <span className='flex items-center gap-5 text-xl font-medium text-charcoal mb-5'>
        რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </span>
      <textarea
        {...props.register('opinions')}
        onChange={(e) => props.setValue('opinions', e.target.value)}
        name='Opinions'
        className='w-full h-48 bg-transparent border-[0.8px] resize-none text-2xl p-2 border-charcoal'
      />
    </div>
  );
}

export default Opinions;
