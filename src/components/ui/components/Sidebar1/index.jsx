import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[507px] items-center justify-end p-[5px] w-full">
          <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
            <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                <Img
                  className="h-6 ml-[7px] w-6"
                  src="images/img_save.svg"
                  alt="save"
                />
                <Text
                  className="text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Dashboard
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_user_24X24.svg"
                  alt="user"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Users
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Categories
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
              <Line className="bg-blue-A700_01 h-6 w-0.5" />
              <div className="flex flex-row gap-2 items-center justify-start w-[49%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-base text-blue-A700_01"
                  size="txtGilroySemiBold16BlueA70001"
                >
                  QA Tracker
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_notification.svg"
                  alt="notification One"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Notifications
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700"
                  size="txtGilroySemiBold16"
                >
                  Settings
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2 w-[87%] md:w-full">
            <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_question.svg"
                alt="question"
              />
              <Text
                className="mt-[5px] text-base text-blue_gray-700"
                size="txtOpenSansRomanSemiBold16"
              >
                Help
              </Text>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
