const Button = ({ children, onclick, styles, ...props }) => {
   return (
      <button
         onClick={onclick}
         style={{
            padding: "1rem 2rem",
            color: "white",
            border: "none",
            margin: "1rem 0.5rem 0rem",
            borderRadius: "5px",
            boxShadow: " 1px 2px 3px -1px rgb(124 124 124 / 87%)",
            cursor : "pointer",
            ...styles,
         }}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
