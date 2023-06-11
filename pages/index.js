import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';
import Experience from '../components/Experience';
import { useTheme } from 'next-themes';
import Main from '../public/image.png'
import { NextSeo } from "next-seo";
import seoConfig from "../utils/seoConfig";
export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <NextSeo {...seoConfig.default} />
            <div className="  lg:min-h-screen xs:px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
                <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
                    <Blob />
                    <div className=" flex flex-col justify-center  lg:flex-row md:pt-12 lg:space-x-20 items-center lg:justify-between">
                        <div className="flex flex-col md:-mt-12 lg:basis-[50%] space-y-12 ">
                            <div className="flex mt-20  -mb-3 -space-x-0 items-end justify-center lg:justify-start">
                                <h2 className="font-space  animate-text bg-gradient-to-r selection:text-gray-500 dark:selection:text-white/80 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                                    yasier_{' '}
                                </h2>
                                <p className="wave text-2xl select-none sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl origin-bottom-right " >
                                    👋🏽
                                </p>
                            </div>
                            <p className="mt-12 px-10 xs:px-0 text-[0.9rem] xs:text-base md:text-[1.1rem] lg:text-lg xl:text-xl tracking-[0.02rem] max-w-lg ">
                                web developer,‎ <span className="font-semibold text-blue-400 ">G</span>
                                <span className="font-semibold text-red-400">o</span>
                                <span className="font-semibold text-yellow-500">o</span>
                                <span className="font-semibold text-blue-400">g</span>
                                <span className="font-semibold text-green-400">l</span>
                                <span className="font-semibold text-red-400">e</span> ‎DSC Web Co-Lead,
                                UI/UX designer and a lifelong learner based in{' '}
                                <span className="font-semibold select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded-full px-2 py-[0.05rem] ">
                                    ‎India‎
                                </span>
                                with a love for all things colorful & creative. When not coding,
                                😽 cats and 📖 books are my escape plan.
                            </p>
                        </div>
                        <Image
                            priority
                            src={Main}
                            width="600"
                            height="400"
                            alt='main image'
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" w-60 h-60 mt-12 md:mt-20 select-none lg:mt-0 animate-heroBlob dark:border-white/60 border-black/30 border-[5px] md:w-80 md:h-80 lg:w-[20rem] lg:h-[20rem] xl:w-[21rem] xl:h-[21rem] "
                        />
                    </div>
                    <div className="md:flex relative mx-auto justify-center items-center w-12 hidden md:my-16 lg:mt-0  ">
                        <div
                            onClick={() => {
                                window.scrollTo(0, 520);
                            }}
                        >
                            <div id="wrapper-inner">
                                <div id="scroll-down">
                                    <span className="arrow-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Experience />
                <div className="mt-28 mx-auto ">
                    <Contact />
                </div>
            </div>
        </>
    );
}
