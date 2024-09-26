import { FunctionComponent } from "react";

export type HorizontalBorderType = {
  className?: string;
};

const HorizontalBorder: FunctionComponent<HorizontalBorderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[347.5px] left-[0px] border-linen-300 border-t-[1px] border-solid box-border w-full flex flex-row items-end justify-between pt-[45px] pb-[9.9px] pl-2.5 pr-5 max-w-full gap-5 text-left text-xs text-linen-100 font-inter mq800:flex-wrap ${className}`}
    >
      <div className="h-[106.9px] w-[202px] relative">
        <img
          className="absolute top-[0px] left-[30px] w-[172px] h-[70.8px] overflow-hidden"
          alt=""
          src="/group-4svg.svg"
        />
        <div className="absolute top-[61.9px] left-[0px] w-[45px] h-[45px]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full"
            alt=""
            src="/container-6.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
            alt=""
            src="/container-7.svg"
          />
        </div>
      </div>
      <div className="w-[412px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="w-[231.2px] flex flex-col items-start justify-start gap-[8.1px]">
            <div className="w-[196.3px] relative leading-[19.2px] flex items-center">
              © Copyright Taste Salud 2024
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15.8px]">
              <a className="[text-decoration:underline] flex-1 relative leading-[19.2px] text-[inherit]">{`Terms & Conditions`}</a>
              <a className="[text-decoration:underline] relative leading-[19.2px] text-[inherit] inline-block min-w-[90px]">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="h-[83.6px] flex flex-col items-start justify-start pt-[9.6px] px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/locator-map.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBorder;
