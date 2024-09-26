import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Background from "../components/Background";
import Background1 from "../components/Background1";
import FrameComponent4 from "../components/FrameComponent4";
import ProductVisual from "../components/ProductVisual";
import ReviewContent from "../components/ReviewContent";
import HorizontalBorder1 from "../components/HorizontalBorder1";
import ThirstyHeader from "../components/ThirstyHeader";
import SocialHeader from "../components/SocialHeader";
import HorizontalBorder from "../components/HorizontalBorder";
import BodyRegionCampaignsMess from "../components/BodyRegionCampaignsMess";

const Body: FunctionComponent = () => {

  return (
    <div className="w-full relative bg-linen-100 flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-center text-xs text-linen-100 font-inter">
      <div className="w-[117.5px] h-[28.8px] relative rounded-21xl [background:linear-gradient(90deg,_#eb692b,_#d45a1f)] hidden z-[0]">
        <div className="absolute top-[8px] left-[calc(50%_-_43.75px)] leading-[16.8px] uppercase font-semibold flex items-center justify-center w-[87.7px] h-[17px] min-w-[87.7px]">
          LIMITED-TIME
        </div>
      </div>
      <FrameComponent />
      <img
        className="w-[98px] h-[98px] absolute !m-[0] top-[878.4px] left-[160.5px] rounded-[80px] object-contain"
        loading="lazy"
        alt=""
        src="/paragraphbackground@2x.png"
      />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-14 box-border max-w-full mq450:pb-[23px] mq450:box-border mq1125:pb-9 mq1125:box-border">
        <div className="flex-1 bg-linen-100 flex flex-row items-start justify-start pt-14 px-10 pb-0 box-border max-w-full z-[1] mq450:pt-[23px] mq450:box-border mq1125:pt-9 mq1125:box-border">
          <div className="h-[756px] flex-1 relative rounded-13xl overflow-hidden bg-[url('/public/231e1d8da6024818a1b822e1abe4ff09thumbnail0000000000-smalljpg@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <div className="absolute bottom-[0px] left-[calc(50%_-_680px)] w-full h-full" />
            <img
              className="absolute top-[676px] left-[1280px] rounded-13xl w-14 h-14 overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/sound-nosvg.svg"
            />
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <Background />
      <Background1 />
      <FrameComponent4 />
      <ProductVisual />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-24 box-border max-w-full text-center text-21xl text-gray-100 font-inter mq800:pb-[26px] mq800:box-border mq1125:pb-10 mq1125:box-border mq1350:pb-[62px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-end justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-14 pl-[412px] pr-[411px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[103px] mq800:pr-[102px] mq800:box-border mq1350:pl-[206px] mq1350:pr-[205px] mq1350:box-border">
            <h1 className="m-0 flex-1 relative text-inherit leading-[44px] font-bold font-[inherit] inline-block max-w-full mq450:text-5xl mq450:leading-[26px] mq800:text-13xl mq800:leading-[35px]">
              Brain-Boosting Reviews
            </h1>
          </div>
          <ReviewContent />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[602px] pr-[601px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[150px] mq800:pr-[150px] mq800:box-border mq1350:pl-[301px] mq1350:pr-[300px] mq1350:box-border">
            <button className="cursor-pointer border-gray-100 border-[3px] border-solid py-3 pl-6 pr-[17px] bg-white h-[47.4px] flex-1 rounded-80xl box-border flex flex-row items-start justify-start hover:bg-gainsboro hover:border-dimgray-100 hover:border-[3px] hover:border-solid hover:box-border">
              <div className="relative text-base leading-[16px] uppercase font-semibold font-inter text-dimgray-200 text-center inline-block min-w-[109.9px]">
                Show More
              </div>
            </button>
          </div>
          <HorizontalBorder1 />
        </div>
      </section>
      <ThirstyHeader />
      <SocialHeader />
      <footer className="self-stretch h-[734.3px] relative bg-crimson max-w-full z-[1] text-left text-base text-linen-100 font-inter mq800:h-auto mq800:min-h-[734.2999999999997]">
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[222.9px] object-cover"
          alt=""
          src="/container-5@2x.png"
        />
        <img
          className="absolute top-[465.9px] left-[1006.4px] w-6 h-6"
          alt=""
          src="/item--link.svg"
        />
        <img
          className="absolute top-[465.9px] left-[1046.4px] w-6 h-6 hidden"
          alt=""
          src="/item--link.svg"
        />
        <img
          className="absolute top-[465.9px] left-[1086.4px] w-6 h-6 object-cover hidden"
          alt=""
          src="/item--link@2x.png"
        />
        <img
          className="absolute top-[465.9px] left-[1126.4px] w-6 h-6 hidden"
          alt=""
          src="/item--link.svg"
        />
        <div className="absolute top-[222.9px] left-[0px] w-full h-[511.3px] max-w-full mq800:h-auto mq800:min-h-[511.3000000000002]">
          <img
            className="absolute top-[0px] left-[40px] w-[186px] h-[275.5px] overflow-hidden object-cover"
            alt=""
            src="/social-icon@2x.png"
          />
          <div className="absolute top-[25px] left-[320.4px] leading-[22.4px] uppercase font-semibold flex items-center w-[84.3px] h-[23px] min-w-[84.3px]">
            Shop All
          </div>
          <a className="[text-decoration:none] absolute top-[67.4px] left-[320.4px] leading-[22.4px] uppercase font-semibold text-[inherit] flex items-center w-[94.5px] h-[23px] min-w-[94.5px]">
            New Drop
          </a>
          <div className="absolute top-[109.8px] left-[320.4px] leading-[22.4px] uppercase font-semibold flex items-center w-[163.4px] h-[23px]">
            Find Your Flavor
          </div>
          <div className="absolute top-[152.3px] left-[320.4px] leading-[22.4px] uppercase font-semibold flex items-center w-[141.3px] h-[23px]">
            Build A Bundle
          </div>
          <div className="absolute top-[194.7px] left-[320.4px] leading-[22.4px] uppercase font-semibold flex items-center w-[100.8px] h-[23px] min-w-[100.8px]">
            Gift Cards
          </div>
          <div className="absolute top-[25px] left-[549px] leading-[22.4px] uppercase font-semibold flex items-center w-[160.2px] h-[23px]">{`Subscribe & Save`}</div>
          <div className="absolute top-[67.4px] left-[549px] text-base-9 leading-[22.4px] uppercase font-semibold flex items-center w-[73px] h-[23px] min-w-[73px]">
            Loyalty
          </div>
          <div className="absolute top-[109.8px] left-[549px] leading-[22.4px] uppercase font-semibold flex items-center w-[98.9px] h-[23px] min-w-[98.9px]">
            Our Story
          </div>
          <a className="[text-decoration:none] absolute top-[152.3px] left-[549px] leading-[22.4px] uppercase font-semibold text-[inherit] flex items-center w-[73.2px] h-[23px] min-w-[73.2px]">
            Science
          </a>
          <a className="[text-decoration:none] absolute top-[194.7px] left-[549px] leading-[22.4px] uppercase font-semibold text-[inherit] flex items-center w-[82.1px] h-[23px] min-w-[82.1px]">
            Benefits
          </a>
          <div className="absolute top-[237.1px] left-[549px] leading-[22.4px] uppercase font-semibold flex items-center w-[140.2px] h-[23px]">
            Store Locator
          </div>
          <div className="absolute top-[25px] left-[777.7px] leading-[22.4px] uppercase font-semibold flex items-center w-[106.9px] h-[23px] min-w-[106.9px]">
            Community
          </div>
          <a className="[text-decoration:none] absolute top-[67.4px] left-[777.7px] leading-[22.4px] uppercase font-semibold text-[inherit] flex items-center w-[34.2px] h-[23px] min-w-[34.2px]">
            FAQ
          </a>
          <div className="absolute top-[109.8px] left-[777.7px] leading-[22.4px] uppercase font-semibold flex items-center w-[181.9px] h-[23px]">{`Shipping & Returns`}</div>
          <div className="absolute top-[152.3px] left-[777.7px] leading-[22.4px] uppercase font-semibold flex items-center w-[107.1px] h-[23px] min-w-[107.1px]">
            Contact Us
          </div>
          <h1 className="m-0 absolute top-[13px] left-[1006.4px] text-13xl leading-[35.2px] font-bold font-[inherit] flex items-center w-[373.5px] h-[35.2px] mq450:text-lgi mq450:leading-[21px] mq800:text-[26px] mq800:leading-[28px]">
            Join the flavor fiesta
          </h1>
          <div className="absolute top-[64.2px] left-[1006.4px] leading-[25.6px] flex items-center w-[369.2px] h-[77px]">
            <span className="w-full">
              <p className="m-0">Subscribe for a first look at new products,</p>
              <p className="m-0">upcoming flavors, exclusive deals, and</p>
              <p className="m-0">more fun stuff.</p>
            </span>
          </div>
          <div className="absolute top-[162px] left-[1007.4px] rounded-80xl bg-crimson border-linen-100 border-[3px] border-solid box-border w-[391.6px] h-14 overflow-hidden flex flex-row items-start justify-between py-4 pl-[35px] pr-[30px] whitespace-nowrap gap-5">
            <div className="w-[165.2px] relative uppercase font-semibold flex items-center shrink-0">
              Enter Your Email
            </div>
            <img
              className="mt-[-21px] h-[58px] w-[26px] relative overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/button--subscribe@2x.png"
            />
          </div>
          <HorizontalBorder />
          <BodyRegionCampaignsMess />
        </div>
      </footer>
    </div>
  );
};

export default Body;
