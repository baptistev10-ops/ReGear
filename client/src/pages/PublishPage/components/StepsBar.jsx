export default function StepsBar() {
  const steps = [
    { number: 1, label: "Catégorie" },
    { number: 2, label: "Photos" },
    { number: 3, label: "Description" },
    { number: 4, label: "Prix & État" },
    { number: 5, label: "Finalisation" },
  ];
  return (
    <div className="w-full mb-5 flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-black text-white w-9 h-9">
            <p className="text-xs">{step.number}</p>
          </div>
          <p className="text-xs">{step.label}</p>
          {index < steps.length - 1 && (
            <hr className="lg:w-14 bg-gray-500 h-[3px]" />
          )}
        </div>
      ))}
    </div>
  );
}
