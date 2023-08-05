type InputTypes = {
  type: string;
  placeholder: string;
};
const Input = ({ type, placeholder, ...props }: InputTypes) => {
  return (
    <div className="w-full h-9 bg-neutral-100 text-xs  relative flex items-center rounded-sm border border-slate-200 mb-5 ">
      <span className="w-full h-full absolute left-2 text-neutral-500 flex items-center">{placeholder}</span>
      <input type={type} {...props} className="w-full h-full z-10 bg-transparent pt-[7px] pb-[8px] pl-[8px] border-0 outline-0"  />
    </div>
  );
};
export default Input;
