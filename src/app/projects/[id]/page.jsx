import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        <div className="px-6 pt-[8rem] pb-12 bg-white dark:bg-black min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/projects"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                    ← Back to Projects
                </Link>

                <div className="mt-4 bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-gray-700 rounded-md p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            {p.icon ? (
                                <img src={p.icon} alt="tech icon" className="w-8 h-8 object-contain" />
                            ) : null}
                            <h1 className="text-2xl font-semibold text-black dark:text-white">
                                {p.name}
                            </h1>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-3 space-y-1">
                        {p.live_link && (
                            <a
                                href={p.live_link}
                                target="_blank"
                                className="block text-sm text-gray-700 dark:text-gray-300 hover:underline"
                            >
                                {p.live_link.replace(/^https?:\/\//, "")}
                            </a>
                        )}
                        {p.github_link && (
                            <a
                                href={p.github_link}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 bg-[#E6E6E6] dark:bg-gray-800 w-fit rounded-2xl px-2 py-1 hover:underline"
                            >
                                {p.github_link.replace("https://github.com/", "")}
                            </a>
                        )}
                    </div>

                    {/* Image */}
                    {p.image_url ? (
                        <div className="mt-5">
                            <img
                                src={p.image_url}
                                alt={p.name}
                                className="w-full max-h-[360px] object-cover rounded-md border border-gray-200 dark:border-gray-800"
                            />
                        </div>
                    ) : null}

                    {/* Description */}
                    <p className="mt-5 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        {p.description || "No description provided."}
                    </p>
                </div>
            </div>
        </div>
    );
}
