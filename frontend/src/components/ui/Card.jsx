export function Card({ children, className }) {
  return (
    <div className={`p-10 rounded-lg ${className}`}>{children}</div>
  );
}

export default Card;
