export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className='relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
        <div className='rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
        <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
      </div>
      <span className="relative z-10">{props.children}</span>
    </button>
  );
}
