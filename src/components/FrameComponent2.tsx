import { FunctionComponent } from "react";
import BenefitsImageContainers from "./BenefitsImageContainers";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[31px] box-border max-w-full text-center text-xl text-gray-100 font-inter ${className}`}
    >
      <div className="w-[865px] flex flex-col items-end justify-start gap-[29.7px] max-w-full">
        <div className="w-[852.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[676.5px] flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[42px] pr-[43px] box-border max-w-full mq800:pl-[21px] mq800:pr-[21px] mq800:box-border">
              <b className="flex-1 relative leading-[44px] inline-block max-w-full mq450:text-base mq450:leading-[35px]">
                <p className="m-0">Total Hydration: </p>
                <p className="m-0">{`Stay refreshed & fortified`}</p>
                <p className="m-0 text-crimson">all day long</p>
              </b>
            </div>
            <div className="self-stretch relative text-base leading-[25.6px]">
              <p className="m-0">
                <span className="font-inter">{`Each serving contains just `}</span>
                <span className="font-semibold font-inter">10 calories</span>
                <span className="font-inter">{` and `}</span>
                <span className="font-semibold font-inter">
                  1 gram of sugar.
                </span>
                <span> Our formulas are</span>
              </p>
              <p className="m-0">
                vegan, gluten-free, non-GMO, and have no artificial dyes.
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start max-w-full gap-5 text-base mq800:justify-center">
          <BenefitsImageContainers
            dfdbeeddfecdcsv="/758df4682133152d70b39eed5dfe0cdcsvg.svg"
            mG="400+MG"
            eLECTROLYTES="ELECTROLYTES"
          />
          <div className="w-[373.3px] flex flex-col items-end justify-start py-0 pl-0 pr-[13px] box-border gap-[57.4px] max-w-full mq450:gap-[29px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center">
              <BenefitsImageContainers
                dfdbeeddfecdcsv="/37e2fc96462ac36055a088b65f56540b-bc63d66432a242c7bd2aaa0b438ab5f6svg.svg"
                mG="250MG"
                eLECTROLYTES="WELLMUNE®"
              />
              <BenefitsImageContainers
                dfdbeeddfecdcsv="/421806c55892b03d4d8e024909e07397svg.svg"
                mG="100MG"
                eLECTROLYTES="ELDERBERRY"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[26px] pr-6">
              <button className="cursor-pointer [border:none] pt-4 pb-2.5 pl-14 pr-[55px] bg-crimson flex-1 rounded-80xl flex flex-row items-start justify-start hover:bg-deeppink mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 relative text-base leading-[22px] uppercase font-semibold font-inter text-linen-100 text-center">
                  View All Ingredients
                </div>
              </button>
            </div>
          </div>
          <BenefitsImageContainers
            dfdbeeddfecdcsv="/d9d31a02070adb611e6c086787c38f24svg.svg"
            mG="DAILY"
            eLECTROLYTES="ESSENTIALS"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
