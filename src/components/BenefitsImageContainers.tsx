import { FunctionComponent } from "react";

export type BenefitsImageContainersType = {
  className?: string;
  dfdbeeddfecdcsv?: string;
  mG?: string;
  eLECTROLYTES?: string;
};

const BenefitsImageContainers: FunctionComponent<
  BenefitsImageContainersType
> = ({ className = "", dfdbeeddfecdcsv, mG, eLECTROLYTES }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[18.1px] text-center text-base text-gray-100 font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-[46px] pr-[47px]">
        <img
          className="h-[33px] w-[33px] relative overflow-hidden shrink-0"
          alt=""
          src={dfdbeeddfecdcsv}
        />
      </div>
      <div className="self-stretch relative leading-[22.4px] uppercase font-semibold">
        <p className="m-0">{mG}</p>
        <p className="m-0">{eLECTROLYTES}</p>
      </div>
    </div>
  );
};

export default BenefitsImageContainers;
