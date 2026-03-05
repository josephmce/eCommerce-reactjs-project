/*
Dumb Component (Presentational)
Handles:
- rendering UI
- displaying props
- firing events upward
*/
export default function FormInput({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="border p-2 w-full rounded"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}