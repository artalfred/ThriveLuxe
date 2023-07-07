export default function MainButton({ btnType, border, children, onClick }) {
  return (
    <button
      className={`fw-semibold mt-4 ${btnType} ${border}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
