type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren & {
    className?: string;
  };

export const Button: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        className
          ? className
          : `rounded-md border p-1 shadow-md transition-all hover:bg-green-200 hover:shadow-lg active:bg-green-300`
      }
    >
      {children}
    </button>
  );
};
