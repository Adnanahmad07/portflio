import Link from "next/link";

export default function NotFound() {
    return (
        <div className="px-6 pt-[8rem] min-h-screen text-center">
            <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
            <p className="text-gray-600 mb-6">We couldn’t find that project.</p>
            <Link href="/projects" className="text-blue-600 hover:underline">
                Back to Projects
            </Link>
        </div>
    );
}
