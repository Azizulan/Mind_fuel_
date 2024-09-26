import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[19.6px] box-border gap-[19.7px] max-w-full text-left text-xs text-linen-100 font-inter ${className}`}
    >
      <div className="self-stretch bg-crimson overflow-hidden flex flex-row items-start justify-start py-[10.6px] px-4 gap-[31.8px] mq800:gap-4">
        <div className="w-40 relative leading-[16.8px] uppercase font-semibold flex items-center shrink-0">
          Free Shipping Over $75
        </div>
        <a className="[text-decoration:none] relative leading-[16.8px] uppercase font-semibold text-[inherit] inline-block min-w-[112.8px]">{`Buy 3 & Save $10`}</a>
        <div className="w-40 relative leading-[16.8px] uppercase font-semibold flex items-center shrink-0">
          Free Shipping Over $75
        </div>
        <a className="[text-decoration:none] relative leading-[16.8px] uppercase font-semibold text-[inherit] inline-block min-w-[112.8px]">{`Buy 3 & Save $10`}</a>
        <div className="w-40 relative leading-[16.8px] uppercase font-semibold flex items-center shrink-0">
          Free Shipping Over $75
        </div>
        <a className="[text-decoration:none] relative leading-[16.8px] uppercase font-semibold text-[inherit] inline-block min-w-[112.8px]">{`Buy 3 & Save $10`}</a>
        <div className="w-40 relative leading-[16.8px] uppercase font-semibold flex items-center shrink-0">
          Free Shipping Over $75
        </div>
        <a className="[text-decoration:none] relative leading-[16.8px] uppercase font-semibold text-[inherit] inline-block min-w-[112.8px]">{`Buy 3 & Save $10`}</a>
        <div className="w-40 relative leading-[16.8px] uppercase font-semibold flex items-center shrink-0">
          Free Shipping Over $75
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pl-10 pr-8 box-border max-w-full text-base text-gray-100">
        <div className="self-stretch flex-1 flex flex-row items-end justify-start max-w-full">
          <div className="flex flex-col items-start justify-end pt-0 pb-[7.8px] pl-0 pr-1.5">
            <a className="[text-decoration:none] relative leading-[22.4px] uppercase font-semibold text-[inherit] inline-block min-w-[48.7px]">
              Shop
            </a>
          </div>
          <div className="w-[58px] flex flex-col items-start justify-end pt-0 px-0 pb-[19.1px] box-border">
            <img className="w-[11px] h-2 relative" alt="" src="/svg.svg" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.8px] box-border max-w-full">
            <div className="w-[339.3px] flex flex-row items-start justify-start gap-[39.8px] max-w-full mq450:gap-5">
              <div className="relative leading-[22.4px] uppercase font-semibold">
                Build A Bundle
              </div>
              <a className="[text-decoration:none] flex-1 relative leading-[22.4px] uppercase font-semibold text-[inherit]">{`Subscribe & Save`}</a>
            </div>
          </div>
          <div className="self-stretch w-[323.8px] flex flex-col items-start justify-start max-w-full">
            <img
              className="w-[120px] flex-1 relative max-h-full"
              loading="lazy"
              alt=""
              src="/link.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 pb-[7.8px] pl-0 pr-[39px] text-right">
            <a className="[text-decoration:none] self-stretch relative leading-[22.4px] uppercase font-semibold text-[inherit] inline-block min-w-[73.2px]">
              Science
            </a>
          </div>
          <div className="w-[190.2px] flex flex-col items-start justify-end pt-0 pb-[7.8px] pl-0 pr-[27px] box-border text-right">
            <a className="[text-decoration:none] self-stretch relative leading-[22.4px] uppercase font-semibold text-[inherit]">
              Find Your Flavor
            </a>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
            <img
              className="w-11 h-11 relative"
              alt=""
              src="/detailsmodal--details--slot--button-dialog--search.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
            <img
              className="w-11 h-11 relative z-[1]"
              alt=""
              src="/link-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
            <img
              className="w-11 h-11 relative z-[2]"
              alt=""
              src="/button-dialog.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
