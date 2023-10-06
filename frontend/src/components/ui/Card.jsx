export function Card({ children, className }) {
  return (
    <div className={`bg-[#262626] p-10 rounded-lg ${className}`}>{children}</div>
  );
}

export default Card;
