import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Item1Type = {
  className?: string;
  regionStrongKassandra?: string;
  frame?: string;
  frame1?: string;
  iWishThisWasAYearRoundFlavor?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Item1: FunctionComponent<Item1Type> = ({
  className = "",
  regionStrongKassandra,
  frame,
  frame1,
  iWishThisWasAYearRoundFlavor,
  propMinWidth,
  propWidth,
}) => {
  const regionStrongStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch border-gray-300 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-8 px-0 pb-[31px] gap-[170.2px] max-w-full text-left text-xs text-gray-100 font-inter mq450:gap-[43px] mq800:gap-[85px] mq1125:flex-wrap ${className}`}
    >
      <div className="w-[171.8px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4.8px]">
          <div
            className="relative leading-[16.8px] uppercase font-semibold inline-block min-w-[79.9px]"
            style={regionStrongStyle}
          >
            {regionStrongKassandra}
          </div>
          <div className="self-stretch relative leading-[19.2px]">
            I recommend this product
          </div>
        </div>
      </div>
      <div
        className="w-[437.2px] flex flex-col items-start justify-start gap-[11.5px] max-w-full text-base"
        style={frameDiv2Style}
      >
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
              <img
                className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                alt=""
                src={frame}
              />
            </div>
            <div className="h-3.5 w-[76.2px] relative shrink-0 z-[1] flex items-center justify-center">
              <img
                className="h-full w-full shrink-0 z-[1] object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                alt=""
                src={frame1}
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-1.5">
            <div className="relative leading-[22.4px] uppercase font-semibold inline-block min-w-[68px]">
              5 Stars
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <div className="flex-1 relative leading-[28.8px] inline-block max-w-full">
            {iWishThisWasAYearRoundFlavor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
