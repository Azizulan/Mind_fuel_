import { FunctionComponent } from "react";
import Item from "./Item";
import Item1 from "./Item1";

export type ReviewContentType = {
  className?: string;
};

const ReviewContent: FunctionComponent<ReviewContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[56.1px] box-border max-w-full text-left text-base text-dimgray-200 font-inter mq800:pb-[23px] mq800:box-border mq1125:pb-9 mq1125:box-border ${className}`}
    >
      <div className="w-[1130px] flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between gap-5 mq800:flex-wrap">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.9px]">
            <div className="relative leading-[22.4px] uppercase font-semibold inline-block min-w-[112.2px]">
              268 reviews
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-5">
            <div className="rounded-80xl bg-white border-gray-100 border-[3px] border-solid overflow-x-auto flex flex-row items-start justify-start py-2.5 px-[21px]">
              <img
                className="h-5 w-5 relative shrink-0"
                alt=""
                src="/image.svg"
              />
              <div className="w-[193px] shrink-0 flex flex-col items-start justify-start pt-[2.1px] pb-0 pl-0 pr-5 box-border">
                <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[71.5px]">
                  {" "}
                  Filters
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/filter-downarrowsvg.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-80xl bg-white border-gray-100 border-[3px] border-solid flex flex-row items-start justify-start py-3 pl-6 pr-[17px] [row-gap:20px] text-gray-100 mq450:flex-wrap">
              <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[52px]">{`Sort `}</div>
              <div className="w-[192.8px] flex flex-col items-start justify-start py-0 px-0 box-border">
                <div className="ml-[-0.2px] self-stretch bg-white flex flex-row items-start justify-start py-0 px-3 relative">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/filter-downarrowsvg-fill.svg"
                  />
                  <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[121.9px] z-[1]">
                    Most Recent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[812.8px] border-gray-300 border-t-[3px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[156.2px] max-w-full text-xs text-gray-100 mq800:pb-[66px] mq800:box-border mq1125:h-auto mq1125:pb-[102px] mq1125:box-border">
          <Item
            strongJoceyD="Jocey D."
            icon="/icon.svg"
            flavorNameContainer="/frame-1.svg"
            ratingStarsContainer="/frame-2.svg"
            soRefreshing="So refreshing!!"
            itsReallyRefreshingPlusHas="It's really refreshing plus has a little kick to it perfect combo!"
          />
          <Item1
            regionStrongKassandra="Kassandra"
            frame="/frame-3.svg"
            frame1="/frame-4.svg"
            iWishThisWasAYearRoundFlavor="I wish this was a year round flavor it’s my favorite."
          />
          <div className="self-stretch border-gray-300 border-b-[3px] border-solid box-border flex flex-row items-start justify-between pt-8 pb-[25px] pl-0 pr-[34px] max-w-full shrink-0 gap-5 mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
            <div className="w-[171.8px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9.9px]">
                <div className="relative leading-[16.8px] uppercase font-semibold inline-block min-w-[60.9px]">
                  Susan G.
                </div>
                <div className="w-[109px] flex flex-row items-start justify-start gap-1">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <div className="flex-1 relative leading-[19.2px]">
                    Verified Buyer
                  </div>
                </div>
                <div className="self-stretch relative leading-[19.2px]">
                  I recommend this product
                </div>
              </div>
            </div>
            <div className="w-[754.4px] flex flex-col items-start justify-start gap-[18.3px] max-w-full text-base">
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                  <img
                    className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                    alt=""
                    src="/frame-5.svg"
                  />
                </div>
                <div className="h-3.5 w-[76.2px] relative shrink-0 z-[1] flex items-center justify-center">
                  <img
                    className="h-full w-full shrink-0 z-[1] object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                    alt=""
                    src="/frame-6.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
                <div className="relative leading-[22.4px] uppercase font-semibold inline-block min-w-[115.9px]">
                  Great taste!
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                <div className="flex-1 relative leading-[28.8px] inline-block max-w-full">
                  <p className="m-0">
                    I was pleasantly surprised at the taste of this one. Just
                    enough of a chili kick without an
                  </p>
                  <p className="m-0">
                    aftertaste. Very much like those lollipops we all remember.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Item1
            regionStrongKassandra="laura"
            frame="/frame-7.svg"
            frame1="/frame-8.svg"
            iWishThisWasAYearRoundFlavor="Not too spicy for us folks who can’t handle medium salsa."
            propMinWidth="43.7px"
            propWidth="504.2px"
          />
          <Item
            strongJoceyD="Janessa M."
            icon="/icon-2.svg"
            flavorNameContainer="/frame-9.svg"
            ratingStarsContainer="/frame-10.svg"
            soRefreshing="Mango chili 🌶"
            itsReallyRefreshingPlusHas="Super amazing!! Tastes just like the mango chili lollipop!"
            propMinWidth="75.3px"
            propWidth="492.5px"
            propWidth1="142.9px"
            propAlignSelf="stretch"
            propFlex="1"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
