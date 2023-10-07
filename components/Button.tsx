interface ButtonProps {
  text: string;
  styles?: string;
}

const Button = ({ text, styles }: ButtonProps) => {
  return (
    <a
      href="/"
      className={`rounded-[30px] bg-gradient-to-r from-primary to-secondary px-11 py-4 text-white hover:opacity-70 ${styles}`}
    >
      {text}
    </a>
  );
};

export default Button;
