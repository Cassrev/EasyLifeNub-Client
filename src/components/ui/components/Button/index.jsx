import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  fill: {
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    white_A700: "bg-white-A700 text-black-900_01",
    gray_100: "bg-gray-100 text-red-700",
    deep_orange_50: "bg-deep_orange-50 text-deep_orange-400",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
  },
  outline: {
    blue_A700_01: "border border-blue-A700_01 border-solid text-blue-A700_01",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "pr-2.5 py-2.5",
  lg: "pl-[11px] py-[11px]",
  xl: "p-[15px]",
  "2xl": "pr-[17px] py-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xl",
  variant = "fill",
  color = "blue_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_100",
    "red_200",
    "green_A100",
    "white_A700",
    "gray_100",
    "deep_orange_50",
    "blue_A700_01",
  ]),
};

export { Button };
