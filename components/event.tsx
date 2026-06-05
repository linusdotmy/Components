"use client";

import { useState } from "react";

export function Open(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L17.5858 5H14C13.4477 5 13 4.55228 13 4ZM4 13C4.55228 13 5 13.4477 5 14V17.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L6.41421 19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14C3 13.4477 3.44772 13 4 13Z" fill="currentColor"></path></svg>
    );
}
import { Button } from "@/components/ui/button";
import type { EventProps } from "@/types";

function relativeTime(iso: string): string {
    const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (s < 60) return `${s}s`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}hr`;
    return `${Math.floor(h / 24)}d`;
}

export default function Event({ title, icon, time, content, fields, events, data, actions, category }: EventProps) {
    const [isOpen, setIsOpen] = useState(false);
    const hasData = data !== null && data !== undefined;
    const hasDrawerContent = Boolean(content || actions?.length || hasData || fields?.length || events?.length);

    return (
        <div data-slot="card" className="rounded-lg bg-card p-2">
            <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-xl">
                    {icon}
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-2">
                    <p className="shrink-0 text-sm font-medium leading-none text-muted-foreground">
                        {time}
                    </p>

                    <p className="truncate text-sm font-semibold leading-snug text-foreground">
                        {title}
                    </p>

                    {category && (
                        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground capitalize hidden sm:inline-block">
                            {category}
                        </span>
                    )}
                </div>

                {hasDrawerContent && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Collapse event drawer" : "Expand event drawer"}
                        className="shrink-0 bg-transparent transition-transform duration-300 aria-expanded:rotate-180"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Open />
                    </Button>
                )}
            </div>

            {hasDrawerContent && (
                <div
                    className={`grid pl-[3.25rem] transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out ${isOpen ? "mt-1 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
                    aria-hidden={!isOpen}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-3 pb-1">
                            {content && (
                                <div className="text-sm leading-relaxed text-muted-foreground">
                                    {content}
                                </div>
                            )}

                            {fields && (
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    {fields.map((field, index) => (
                                        <div key={index} className="flex flex-col">
                                            <span className="text-sm text-muted-foreground">
                                                {field.name}
                                            </span>
                                            <span className="text-sm font-medium text-foreground">
                                                {field.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {events && (
                                <div className="relative flex flex-col gap-5 pt-2 ml-1">
                                    <div className="absolute left-[15px] top-2 bottom-2 border-l-2 border-dashed border-border z-0" />

                                    {events.map((event, index) => (
                                        <div key={index} className="relative z-10 flex items-center gap-4">

                                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted ring-4 ring-card text-xs">
                                                {event.icon}
                                            </div>

                                            <div className="min-w-0 flex-1 flex flex-wrap items-center gap-2">
                                                <p className="text-sm font-medium leading-none text-muted-foreground">
                                                    {relativeTime(event.time)}
                                                </p>
                                                <p className="text-sm leading-relaxed text-foreground">
                                                    {event.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {hasData && (
                                <div className="relative rounded-md">
                                    <pre className="max-h-48 overflow-auto p-2 pr-16 text-sm bg-secondary rounded-md text-foreground">
                                        {JSON.stringify(data, null, 2)}
                                    </pre>
                                </div>
                            )}

                            {actions && (
                                <div className="flex flex-nowrap gap-2 overflow-x-auto">
                                    {actions.map((action, index) => (
                                        <Button
                                            key={index}
                                            asChild
                                            variant={action.type === "primary" ? "default" : "secondary"}
                                            size="sm"
                                            className="shrink-0"
                                        >
                                            <a href={action.url} target="_blank" rel="noreferrer">
                                                {action.label}
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
