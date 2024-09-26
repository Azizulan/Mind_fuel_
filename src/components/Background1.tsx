import { FunctionComponent } from "react";

export type Background1Type = {
  className?: string;
};

const Background1: FunctionComponent<Background1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-linen-100 overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-0 box-border gap-[17.2px] max-w-full z-[2] text-left text-5xl text-gray-100 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-2.5 pr-0 box-border gap-[19.8px] max-w-full mq1350:flex-wrap">
        <div className="w-[868.9px] flex flex-row items-end justify-start gap-[19.9px] shrink-0 max-w-full mq800:flex-wrap">
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg-2.svg"
          />
          <h3 className="m-0 w-[146.2px] relative text-inherit leading-[26.4px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[21px]">
            10 Calories
          </h3>
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg-3.svg"
          />
          <h3 className="m-0 w-[180.5px] relative text-inherit leading-[26.4px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[21px]">
            2-In-1 Benefits
          </h3>
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg-4.svg"
          />
          <h3 className="m-0 flex-1 relative text-inherit leading-[26.4px] font-normal font-[inherit] inline-block min-w-[227px] max-w-full mq450:text-lgi mq450:leading-[21px]">
            No Artificial Colors or Dyes
          </h3>
        </div>
        <div className="w-[283.5px] flex flex-row items-end justify-start py-0 pl-0 pr-[51px] box-border gap-5 shrink-0 mq450:pr-5 mq450:box-border">
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg-5.svg"
          />
          <h3 className="m-0 flex-1 relative text-inherit leading-[26.4px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[21px]">
            2-In-1 Benefits
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[51px]">
          <h3 className="m-0 w-[146.2px] relative text-inherit leading-[26.4px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[21px]">
            10 Calories
          </h3>
        </div>
        <h3 className="m-0 w-[180.5px] relative text-inherit leading-[26.4px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[21px]">
          2-In-1 Benefits
        </h3>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/lineminpng@2x.png"
      />
    </section>
  );
};

export default Background1;
