import { FunctionComponent } from "react";

export type BackgroundType = {
  className?: string;
};

const Background: FunctionComponent<BackgroundType> = ({ className = "" }) => {
  return (
    <section
      className={`bg-linen-100 overflow-hidden flex flex-row items-end justify-start pt-[50px] pb-0 pl-[62px] pr-0 box-border gap-[71.8px] max-w-full z-[1] text-left text-5xl text-gray-100 font-inter mq450:gap-[18px] mq800:gap-9 mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:pb-5 mq1350:box-border ${className}`}
    >
      <div className="w-[263.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px] box-border">
        <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[19px]">
          10 Million Sticks Sold
        </h3>
      </div>
      <div className="w-[276px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px] box-border">
        <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[19px]">
          Only 1 Gram of Sugar
        </h3>
      </div>
      <div className="w-[695.1px] flex flex-row items-end justify-start gap-5 max-w-full mq1125:flex-wrap">
        <div className="w-[208.5px] flex flex-col items-start justify-end pt-0 pb-[2.2px] pl-0 pr-5 box-border shrink-0">
          <h3 className="m-0 w-[157.6px] relative text-inherit leading-[24px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[19px]">
            Gluten-Free
          </h3>
        </div>
        <div className="w-[336.5px] flex flex-row items-end justify-start gap-[19.9px] shrink-0 max-w-full">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[19px]">
              Non-GMO
            </h3>
          </div>
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg.svg"
          />
          <div className="w-[86.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px] box-border">
            <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[19px]">
              Vegan
            </h3>
          </div>
          <img
            className="h-[31px] w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/flower-icon-singlesvg-1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px]">
          <h3 className="m-0 w-[264.3px] relative text-inherit leading-[24px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-lgi mq450:leading-[19px]">
            10 Million Sticks Sold
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Background;
