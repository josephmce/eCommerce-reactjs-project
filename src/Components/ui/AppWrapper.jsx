// AppWrapper.jsx
const AppWrapper = ({ children }) => {
  return (
<div
  className="text-white m-6 rounded-3xl"
  style={{
    background: `
      linear-gradient(229deg, rgba(0,0,0,0) 49.5%, rgba(52,65,72,1) 50%, rgba(41,43,45,1) 100%),
      linear-gradient(135deg, #344148 0%, #292B2D 100%)
    `,
    minHeight: `calc(100vh - 3.5rem)`,
  }}
>
  {children}
</div>
  );
};

export default AppWrapper;