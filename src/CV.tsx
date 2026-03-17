import { CVSection, JobInfo, TimeLabel } from "./CVSection";

import "./cvmain.css";

export function CV() {
    return (
        <div className="cv-main-wrapper">
            <div className="cv-title">
                <div>
                    <b>Рамазан Аскар Асылбекулы</b>
                </div>
                <div>
                    <b>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                        >
                            <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                        </svg>
                        +7 (707) 507 00 29
                    </b>
                </div>
            </div>
            <div className="cv-main">
                <CVSection title="Специализация">
                    <p>Full Stack разработчик со стажем 3 года</p>
                </CVSection>
                <CVSection title="Опыт работы">
                    <JobInfo
                        title="Front End Developer"
                        company="01 Studio Inc"
                        time={{ start: "07.2023", end: "01.2024" }}
                        items={[
                            "Занимался рефакторингом legacy кода на нативном JavaScript и TypeScript.",
                            "Внедрял RESTful сервисы для расширения функционала.",
                            "Оптимизировал работу с высоконагруженным WebSocket.",
                        ]}
                    />
                    <JobInfo
                        title="Full Stack Developer"
                        company="01 Studio Inc"
                        time={{ start: "01.2024", end: "02.2025" }}
                        items={[
                            "Перестраивал архитектуру сервера для возможности использования многопоточного и асинхронного кода.",
                            "Поддерживал высоконагруженный HTTP сервер (Spring) и WebSocket сервер (Netty).",
                            "Внедрял внешние динамические библиотеки.",
                            "Разворачивал сервера на PHP для создания микросервисов и повышения отказоустойчивости.",
                        ]}
                    />
                </CVSection>
                <CVSection title="Образование">
                    <TimeLabel label="2020-2024" />
                    <p>
                        Высшее образование в области информационных технологий
                    </p>
                    <p>Факультет компьютерных систем</p>
                    <p>
                        <b>КазАТИУ</b>
                    </p>
                </CVSection>
                <CVSection title="Навыки">
                    <h3>
                        <b>Профессиональные навыки</b>
                    </h3>
                    <p>
                        Java, SpringBoot, JavaScript, HTML, CSS, TypeScript,
                        PHP, Python, Node.js, Git, React, Vite, Docker
                    </p>
                    <h3>
                        <b>Знание языков</b>
                    </h3>
                    <p>
                        Русский – В совершенстве
                        <br />
                        Английский - B2 – средний
                    </p>
                </CVSection>
            </div>
        </div>
    );
}
