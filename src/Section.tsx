import { useState, type ReactNode } from "react";

import "./section.css";

export function Section({
    title,
    defaultOpened = false,
    children,
}: {
    title: string;
    defaultOpened?: boolean;
    children: ReactNode;
}) {
    const [opened, setOpened] = useState(defaultOpened);

    return (
        <div className={`section ${opened ? "opened" : "closed"}`}>
            <div className="section-top-row" onClick={() => setOpened(!opened)}>
                <div className="section-icon">
                    <div className="section-icon-inner" />
                </div>
                <div
                    className="section-title"
                    
                >
                    {title}
                </div>
            </div>

            <div className="section-content-wrapper">
                <div className="section-content">{children}</div>
            </div>
        </div>
    );
}

export function TextSection({ title, text }: { title: string; text: string }) {
    return (
        <Section title={title}>
            <p>{text}</p>
        </Section>
    );
}
