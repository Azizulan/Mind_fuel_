import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-10 box-border max-w-full text-left text-21xl text-linen-100 font-inter ${className}`}
    >
      <div className="flex-1 rounded-13xl bg-crimson flex flex-row items-end justify-start p-14 box-border gap-[68.7px] max-w-full mq450:gap-[17px] mq800:gap-[34px] mq800:pt-9 mq800:pb-9 mq800:box-border mq1350:flex-wrap mq1350:pl-7 mq1350:pr-7 mq1350:box-border">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[88px] box-border min-w-[501.3px] max-w-full mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18.6px] max-w-full">
            <h1 className="m-0 w-[363.6px] relative text-inherit leading-[44px] font-bold font-[inherit] flex items-center max-w-full mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
              <span className="w-full">
                <p className="m-0">Save $10 When</p>
                <p className="m-0">You Buy 3 Packs</p>
              </span>
            </h1>
            <div className="self-stretch relative text-5xs leading-[25.6px] font-semibold">
              <p className="m-0">
                Mix and match flavors together to build your own Salud
              </p>
              <p className="m-0">bundle.</p>
            </div>
            <button className="cursor-pointer [border:none] pt-4 px-14 pb-2.5 bg-linen-100 w-[253px] rounded-80xl flex flex-row items-start justify-start box-border hover:bg-lightgray mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative text-base leading-[22px] uppercase font-semibold font-inter text-gray-100 text-center">
                Build A Bundle
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[400px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover min-w-[441px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="/rectangle-3141-2-minjpg@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
