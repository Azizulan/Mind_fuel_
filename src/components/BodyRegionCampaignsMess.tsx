import { FunctionComponent } from "react";

export type BodyRegionCampaignsMessType = {
  className?: string;
};

const BodyRegionCampaignsMess: FunctionComponent<
  BodyRegionCampaignsMessType
> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[239.4px] left-[1025px] shadow-[4px_4px_16px_rgba(22,_22,_22,_0.1)] rounded-2xl bg-white w-[385px] flex flex-col items-start justify-start p-5 box-border gap-2 z-[2] text-left text-xs text-darkgray font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-2">
        <div className="rounded-2xl bg-whitesmoke flex flex-row items-start justify-start pt-2 px-2 pb-[9px]">
          <div className="relative leading-[20px] uppercase font-semibold">
            TS
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-5 box-border min-w-[177px] text-sm text-gray-200">
          <div className="relative tracking-[-0.14px] leading-[20px] font-medium">
            Taste Salud
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-5 h-6 relative"
            alt=""
            src="/button--dismiss-campaign--img.svg"
          />
        </div>
      </div>
      <div className="relative text-sm leading-[20px] text-darkslategray">
        Hi there, let me know if you have any questions :)
      </div>
      <input
        className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-11 rounded flex flex-row items-start justify-start pt-[13px] px-3 pb-[11px] box-border font-montserrat text-sm text-dimgray-300 min-w-[207px]"
        placeholder="Click to reply"
        type="text"
      />
    </div>
  );
};

export default BodyRegionCampaignsMess;
