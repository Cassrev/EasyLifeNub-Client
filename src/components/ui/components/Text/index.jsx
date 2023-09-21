import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyBold16: "font-bold font-gilroy",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyRegular14Black900: "font-gilroy font-normal",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray90003: "font-gilroy font-semibold",
  txtGilroyMedium18BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray600: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray70001: "font-gilroy font-semibold",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold16BlueA70001: "font-gilroy font-semibold",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
  txtGilroyMedium12Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium16Gray90002: "font-gilroy font-medium",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular12Bluegray40001: "font-gilroy font-normal",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroyMedium16BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium14BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold18Gray90001: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
