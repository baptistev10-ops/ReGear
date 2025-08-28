export default function Input({
  type = "",
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`flex bg-stone-100 rounded-lg transition ease-out duration-100 h-[2.5rem] ${className}`}
      {...props}
    />
  );
}
