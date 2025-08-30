export default function Loading() {
    return (
        <div className="px-6 pt-[8rem] min-h-screen">
            <div className="max-w-4xl mx-auto animate-pulse">
                <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
        </div>
    );
}
