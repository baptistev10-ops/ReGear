export default function BlackButton({ className = "", children, ...props }) {
  return (
    <>
      <button
        className={`bg-gray-950 text-white py-2 px-4 rounded-lg ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
