import Head from 'next/head';
import Image from 'next/image';
import { SiPython, SiPytorch, SiGithub } from 'react-icons/si';
import { CldImage } from "next-cloudinary";

const Chatbot = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title>ai bot ✨noru </title>
            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[21rem] ">
                        <CldImage
                            src={'portfolio/chat-main_xgrmyl'}
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            fill
                            loading="lazy"
                            alt="work info"
                            className="rounded-2xl mx-auto object-cover border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 dark:text-purple-300 text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiPython className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiPytorch className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Munna AI chatbot
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        For the Smart India Hackathon, better known as SIH, we as a team of 5 chose
                        the chatbot and enquiry domain to do our work. We were tasked to make a
                        chatbot for helping the enquiry and detail team in the collective government
                        sectors
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        Our team began by researching and analyzing the current chatbot systems used
                        in government sectors and identifying areas where improvements could be
                        made. We then started designing and developing the chatbot, keeping in mind
                        the specific needs of the enquiry and detail team. We used natural language
                        processing (NLP) and machine learning techniques such as Feed Forward Neural
                        Network for singly linked mesh. to enable the chatbot to understand and
                        respond to user queries in an accurate and efficient manner, we also used
                        python library such as pyTorch and Tensorflow. The chatbot was also
                        integrated with a database of frequently asked questions and relevant
                        government policies, to provide users with accurate and up-to-date
                        information.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        Our team presented the chatbot at the Smart India Hackathon and received
                        positive feedback from the judges and that led to us being the top 5 teams
                        in intra college level.
                    </p>
                    <div className="mt-8 mb-16 hover:text-purple-400 flex font-bold  justify-center mx-auto space-x-2 md:space-x-3 items-center">
                        <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        <a
                            href="https://github.com/yasier-ansari/ai-chatbot"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            source code{' '}
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Chatbot;
