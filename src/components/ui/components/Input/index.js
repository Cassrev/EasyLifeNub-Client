import PropTypes from "prop-types";
import { forwardRef } from "react";

const variants = { fill: { white_A700: "bg-white-A700 text-blue_gray-300" } };
const shapes = { round: "rounded-md" };
const sizes = {
  xs: "pb-3.5 pr-[13px] pt-[13px]",
  md: "pb-[13px] pl-[11px] pr-[13px] pt-[18px]",
};

const Input = forwardRef(
  ({
    wrapClassName = "",
    className = "",
    name = "",
    placeholder = "",
    type = "text",
    children,
    errors = [],
    label = "",
    prefix,
    suffix,
    onChange,
    shape = "round",
    size = "md",
    variant = "fill",
    color = "white_A700",
    ...restProps
  }, ref) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    const sizeClass = sizes[size] || "";
    const shapeClass = shapes[shape] || "";
    const variantClass = variants[variant]?.[color] || "";

    return (
      <div className={`${wrapClassName} ${shapeClass} ${variantClass} ${sizeClass}`}>
        {label && label}
        {prefix && prefix}
        <input
          ref={ref}
          className={`${className} bg-transparent border-0`}
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {suffix && suffix}
      </div>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
