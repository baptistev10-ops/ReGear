export default function Input({
  icon: Icon,
  type = "text",
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex items-center bg-stone-100 rounded-lg transition ease-out duration-100 h-[2.5rem] px-2 ${className}`}
    >
      {Icon && <Icon className="text-gray-500 mr-2" />}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none"
        {...props}
      />
    </div>
  );
}
