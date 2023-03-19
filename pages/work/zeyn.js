import Head from 'next/head';
import Image from 'next/image';
import { IoBrowsersOutline } from 'react-icons/io5';
import { SiJava, SiGithub, SiKotlin, SiRazorpay, SiFirebase } from 'react-icons/si';
import { CldImage } from "next-cloudinary";

const Zeyn = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl ">
            <Head>
                <title>eComm ✨noru </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[17rem] ">
                        <CldImage
                            src={'portfolio/zeyn-main_rlkyvj'}
                            fill
                            // placeholder="blur"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            alt="zeyn info"
                            className="rounded-2xl mx-auto border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 dark:text-purple-300 text-purple-800 flex w-[50%] mx-auto flex-row justify-center space-x-16 md:space-x-20">
                        <SiKotlin className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiJava className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiRazorpay className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiFirebase className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Zeyn e-Commerce
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white">
                        Our year-wise Project, the ultimate e-commerce solution for native android.
                        Built using the latest Java and Kotlin programming languages and the Android
                        SDK, our app is designed to provide a seamless and efficient shopping
                        experience for our customers.
                    </p>
                    <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 justify-center gap-y-12 md:gap-x-12 lg:gap-x-20 items-center mx-auto">
                        <div className="w-40 rounded-[3rem] relative h-80 ">
                            <CldImage
                                src={'portfolio/zeyn-1_ytsuwh'}
                                alt=""
                                // placeholder="blur"
                                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                                fill
                                className="rounded-[1.3rem] border-white border-2 shadow-md shadow-[#696969] "
                            />
                        </div>
                        <div className="w-40 rounded-[3rem] relative h-80 ">
                            <CldImage
                                src={'portfolio/zeyn-3_nhfixn'}
                                alt=""
                                // placeholder="blur"
                                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                                fill
                                className="rounded-[1.3rem] border-white border-2 shadow-md shadow-[#696969] "
                            />
                        </div>
                        <div className="w-40 rounded-[3rem] relative h-80 ">
                            <CldImage
                                src={'portfolio/zeyn-2_h6oieu'}
                                alt=""
                                // placeholder="blur"
                                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                                fill
                                className="rounded-[1.3rem] border-white border-2 shadow-md shadow-[#696969] "
                            />
                        </div>
                    </div>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white">
                        One of the key features of ZEYN Ecom is its lightning fast loading times,
                        thanks to the use of Firebase database. This means that customers can browse
                        and purchase products in real-time, without any lag or delay.Our app also
                        boasts a minimal UI design, which provides the perfect environment to
                        showcase the excellent products offered by our company. For better online
                        visibility, we even made ourself a website for ZEYN e-Commerce.
                    </p>
                    <div className="grid grid-cols font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-16 mb-10">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/drocgoesongit/Ecom"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                live website{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Zeyn;
