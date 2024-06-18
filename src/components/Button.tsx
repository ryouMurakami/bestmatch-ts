type ButtonProps = {
  text: string | number;
  buttonColor: string;
  handler?: () => void;
  padding: Array<number>;
  textColor?: "yellow" | "silver";
  borderRadius?: number;
};

const Button = ({
  text,
  buttonColor,
  handler,
  padding,
  textColor,
  borderRadius,
}: ButtonProps) => {
  return (
    <button
      onClick={handler}
      style={{
        background: buttonColor,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        color: textColor,
        borderRadius: borderRadius,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
