import * as React from "react";

export interface ILPHeroProps {
  bgVideo: string;
}

export default function LPHero(props: ILPHeroProps) {
  const { bgVideo } = props;

  return (
    <section>
      <div className="hero min-h-screen bg-base-200" data-theme="night">
        <video
          className="top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source src={bgVideo} type="video/mp4"></source>
        </video>
        <div className="hero-content flex-col lg:flex-row-reverse lg:mw-[1440px]">
          <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  src="https://i.postimg.cc/DZRftwxp/yaba.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                  width={325}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl tracking-wide lg:text-8xl font-bold flex justify-center lg:justify-end">
              yaba.
            </h1>
            <h2 className="text-accent text-3xl lg:text-5xl font-bold flex justify-center lg:justify-end">
              save more, <br />
              feel better.
            </h2>
            <div className="btn-group mt-4 justify-center lg:justify-end">
              <a className="link no-underline" href="/account">
                <button className="btn btn-primary lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md">
                  Get Started
                </button>
              </a>
              <a className="link no-underline" href="/overview">
                <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                  View Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div
            className="flex flex-col w-full border-opacity-50"
            data-theme="night"
          >
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <h1 className="text-5xl tracking-wide lg:text-3xl font-bold flex justify-center lg:justify-end">
                explore
              </h1>
            </div>
            <div className="divider">
              <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                <h1 className="text-5xl tracking-wide lg:text-4xl font-bold flex justify-center lg:justify-end">
                  &#8595;
                </h1>
              </button>
            </div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <h1 className="text-5xl tracking-wide lg:text-3xl font-bold flex justify-center lg:justify-end">
                experience.
              </h1>
            </div>
          </div> */}
    </section>
  );
}