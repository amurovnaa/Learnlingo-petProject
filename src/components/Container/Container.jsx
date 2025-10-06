const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full 
        px-6 md:px-12
        max-w-[1440px] mx-auto 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
