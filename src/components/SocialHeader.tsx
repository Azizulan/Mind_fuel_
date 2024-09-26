import { FunctionComponent } from "react";

export type SocialHeaderType = {
  className?: string;
};

const SocialHeader: FunctionComponent<SocialHeaderType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-10 box-border max-w-full text-left text-21xl text-gray-100 font-inter ${className}`}
    >
      <div className="flex-1 rounded-13xl flex flex-col items-start justify-start py-24 px-14 box-border gap-[34px] bg-[url('/public/background@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-10 mq450:pb-10 mq450:box-border mq800:gap-[17px] mq800:pt-[62px] mq800:pb-[62px] mq800:box-border mq1350:pl-7 mq1350:pr-7 mq1350:box-border">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
          <div className="w-[429.2px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">{`Hydrated & Happy`}</h1>
          </div>
          <div className="w-[311px] rounded-80xl bg-linen-100 flex flex-row items-start justify-start pt-4 pb-2.5 pl-14 pr-[55px] box-border text-center text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 relative leading-[22px] uppercase font-semibold">
              Follow @Tastesalud
            </div>
          </div>
        </div>
        <div className="w-[1231.1px] flex flex-row items-start justify-start gap-4 max-w-full mq800:grid-cols-[minmax(222px,_1fr)] mq1125:flex-wrap mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(222px,_385px))]">
          <img
            className="h-[504px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover mq800:w-full"
            loading="lazy"
            alt=""
            src="/group--1--4--rectangle-3146-1-minjpg@2x.png"
          />
          <div className="self-stretch flex-1 rounded-13xl overflow-hidden flex flex-row items-start justify-start bg-[url('/public/group--2--4--8226d3ff7f0d461fa0f80eb7b24f70ecthumbnail0000000000jpg@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch flex-1 relative" />
          </div>
          <img
            className="h-[504px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover mq800:w-full"
            loading="lazy"
            alt=""
            src="/group--3--4--rectangle-3145minjpg@2x.png"
          />
          <img
            className="h-[504px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover mq800:w-full"
            loading="lazy"
            alt=""
            src="/group--4--4--rectangle-3143-1-minjpg@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialHeader;
