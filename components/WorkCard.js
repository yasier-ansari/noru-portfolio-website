import Image from 'next/image';
import { IoLogoReact } from 'react-icons/io5';
import {
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiSolidity,
    SiFirebase,
    SiJava,
    SiAndroid,
    SiPython,
    SiPytorch,
    SiCss3,
    SiKotlin,
    SiRazorpay,
} from 'react-icons/si';
import Link from 'next/link';
import { RxBorderDotted } from 'react-icons/rx';
import { CldImage } from "next-cloudinary";
const WorkCard = (props) => {
    return (
        <div className="flex h-24 max-w-2xl cursor-pointer sm:h-28 md:h-32 lg:h-40 xl:h-48 bg-gradient-to-tr  dark:from-[#eefcff20] dark:via-[#faf5ff30] dark:to-[#fff2ec15] from-[#eefcff] via-[#faf5ff] to-[#fff2ec] lg:bg-gradient-to-tr lg:hover:dark:from-[#eefcff20] lg:hover:dark:via-[#faf5ff30] lg:hover:dark:to-[#fff2ec15]  p-4 w-full overflow-hidden rounded-lg md:rounded-2xl lg:rounded-3xl  ">
            <Link
                href={`${props.link}`}
                className="relative shadow-md border border-purple-200 drop-shadow-xl basis-[35%] md:basis-[40%] rounded-lg md:rounded-2xl lg:rounded-3xl overflow-hidden "
            >
                <CldImage
                    src={props.img}
                    fill
                    sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                    alt={props.alt}
                    className="object-cover select-none rounded-lg md:rounded-2xl lg:rounded-3xl hover:scale-[1.1] transition-all duration-300 ease-linear "
                />
            </Link>
            <div className="grid grid-cols gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 pl-4 md:pl-6 lg:pl-8 py-2 md:py-3 lg:py-4 basis-[60%]">
                <div className="flex justify-between items-center">
                    <Link
                        href={`${props.link}`}
                        className="font-deca tracking-wide font-bold text-[0.6rem] sm:text-sm md:text-md lg:text-lg xl:text-xl "
                    >
                        {props.title}
                    </Link>
                    <div className="flex flex-row space-x-1 md:space-x-2 justify-between">
                        {/* <SiJavascript className="h-4 w-4" />
                        <SiTypescript className="h-4 w-4" />
                        <IoLogoReact className="h-4 w-4" />
                        <SiNextdotjs className="h-4 w-4" />
                        <SiTailwindcss className="h-4 w-4" />
                        <SiMongodb className="h-4 w-4" />
                        <SiSolidity className="h-4 w-4" /> */}
                        {props.arr[0] && (
                            <SiJavascript className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[1] && (
                            <SiTypescript className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[2] && (
                            <IoLogoReact className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[3] && (
                            <SiNextdotjs className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[4] && (
                            <SiTailwindcss className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[5] && (
                            <SiMongodb className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[6] && (
                            <SiSolidity className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[7] && (
                            <SiFirebase className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[8] && <SiJava className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />}
                        {props.arr[9] && (
                            <SiAndroid className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        )}
                        {props.arr[10] && (
                            <SiPython className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                        {props.arr[11] && (
                            <SiPytorch className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                        {props.arr[12] && (
                            <SiCss3 className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                        {props.arr[13] && (
                            <RxBorderDotted className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                        {props.arr[14] && (
                            <SiKotlin className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                        {props.arr[15] && (
                            <SiRazorpay className="w-2 h-2 sm:w-3 sm:h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 " />
                        )}
                    </div>
                </div>
                <div className="font-semibold cursor-text text-[0.5rem] sm:text-xs md:text-sm lg:text-[0.9rem] ">
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
