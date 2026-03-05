export default function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 m-4">
      {children}
    </div>
  );
}