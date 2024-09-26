import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-24 box-border max-w-full text-center text-21xl text-gray-100 font-inter mq450:pb-10 mq450:box-border mq800:pb-[62px] mq800:box-border ${className}`}
    >
      <div className="flex-1 border-gray-300 border-b-[3px] border-solid box-border flex flex-col items-end justify-start pt-[60px] px-[115px] pb-[95px] gap-10 max-w-full z-[3] mq800:gap-5 mq800:pt-[39px] mq800:px-7 mq800:pb-[62px] mq800:box-border mq1350:pl-[57px] mq1350:pr-[57px] mq1350:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[242px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[60px] mq800:pr-[60px] mq800:box-border mq1125:pl-[121px] mq1125:pr-[121px] mq1125:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[44px] font-bold font-[inherit] inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
            Always A Sip Above The Rest
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start max-w-full text-xl text-linen-100 mq1125:flex-wrap">
          <div className="h-[448px] w-64 flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 relative" />
            <div className="self-stretch h-[110px] rounded-tl-3xl rounded-tr-none rounded-b-none bg-gray-100 border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] pb-[43px] pl-12 pr-[47px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative leading-[22px]">Added Sugars</div>
            </div>
            <textarea
              className="[border:none] bg-gray-100 h-[110px] w-auto [outline:none] self-stretch border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-12 pb-[43px] font-inter text-xl text-linen-100"
              placeholder="Calories"
              rows={6}
              cols={13}
            />
            <div className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xl bg-gray-100 flex flex-row items-start justify-start py-[45px] px-12">
              <div className="w-[150.6px] relative leading-[22px] flex items-center justify-center shrink-0">
                2-in-1 Benefits
              </div>
            </div>
          </div>
          <div className="rounded-t-3xl rounded-b-none bg-gray-100 border-linen-100 border-t-[3px] border-solid border-linen-100 border-r-[3px] border-solid border-linen-100 border-l-[3px] border-solid flex flex-row items-start justify-start">
            <div className="rounded-t-3xl rounded-b-none overflow-hidden flex flex-col items-end justify-start pt-[33px] px-0 pb-11 relative gap-[62px] bg-[url('/public/f71cb8c37cd84afb9a78504e8011a76fthumbnail0000000000-smalljpg@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:pt-[21px] mq450:pb-[29px] mq450:box-border">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
              <div className="flex flex-row items-start justify-end py-0 px-[43px]">
                <img
                  className="h-16 w-[155px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-35abdd97a7f048b1a0c7cb3336128bedsvg.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[26px] pl-[21px] pr-5">
                <div className="flex flex-col items-start justify-start gap-[90px]">
                  <div className="w-[23.9px] relative leading-[22px] font-semibold flex items-center justify-center z-[1] mq450:text-base mq450:leading-[18px]">
                    1g
                  </div>
                  <div className="w-[25.8px] relative leading-[22px] font-semibold flex items-center justify-center z-[1] mq450:text-base mq450:leading-[18px]">
                    10
                  </div>
                </div>
              </div>
              <img
                className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                alt=""
                src="/svg-2@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-end justify-start max-w-full mq800:flex-wrap mq800:min-w-full">
            <div className="w-[208.7px] flex flex-col items-start justify-start pt-[65px] px-0 pb-0 box-border relative mq450:pt-[42px] mq450:box-border mq800:flex-1">
              <img
                className="w-[43px] h-12 absolute !m-[0] top-[0px] left-[82.8px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/gatorade-bolt-logo-1-f057fd203fc74f38b7ec57e890fe30d7svg@2x.png"
              />
              <textarea
                className="[border:none] bg-gray-100 h-[110px] w-auto [outline:none] self-stretch border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[83px] pb-[43px] font-inter text-xl text-linen-100"
                placeholder="34g"
                rows={6}
                cols={10}
              />
              <div className="self-stretch h-[110px] bg-gray-100 border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[84px] pb-[43px]">
                <div className="flex-1 relative leading-[22px] mq450:text-base mq450:leading-[18px]">
                  140
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/backgroundverticalborder@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full text-lg-1">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-[26px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-start gap-[47.6px] max-w-full mq450:gap-6 mq800:flex-1 mq800:flex-wrap">
                  <img
                    className="h-12 w-[165px] relative overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/liquidiv-logo-1-7673964e142d4ebcaf26fe40ab895ee9svg@2x.png"
                  />
                  <img
                    className="h-14 w-[157px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/image-2-6297a30e238a4156af2f410441f6c822svg.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
                  <div className="flex-1 bg-gray-100 border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[88px] pb-[43px] min-w-[136px] z-[1]">
                    <div className="flex-1 relative leading-[22px]">11g</div>
                  </div>
                  <textarea
                    className="[border:none] bg-gray-100 h-[110px] w-[208.7px] [outline:none] rounded-tl-none rounded-tr-3xl rounded-b-none border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[88px] pb-[43px] font-inter text-xl text-linen-100 z-[3] ml-[-0.1px] mq450:ml-0"
                    placeholder="9g"
                    rows={6}
                    cols={10}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-lgi-8 mq800:flex-wrap">
                  <div className="flex-1 bg-gray-100 border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[90px] pb-[41px] min-w-[136px] z-[2]">
                    <div className="flex-1 relative leading-[22px]">45</div>
                  </div>
                  <textarea
                    className="[border:none] bg-gray-100 h-[110px] w-[208.7px] [outline:none] border-linen-100 border-r-[3px] border-solid border-linen-100 border-b-[3px] border-solid box-border flex flex-row items-start justify-start pt-[43.5px] px-[91px] pb-[43px] font-inter text-lg-8 text-linen-100 z-[4] ml-[-0.1px] mq450:ml-0"
                    placeholder="35"
                    rows={6}
                    cols={10}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq800:flex-wrap">
                  <img
                    className="h-[110px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[136px] z-[3]"
                    alt=""
                    src="/backgroundverticalborder-1@2x.png"
                  />
                  <img
                    className="[border:none] bg-[transparent] [outline:none] h-[110px] flex-1 relative rounded-t-none rounded-br-3xl rounded-bl-none max-w-full overflow-hidden object-cover min-w-[136px] z-[5] ml-[-0.1px] mq450:ml-0"
                    alt=""
                    src="/backgroundverticalborder-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
