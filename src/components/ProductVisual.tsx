import { FunctionComponent } from "react";

export type ProductVisualType = {
  className?: string;
};

const ProductVisual: FunctionComponent<ProductVisualType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-24 box-border max-w-full text-center text-21xl text-linen-100 font-inter mq800:pb-[62px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-4 max-w-full mq1350:flex-wrap">
        <img
          className="w-[651px] relative rounded-13xl max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/rectangle-3146-2-min-23e9533bb09a449fb274194e8516cdb6jpg@2x.png"
        />
        <div className="flex-1 rounded-13xl bg-crimson flex flex-col items-end justify-start pt-[60px] pb-[58.7px] pl-[147px] pr-[189px] box-border gap-14 min-w-[450px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-7 mq800:pt-[39px] mq800:pb-[38px] mq800:pl-[73px] mq800:pr-[94px] mq800:box-border mq800:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[33.6px] max-w-full mq450:gap-[17px]">
            <div className="w-[314.6px] flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px]">
                <h1 className="m-0 flex-1 relative text-inherit leading-[44px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
                  Sip And Earn
                </h1>
              </div>
              <div className="self-stretch relative text-base leading-[17.6px] font-semibold">
                <p className="m-0">Move up the ranks and earn points</p>
                <p className="m-0">from your purchases. Redeemable</p>
                <p className="m-0">for discounts and freebies for life.</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[15px] box-border max-w-full text-left text-4xl">
              <div className="flex-1 flex flex-row items-end justify-start gap-5 max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-3">
                  <img
                    className="w-16 h-[63.5px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/group-48097974png@2x.png"
                  />
                  <img
                    className="w-16 h-16 relative overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/group-48097974-1png@2x.png"
                  />
                  <img
                    className="w-16 h-[63.5px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/group-48097974-2png@2x.png"
                  />
                  <img
                    className="w-16 h-[63.5px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/group-48097974-3png@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[15.6px] box-border min-w-[167px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[43.5px] mq450:gap-[22px]">
                    <h3 className="m-0 w-[218.6px] relative text-inherit leading-[32.2px] uppercase font-bold font-[inherit] flex items-center mq450:text-lg mq450:leading-[26px]">
                      Tier 1: pre-game
                    </h3>
                    <h3 className="m-0 self-stretch relative text-inherit leading-[32.2px] uppercase font-bold font-[inherit] mq450:text-lg mq450:leading-[26px]">
                      Tier 2: happy hour
                    </h3>
                    <h3 className="m-0 w-[175.3px] relative text-inherit leading-[32.2px] uppercase font-bold font-[inherit] flex items-center mq450:text-lg mq450:leading-[26px]">
                      Tier 3: fiesta
                    </h3>
                    <h3 className="m-0 self-stretch relative text-inherit leading-[32.2px] uppercase font-bold font-[inherit] mq450:text-lg mq450:leading-[26px]">
                      Tier 4: after party
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[314.4px] flex flex-row items-start justify-end py-0 px-[13px] box-border">
            <button className="cursor-pointer [border:none] pt-4 pb-2.5 pl-[21px] pr-5 bg-linen-100 flex-1 rounded-80xl flex flex-row items-start justify-start hover:bg-lightgray">
              <div className="flex-1 relative text-base leading-[22px] uppercase font-semibold font-inter text-gray-100 text-center">
                Join Our Loyalty Program
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisual;
