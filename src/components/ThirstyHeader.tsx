import { FunctionComponent } from "react";

export type ThirstyHeaderType = {
  className?: string;
};

const ThirstyHeader: FunctionComponent<ThirstyHeaderType> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border gap-8 max-w-full text-left text-21xl text-gray-100 font-inter mq450:pb-10 mq450:box-border mq800:gap-4 mq800:pb-[62px] mq800:box-border ${className}`}
    >
      <h1 className="m-0 w-[397.4px] relative text-inherit leading-[44px] font-bold font-[inherit] flex items-center shrink-0 max-w-full mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
        Thirsty For More?
      </h1>
      <div className="w-[1400px] overflow-x-auto flex flex-row items-start justify-start gap-4 shrink-0 max-w-full text-sm">
        <div className="flex flex-col items-start justify-start gap-6 shrink-0 max-w-[118%]">
          <div className="self-stretch flex flex-row items-start justify-center gap-4 max-w-full mq800:grid-cols-[minmax(300px,_1fr)] mq1350:flex-wrap mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(300px,_520px))]">
            <div className="flex-1 rounded-13xl bg-linen-200 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border min-w-[368px] max-w-full text-xl mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 relative gap-[39px] mq450:gap-[19px]">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
                <div className="self-stretch h-12 relative z-[1]" />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/millennial-loteria-ml-1-large-480png@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[78.6px] max-w-full mq450:gap-[39px]">
                  <div className="w-[267.6px] relative leading-[20px] uppercase font-semibold flex items-center mq450:text-base mq450:leading-[16px]">
                    Millennial Lotería Set
                  </div>
                  <div className="self-stretch h-12 rounded-80xl bg-linen-100 border-gray-100 border-[3px] border-solid box-border flex flex-row items-start justify-start pt-[13px] pb-[5px] pl-[90px] pr-[84px] text-center text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 relative leading-[22px] uppercase font-semibold">
                      SHOP NOW – $24.95
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-13xl bg-linen-200 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-1.5 min-w-[368px] max-w-full shrink-0 mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 relative gap-[39px] mq450:gap-[19px]">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
                <div className="self-stretch h-12 relative z-[1]" />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/salud-h-i-mango-productpng@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13.6px] max-w-full">
                  <div className="flex flex-col items-start justify-start gap-2.5">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px] relative">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                            <img
                              className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                          <img
                            className="h-3.5 w-[73.4px] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/container-2.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <div className="relative leading-[16px] lowercase inline-block min-w-[88.7px]">
                            888 Reviews
                          </div>
                        </div>
                      </div>
                      <div className="relative text-xl leading-[20px] uppercase font-semibold inline-block min-w-[83.3px] mq450:text-base mq450:leading-[16px]">
                        Mango
                      </div>
                    </div>
                    <div className="w-[160.5px] relative leading-[19.6px] flex items-center">
                      Hydration + Immunity
                    </div>
                  </div>
                  <div className="self-stretch h-12 rounded-80xl bg-linen-100 border-gray-100 border-[3px] border-solid box-border flex flex-row items-start justify-start pt-[13px] pb-[5px] pl-[90px] pr-[83px] text-center text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 relative leading-[22px] uppercase font-semibold">
                      SHOP NOW – $24.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-13xl bg-linen-200 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-1.5 min-w-[368px] max-w-full text-center text-xs text-white mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-2 relative gap-[32.2px] mq450:gap-4">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
                <div className="flex flex-row items-start justify-start py-0 px-6">
                  <div className="flex-1 rounded-21xl [background:linear-gradient(90deg,_#bf1e5c,_#e8a1aa)] flex flex-row items-start justify-start pt-[9px] pb-[4.8px] pl-[15px] pr-3.5 z-[1]">
                    <div className="flex-1 relative leading-[16.8px] uppercase font-semibold inline-block min-w-[31.6px]">
                      NEW
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/salud-energy-pdp-dragonfruit-heropng@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-gray-100">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13.6px] max-w-full">
                  <div className="w-[244.1px] flex flex-col items-start justify-start gap-[11px]">
                    <div className="w-[165.7px] flex flex-row items-start justify-start gap-2">
                      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1.5 relative">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                          <img
                            className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                            alt=""
                            src="/frame-12.svg"
                          />
                        </div>
                        <img
                          className="h-3.5 w-[70.6px] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/container-3.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="self-stretch relative leading-[16px] lowercase">
                          59 Reviews
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-lg-3 leading-[20px] uppercase font-semibold">
                      Pitaya | Dragon Fruit
                    </div>
                    <div className="w-[114.9px] relative leading-[19.6px] flex items-center">
                      Energy + Focus
                    </div>
                  </div>
                  <div className="self-stretch h-12 rounded-80xl bg-linen-100 border-gray-100 border-[3px] border-solid box-border flex flex-row items-start justify-start pt-[13px] pb-[5px] pl-[90px] pr-[83px] text-center text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 relative leading-[22px] uppercase font-semibold">
                      SHOP NOW – $24.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-13xl bg-linen-200 flex flex-col items-start justify-start pt-[87px] px-0 pb-6 box-border gap-2.5 min-w-[368px] max-w-full shrink-0 mq450:min-w-full mq800:pt-[57px] mq800:pb-5 mq800:box-border">
              <div className="self-stretch h-[400px] relative hidden" />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <img
                  className="h-[305px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src="/1500x1500-salud-pdp-h-i-mandarin-hero-v30png@2x.png"
                />
              </div>
              <div className="self-stretch h-12 relative hidden" />
              <div className="w-[226.8px] flex flex-row items-start justify-start py-0 px-6 box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-2">
                  <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px] relative">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                      <img
                        className="h-full w-full overflow-hidden object-contain absolute left-[26px] top-[0px] [transform:scale(1.68)]"
                        alt=""
                        src="/frame-13.svg"
                      />
                    </div>
                    <img
                      className="h-3.5 w-[73.4px] relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/container-4.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="self-stretch relative leading-[16px] lowercase">
                      204 Reviews
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-6 pr-[23px] text-xl">
                <div className="relative leading-[20px] uppercase font-semibold inline-block min-w-[116px] mq450:text-base mq450:leading-[16px]">
                  Mandarín
                </div>
              </div>
              <div className="w-[207.5px] flex flex-row items-start justify-start pt-0 pb-[3.6px] pl-6 pr-[23px] box-border">
                <div className="flex-1 relative leading-[19.6px]">
                  Hydration + Immunity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-center text-base">
                <div className="h-12 flex-1 rounded-80xl bg-linen-100 border-gray-100 border-[3px] border-solid box-border flex flex-row items-start justify-start pt-[13px] px-[90px] pb-[5px] max-w-full">
                  <a className="[text-decoration:none] relative leading-[22px] uppercase font-semibold text-[inherit] inline-block min-w-[53.7px]">{`SHOP `}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1360px] h-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <div className="self-stretch flex-1 rounded bg-gray-300 flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch w-[565.3px] relative rounded-3xs bg-gray-100 max-w-full" />
            </div>
          </div>
        </div>
        <img
          className="h-[570.6px] w-[400px] relative rounded-13xl shrink-0"
          loading="lazy"
          alt=""
          src="/group--5--8.svg"
        />
        <img
          className="h-[570.6px] w-[400px] relative rounded-13xl shrink-0"
          loading="lazy"
          alt=""
          src="/group--6--8.svg"
        />
        <img
          className="h-[570.6px] w-[400px] relative rounded-13xl shrink-0"
          loading="lazy"
          alt=""
          src="/group--7--8.svg"
        />
        <img
          className="h-[570.6px] w-[400px] relative rounded-13xl shrink-0"
          loading="lazy"
          alt=""
          src="/group--8--8.svg"
        />
      </div>
    </section>
  );
};

export default ThirstyHeader;
