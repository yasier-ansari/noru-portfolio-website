import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import {
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiSolidity,
    SiGithub,
} from 'react-icons/si';

export default function Workinfo() {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-24 mx-auto ">
                    <div className=" relative w-[65%] mx-auto h-40 md:h-60 lg:h-80 ">
                        <Image
                            src={'/pfpimg.jpeg'}
                            fill
                            alt="work info"
                            className="rounded-3xl object-cover mx-auto "
                        />
                    </div>
                    <div className="mt-6 flex w-[50%] mx-auto flex-row space-x-4 justify-between">
                        <SiJavascript className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <SiTypescript className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <IoLogoReact className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <SiNextdotjs className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <SiMongodb className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                        <SiSolidity className="  w-3 h-3 md:h-4   md:w-4 rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col tracking-wide mx-auto mt-4">
                    <h2 className="font-space font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        nKrypt
                    </h2>
                    <p className="mt-8 text-xs leading-4 sm:leading-4 md:leading-5 sm:text-sm md:text-md lg:text-lg mx-auto font-[450]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe est
                        ex libero delectus tempore deleniti explicabo, earum aut atque, omnis
                        aperiam nobis dignissimos! Animi necessitatibus reiciendis sapiente illum
                        nostrum.
                    </p>
                    <p className="mt-8 text-xs leading-4 sm:leading-4 md:leading-5 sm:text-sm md:text-md lg:text-lg mx-auto font-[450]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta,
                        sit reiciendis nam dignissimos nesciunt perspiciatis aut, doloremque maiores
                        cupiditate asperiores? Aliquam fugiat odio mollitia nemo modi veritatis
                        repellat repellendus. Rem nulla a voluptatibus nisi provident totam.
                        Repudiandae omnis fugiat laudantium dignissimos. Optio maiores amet,
                        asperiores laboriosam sunt vero repudiandae libero. Maiores eos consequatur
                        itaque numquam voluptas adipisci ipsa voluptatum.
                    </p>
                    <div className="grid grid-cols md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="flex mx-auto space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p href="https://github.com/yasier-ansari">source code </p>
                        </div>
                        <div className="flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p href="https://github.com/yasier-ansari">live website </p>
                        </div>
                    </div>
                    <div className="relative w-[60%] md:w-[55%] xl:w-[50%] mx-auto h-28 md:h-40 xl:h-52 -mb-6 md:mb-0 xl:mb-12  ">
                        <Image
                            src={'/blob.gif'}
                            fill
                            className="object-cover rounded-3xl "
                            alt="work-info-gif"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
