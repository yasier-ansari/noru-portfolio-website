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
        <div className="px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen">
                <div class="pt-24 mx-auto ">
                    <div className=" relative w-[65%] mx-auto h-80 ">
                        <Image
                            src={'/pfpimg.jpeg'}
                            layout="fill"
                            alt="work info"
                            className="rounded-3xl object-cover mx-auto "
                        />
                    </div>
                    <div className="mt-6 flex w-[50%] mx-auto flex-row space-x-4 justify-between">
                        <SiJavascript className="h-[1.5rem] w-[1.5rem]" />
                        <SiTypescript className="h-[1.5rem] w-[1.5rem]" />
                        <IoLogoReact className="h-[1.5rem] w-[1.5rem]" />
                        <SiNextdotjs className="h-[1.5rem] w-[1.5rem]" />
                        <SiTailwindcss className="h-[1.5rem] w-[1.5rem]" />
                        <SiMongodb className="h-[1.5rem] w-[1.5rem]" />
                        <SiSolidity className="h-[1.5rem] w-[1.5rem]" />
                    </div>
                </div>
                <div class="flex flex-col  mx-auto mt-4">
                    <h2 className="font-space font-semibold text-3xl text-center">nKrypt</h2>
                    <p className="mt-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe est
                        ex libero delectus tempore deleniti explicabo, earum aut atque, omnis
                        aperiam nobis dignissimos! Animi necessitatibus reiciendis sapiente illum
                        nostrum.
                    </p>
                    <p class="mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta,
                        sit reiciendis nam dignissimos nesciunt perspiciatis aut, doloremque maiores
                        cupiditate asperiores? Aliquam fugiat odio mollitia nemo modi veritatis
                        repellat repellendus. Rem nulla a voluptatibus nisi provident totam.
                        Repudiandae omnis fugiat laudantium dignissimos. Optio maiores amet,
                        asperiores laboriosam sunt vero repudiandae libero. Maiores eos consequatur
                        itaque numquam voluptas adipisci ipsa voluptatum.
                    </p>
                    <div class="flex justify-between px-10 mt-8 mb-20">
                        <div className="flex space-x-3 items-center">
                            <SiGithub className="w-5 h-5" />
                            <a href="">https://github.com/yasier-ansari</a>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <IoBrowsersOutline className="w-5 h-5" />
                            <a href="">https://github.com/yasier-ansari</a>
                        </div>
                    </div>
                    <div className="relative w-[50%] mx-auto h-52 mb-20  ">
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
