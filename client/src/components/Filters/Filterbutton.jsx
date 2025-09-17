export default function FilterButton({
  icon: Icon,
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 py-2 border border-border-gray-400 rounded-lg flex items-center ${className}`}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}
