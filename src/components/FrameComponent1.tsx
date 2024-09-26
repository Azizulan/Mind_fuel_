import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[98px] pl-10 pr-[34px] box-border max-w-full text-center text-xs text-linen-100 font-inter mq800:pb-16 mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-4 max-w-full mq1350:flex-wrap">
        <div className="bg-linen-100 flex flex-row items-start justify-start max-w-full">
          <div className="self-stretch w-[428px] relative bg-linen-100 hidden max-w-full" />
          <img
            className="h-[621px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/deferredmedia@2x.png"
          />
        </div>
        <div className="h-[621px] flex-[0.9469] flex flex-col items-start justify-start py-0 pl-0 pr-6 box-border max-w-full mq800:flex-1">
          <div className="self-stretch flex-1 bg-linen-100 flex flex-row items-start justify-end p-5 box-border relative max-w-full">
            <div className="h-[621px] w-[428px] relative bg-linen-100 hidden max-w-full z-[0]" />
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/container@2x.png"
            />
            <div className="rounded-21xl [background:linear-gradient(90deg,_#eb692b,_#d45a1f)] flex flex-row items-start justify-start pt-2 pb-[3.8px] pl-[15px] pr-3.5 z-[3]">
              <a className="[text-decoration:none] flex-1 relative leading-[16.8px] uppercase font-semibold text-[inherit] inline-block min-w-[88.7px]">
                LIMITED-TIME
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[15.2px] px-0 pb-0 box-border max-w-full text-left text-base text-gray-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9.8px] max-w-full">
            <div className="flex flex-row items-end justify-start pt-0 px-0 pb-[5.2px] gap-2 text-xs">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px]">
                <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px] relative">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
                    <img
                      className="h-full w-full overflow-hidden object-contain absolute left-[31px] top-[0px] [transform:scale(1.816)]"
                      alt=""
                      src="/description-and-button.svg"
                    />
                  </div>
                  <img
                    className="h-3.5 w-[73.4px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/container-1.svg"
                  />
                </div>
              </div>
              <div className="relative [text-decoration:underline] leading-[12px] lowercase inline-block min-w-[78px]">
                268 Reviews
              </div>
            </div>
            <div className="w-[290.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[6.2px] box-border gap-2.5 text-21xl">
              <h1 className="m-0 self-stretch relative text-inherit leading-[44px] uppercase font-bold font-[inherit] mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
                <p className="m-0">Mango Chili</p>
                <p className="m-0">Lollipop</p>
              </h1>
              <div className="relative text-xs leading-[16.8px] uppercase font-semibold">
                Hydration + Immunity · 15 Servings
              </div>
            </div>
            <div className="w-[415.1px] relative leading-[25.6px] flex items-center max-w-full">
              <span className="w-full">
                <p className="m-0">
                  Your go-to for when you’re feeling dehydrated
                </p>
                <p className="m-0">
                  and need to refuel, with just 1 gram of sugar.
                </p>
              </span>
            </div>
            <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[10.2px] box-border gap-[5.4px] max-w-full text-sm mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[2.2px]">
                  <div className="relative leading-[25.2px] font-semibold inline-block min-w-[62px]">
                    FLAVOR:
                  </div>
                  <div className="flex flex-col items-start justify-start gap-3">
                    <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#eb692b,_#d45a1f)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        loading="lazy"
                        alt=""
                        src="/salud-emojis-mangochili-v30png@2x.png"
                      />
                    </div>
                    <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#30a5dd,_#80d1e9)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        loading="lazy"
                        alt=""
                        src="/horchatapng@2x.png"
                      />
                    </div>
                    <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#c8802a,_#f1a23e)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/tamarindopng@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.2px] min-w-[130px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[5.8px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                    <b className="self-stretch relative leading-[25.2px] uppercase">
                      Mango Chili Lollipop
                    </b>
                  </div>
                  <img className="h-4 w-4 relative" alt="" src="/svg-1.svg" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-[7px]">
                  <div className="self-stretch w-48 flex flex-row items-start justify-start flex-wrap content-start gap-x-[3px] gap-y-3">
                    <div className="h-14 w-14 relative rounded-9xl [background:linear-gradient(90deg,_#ac1e44,_#ec1758)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/jamaica---hibiscuspng@2x.png"
                      />
                    </div>
                    <img
                      className="h-14 w-14 relative rounded-9xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/backgroundborder.svg"
                    />
                    <div className="h-14 w-14 relative rounded-9xl [background:linear-gradient(90deg,_#eb692b,_#f5a333)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/salud-emojis-mandarin-v10png@2x.png"
                      />
                    </div>
                    <div className="h-14 w-14 relative rounded-9xl [background:linear-gradient(90deg,_#ff4a8d,_#ff8db7)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/guayaba---guava-de0c723389e24f2096ef71aa69b34bcepng@2x.png"
                      />
                    </div>
                    <div className="h-14 w-14 relative rounded-9xl [background:linear-gradient(90deg,_#ed2424,_#ffd700)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/mango-2e57101bd0fd4b00add7095f4916d471png@2x.png"
                      />
                    </div>
                    <div className="h-14 w-14 relative rounded-9xl [background:linear-gradient(90deg,_#f8af18,_#fdda00)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                        alt=""
                        src="/pina---pineapplepng@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[30.6px] pb-0 pl-0 pr-1.5">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#ea242d,_#f06460)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                    <img
                      className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                      alt=""
                      src="/sandia---watermelonpng@2x.png"
                    />
                  </div>
                  <img
                    className="w-14 h-14 relative rounded-9xl overflow-hidden shrink-0"
                    alt=""
                    src="/backgroundborder-1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[30.6px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#2aa149,_#a8cd38)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                    <img
                      className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                      alt=""
                      src="/pepino-limon---cucumber-limepng@2x.png"
                    />
                  </div>
                  <div className="w-14 h-14 relative rounded-9xl [background:linear-gradient(90deg,_#ed2524,_#f05d40)] border-gray-100 border-[3px] border-solid box-border overflow-hidden shrink-0">
                    <img
                      className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_23.7px)] w-[47.5px] h-[50px] overflow-hidden object-cover"
                      alt=""
                      src="/fresa---strawberrypng@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full text-center text-linen-100">
              <div className="flex-1 rounded-80xl bg-crimson overflow-x-auto flex flex-row items-start justify-start py-[13px] pl-[135px] pr-[132px] box-border gap-[4.8px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[22px] uppercase font-semibold inline-block min-w-[105.2px]">
                  ADD TO BAG
                </div>
                <div className="relative leading-[22px] uppercase font-semibold inline-block min-w-[9.7px]">
                  -
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-base-9">
                  <div className="self-stretch relative leading-[16px] uppercase font-semibold inline-block min-w-[57px]">
                    $24.99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
