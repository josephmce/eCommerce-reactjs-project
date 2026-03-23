export default function Button({
children,
variant ="primary",
size = "sm",
className ="",
...props }){
    const baseStyles ="px-4 py-2 font-semibold transition";

    const variants = {
    primary: "bg-[#EFEFEF] text-[#465257] hover:cursor-pointer rounded-full hover:bg-white",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 hover:cursor-pointer rounded-full",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100 hover:cursor-pointer rounded-full",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed rounded-full",
    nav_primary: "bg-[#EFEFEF] text-gray-600 hover:bg-gray-100 hover:cursor-pointer rounded-full",
    nav_secondary: "bg-transparent text-gray-600 hover:bg-gray-100 hover:cursor-pointer",
    nav_unselected: "bg-transparent text-[#EFEFEF] hover:bg-[#586971] hover:cursor-pointer rounded-full"
  };
    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };
    return (
    <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
    >
    {children}
    </button>
    );
}



