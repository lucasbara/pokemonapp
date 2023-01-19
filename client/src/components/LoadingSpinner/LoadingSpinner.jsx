import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ borderWidth = 8, color = "grey", size = 80 }) => {
  return (
    <div
      className={styles.LoadingSpinner}
      style={{ height: size, width: size }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <style jsx>
        {`
          .${styles.LoadingSpinner} div {
            margin: ${borderWidth}px;
            width: ${size - borderWidth * 2}px;
            height: ${size - borderWidth * 2}px;
            border-color: ${color} transparent transparent transparent;
            border-width: ${borderWidth}px;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
