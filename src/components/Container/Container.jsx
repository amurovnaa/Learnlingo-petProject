const Container = ({ children, className = "" }) => {
  return (
    <div className={`xl:max-w-[1440px] xl:w-full mx-auto my-0${className}`}>
      {children}
    </div>
  );
};

export default Container;
