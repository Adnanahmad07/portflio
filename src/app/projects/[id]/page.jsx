import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { PiWaveformBold } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi"
import Fiarwall from '../../minicomponents/Fiarwall.jsx'
import Pdetails from '../../minicomponents/Pdetails.jsx'




export default async function ProjectDetail({ params }) {
    const { id } = params;

    let p;
    try {
        const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [id]);
        if (rows.length === 0) notFound();
        p = rows[0];
    } catch (e) {
        console.error("DB error in detail page:", e);
        notFound();
    }

    return (
        <div className="px-3 pt-[8rem] pb-12 bg-white dark:bg-black min-h-screen ">


            <div className=" border-b dark:border-gray-700 px-3">
                <div className="md:flex justify-between items-center  py-[2rem] max-w-7xl mx-auto">
                    <h3 className="text-black dark:text-white text-2xl font-extrabold ">{p.name}</h3>
                    <div className="flex gap-4  mt-2 md:mt-0 text-black">
                        <button className="border border-gray-400 dark:border-[#242424] py-2 text-sm px-5 rounded-md flex justify-center items-center gap-2 dark:text-white  ">
                            <FaGithub className="text-gray-700 dark:text-gray-300" />
                            <a
                                href={p.github_link}
                            >
                                Repository
                            </a>
                        </button>
                        <button className="hidden  md:block border border-gray-400 dark:border-[#242424] py-2 text-sm px-5 rounded-md dark:text-white  ">Vercel</button>
                        <button className="border border-gray-400 dark:border-[#242424] py-2 text-sm px-5 rounded-md  dark:text-white ">
                            Visit
                        </button>
                        <button className="bg-black text-white border border-gray-400 dark:border-[#242424] py-2 text-sm px-5 rounded-md  hidden md:block dark:bg-white dark:text-black">
                            <Link
                                href="/projects"
                                className=" md:block"

                            >
                                ← Back to Projects
                            </Link>

                        </button>


                    </div>
                </div>
            </div>








            <div className="  px-3">
                <div className="flex justify-between items-center  py-[1rem] max-w-7xl mx-auto">
                    <h3 className="text-black dark:text-white text-2xl font-semibold ">Production Deployment</h3>
                    <div className="flex gap-4 text-black">
                        <button className="border border-gray-400 dark:border-[#242424] py-1 text-sm px-3 rounded-md   hidden md:block dark:text-white">

                            Build Logs

                        </button>
                        <button className="border border-gray-400 dark:border-[#242424] py-1 text-sm px-3 rounded-md   hidden md:block dark:text-white">Runtime Logs</button>
                        <button className="border border-gray-400 dark:border-[#242424] py-1 text-sm px-3 rounded-md   hidden md:block dark:text-white">

                            Instant Rollback
                        </button>



                    </div>
                </div>
            </div>






            <div className="max-w-7xl mx-auto">
                <div className="mt-4 bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-gray-700 rounded-md p-6 flex flex-col md:flex-row gap-4">

                    <div>
                        {p.image_url ? (
                            <div className="">
                                <img
                                    src={p.image_url}
                                    alt={p.name}
                                    className="w-full max-h-[360px] md:min-w-[400px] object-cover rounded-md border border-gray-200 dark:border-gray-800"
                                />
                            </div>
                        ) : null}

                    </div>

                    <div className=" w-full flex flex-col gap-y-4">

                        <div className="w-full  flex justify-between items-center">
                            <div >
                                <h4 className="text-gray-600 text-sm pb-1">Deployment</h4>
                                <p className="text-sm text-bold text-black dark:text-white">portflio-1r8b2342e-adandahmad07s-pojects.vercel.app</p></div>


                            <PiWaveformBold className="text-gray-600 dark:text-gray-400 text-xl" />
                        </div>

                        <div>
                            <h5 className="text-gray-600 text-sm pb-1">Domains</h5>
                            <a
                                href={p.live_link}
                                className="text-blue-600 flex items-center gap-1"
                            >
                                {p.live_link.replace(/^https?:\/\//, "")}
                                <span><FiExternalLink /> </span>
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <div>
                                <h4 className="text-gray-600 text-sm pb-1">Status</h4>
                                <p className="text-sm text-bold text-black dark:text-white">Ready</p>
                            </div>
                            <div>
                                <h4 className="text-gray-600 text-sm pb-1">Created</h4>
                                <p className="text-sm text-bold text-black dark:text-white">06/11/2023</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-600 text-sm pb-1">Source</h4>
                            <p className="text-sm text-bold text-black dark:text-white">
                                main</p>
                            <p className="text-sm text-bold text-black dark:text-white">741c856</p>
                        </div>


                    </div>



                </div>
                <Fiarwall />
                <Pdetails />
            </div>

        </div>
    );
}
