"use client";
import React from "react";

function Card({ children, className = "" }) {
    return (
        <section
            className={[
                " rounded-md border dark:border-gray-700 border-gray-300 bg-card text-card-foreground ",
                "transition-colors max-h-[260px] dark:bg-[#0A0A0A] text-black dark:text-white",
                className,
            ].join(" ")}
        >
            {children}
        </section>
    );
}

function CardHeader({ children, className = "" }) {
    return (
        <header
            className={[
                "flex items-center justify-between px-4 py-3 border-b dark:border-gray-700 border-gray-300  ",
                className,
            ].join(" ")}
        >
            {children}
        </header>
    );
}

function CardTitle({ children, className = "" }) {
    return (
        <h3
            className={["text-sm font-medium  text-black dark:text-white", className].join(
                " "
            )}
        >
            {children}
        </h3>
    );
}

function CardContent({ children, className = "" }) {
    return <div className={["p-4", className].join(" ")}>{children}</div>;
}

function Badge({ children }) {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-gray-700 text-gray-500 bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            {children}
        </span>
    );
}

function ShieldIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            className="h-2 w-2"
            {...props}
        >
            <path
                d="M12 3.5 5 6v5c0 5 3.5 7.5 7 9 3.5-1.5 7-4 7-9V6l-7-2.5Z"
                strokeWidth="1.1"
            />
            <path d="m9 12 2 2 4-4" strokeWidth="1.1" />
        </svg>
    );
}

function FirewallCard() {
    return (
        <Card className="overflow-hidden">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <CardTitle>Firewall</CardTitle>
                    <span className="text-xs text-muted-foreground">24h</span>
                </div>
                <Badge>
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    Enable Bot Protection
                </Badge>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <div className="relative h-44 w-44 md:h-52 md:w-52">
                    {/* Waves */}
                    <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-sky-500/25 animate-[ripple_3.2s_ease-out_infinite]" />
                    <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-sky-500/20 animate-[ripple_3.2s_ease-out_infinite] [animation-delay:0.6s]" />
                    <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-sky-500/15 animate-[ripple_3.2s_ease-out_infinite] [animation-delay:1.2s]" />
                    {/* Center circle with glow */}
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/10 ring-4 ring-sky-500/40 shadow-[0_0_32px_rgba(56,189,248,0.45)]">
                            <ShieldIcon className="text-sky-600 dark:text-sky-400" />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-sky-700 dark:text-sky-300">
                    Firewall is active
                </p>
            </CardContent>
        </Card>
    );
}

function ObservabilityCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <CardTitle>Observability</CardTitle>
                    <span className="text-xs text-muted-foreground">6h</span>
                </div>
                <span className="text-muted-foreground">&rsaquo;</span>
            </CardHeader>
            <CardContent>
                <ul className="grid gap-4">
                    <li className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Edge Requests</span>
                        <span className="text-sm font-medium">0</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Function Invocations
                        </span>
                        <span className="text-sm font-medium">0</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Error Rate</span>
                        <span className="text-sm font-medium">0%</span>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function AnalyticsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <span className="text-muted-foreground">&rsaquo;</span>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            d="M4 16V8m8 8V4m8 12V10"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                    <p className="text-sm text-muted-foreground">
                        Track visitors and page views
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:bg-accent"
                >
                    Enable
                </button>
            </CardContent>
        </Card>
    );
}

export default function Firewall() {
    return (
        <div className="w-full my-[2rem]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <FirewallCard />
                <ObservabilityCard />
                <AnalyticsCard />
            </div>
        </div>
    );
}
