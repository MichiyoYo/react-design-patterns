export const partiallyApplied = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = partiallyApplied(Button, { color: "red" });
export const BigSuccessButton = partiallyApplied(Button, {
  color: "green",
  size: "large",
});
