import styles from "./Button.module.css";

const Button = ({
  children,
  disabled = false,
  variant = "primary",
  onClick,
  style,
}) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      type="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
