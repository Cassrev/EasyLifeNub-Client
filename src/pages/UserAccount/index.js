
import { Sidebar } from "react-pro-sidebar";
import { Img, Line, List, Text } from "components/ui/uiexport";
import { useRef, useState } from "react";

export const UserAccountPage = () => {
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState(0);

  return (
    <>
      <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[31px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_03 flex flex-col gap-8 h-[1080px] md:h-auto items-center justify-start p-6 sm:px-5 w-[300px]">
            <Img
              className="h-[35px] w-[65%]"
              src="images/img_group_10.svg"
              alt="Group"
            />
          </div>

          <div className="flex flex-col gap-8 h-[951px] md:h-auto items-start justify-between w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start py-4 rounded-lg w-[252px]">
                <Line className="bg-blue-A700_01 h-6 w-0.5" />
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="text-base text-blue-A700_01 w-auto"
                    size="txtGilroySemiBold16BlueA70001"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_dollaraltsoli.svg"
                alt="dollaraltSoli"
              />
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtGilroySemiBold16"
              >
                Games
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_walletoutline.svg"
                alt="walletOutline"
              />
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtGilroySemiBold16"
              >
                Tickets
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_car.svg"
                alt="car"
              />
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtGilroySemiBold16"
              >
                Transactions
              </Text>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  )
}