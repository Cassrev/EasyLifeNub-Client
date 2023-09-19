import React from "react";

import { Button, Img, Input, Text } from "components";

const EmailSigninPage = () => {
  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto p-[314px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group.svg"
            alt="Group"
          />
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="email"
                placeholder="jane@gmail.com"
                className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Password
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Password"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="password"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[381px] mt-[15px] text-blue-A700_01 text-lg"
            >
              <Text size="txtGilroyMedium18BlueA70001">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
              shape="round"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSigninPage;
