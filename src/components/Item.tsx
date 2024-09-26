import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ItemType = {
  className?: string;
  strongJoceyD?: string;
  icon?: string;
  flavorNameContainer?: string;
  ratingStarsContainer?: string;
  soRefreshing?: string;
  itsReallyRefreshingPlusHas?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  strongJoceyD,
  icon,
  flavorNameContainer,
  ratingStarsContainer,
  soRefreshing,
  itsReallyRefreshingPlusHas,
  propMinWidth,
  propWidth,
  propWidth1,
  propAlignSelf,
  propFlex,
}) => {
  const strongJoceyStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const ratingContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const soRefreshingStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`self-stretch border-gray-300 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-8 px-0 pb-[31px] gap-[170.2px] max-w-full text-left text-xs text-gray-100 font-inter mq450:gap-[43px] mq1125:gap-[85px] mq1125:flex-wrap ${className}`}
    >
      <div className="w-[171.8px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9.9px]">
          <div
            className="relative leading-[16.8px] uppercase font-semibold inline-block min-w-[57px]"
            style={strongJoceyStyle}
          >
            {strongJoceyD}
          </div>
          <div className="w-[109px] flex flex-row items-start justify-start gap-1">
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src={icon}
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
      <div
        className="w-[527.8px] flex flex-col items-start justify-start gap-[11.4px] max-w-full text-base"
        style={frameDivStyle}
      >
        <div
          className="flex flex-col items-start justify-start gap-[19px]"
          style={frameDiv1Style}
        >
          <div className="flex flex-row items-start justify-start relative shrink-0">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
              <img
                className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                alt=""
                src={flavorNameContainer}
              />
            </div>
            <div className="h-3.5 w-[76.2px] relative shrink-0 z-[1] flex items-center justify-center">
              <img
                className="h-full w-full shrink-0 z-[1] object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                alt=""
                src={ratingStarsContainer}
              />
            </div>
          </div>
          <div
            className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0"
            style={ratingContainerStyle}
          >
            <div
              className="relative leading-[22.4px] uppercase font-semibold shrink-0"
              style={soRefreshingStyle}
            >
              {soRefreshing}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <div className="flex-1 relative leading-[28.8px] inline-block max-w-full">
            {itsReallyRefreshingPlusHas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
