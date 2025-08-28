export default function FilterSelect({
  id = "",
  name = "",
  className = "",
  ...props
}) {
  return (
    <>
      <select
        id={id}
        name={name}
        className={`h-[2.5rem] flex items-center bg-stone-100 rounded-lg transition ease-out duration-100 px-2 ${className}`}
        {...props}
      ></select>
    </>
  );
}
