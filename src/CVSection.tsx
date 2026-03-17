import { type ReactNode } from "react";

export interface TimeLabelInfo{
    start: string;
    end: string;
}

export interface JobInfoType{
    title: string;
    company: string;
    time: TimeLabelInfo | string;
    items: string[];
}

function timeLabelAsString(time: TimeLabelInfo | string): string {
    if(isTimeLabelInfo(time)){
        return `${time.start} - ${time.end}`;
    }
    return time as string;
}


function isTimeLabelInfo(obj: any): obj is TimeLabelInfo {
    return obj && typeof obj.start === "string" && typeof obj.end === "string";
}

export function CVSection({title, children}: {title: string, children: ReactNode}) {
    return (
        <div className="cv-section">
            <h2 className="cv-section-title">{title}</h2>
            <div className="cv-section-content">
                {children}
            </div>
        </div>
    )
}

export function TimeLabel({label}: {label: string}) {
    return (
        <div className="time-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/></svg>
            <div className="time-label-text">{label}</div>
        </div>
    )
}

export function DefaultList({items} : {items: string[]}){
    return (
        <ul className="default-list">
            {items.map((item, index) => (
                <li key={index} className="default-list-item">{item}</li>
            ))}
        </ul>
    )
}

export function JobInfo({title, company, time, items}: JobInfoType) {
    return (
        <div className="job-info">
            <h3 className="job-info-title">{title}</h3>
            <div className="job-info-company">{company}</div>
            <TimeLabel label={timeLabelAsString(time)} />
            <div className="job-info-items">
                <DefaultList items={items} />
            </div>
        </div>
    )
}
