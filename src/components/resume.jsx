
export default function Resume() {
    return (
        <>
            <div className="flex flex-row gap-5 items-center">
                <h1 className="text-[40px] font-bold">RESUME</h1>
                <hr className="w-[252px] h-[3px] bg-gradient-to-r from-[#FE9119] to-[#ED250A]" />
            </div>

            <div className="flex flex-row flex-wrap w-auto h-auto gap-14">
                {/* Education */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row  text-[27px] font-semibold gap-3 items-center">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.15625 10.6821L13.304 5.82812L25.4517 10.6821L13.304 15.5361L1.15625 10.6821Z" stroke="url(#paint0_linear_157_651)" strokeWidth="2.31143" strokeLinejoin="round" />
                            <path d="M25.4492 10.7461V16.0757M6.67578 13.2396V20.4293C6.67578 20.4293 9.45528 23.1643 13.3015 23.1643C17.1483 23.1643 19.9278 20.4293 19.9278 20.4293V13.2396" stroke="url(#paint1_linear_157_651)" strokeWidth="2.31143" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_157_651" x1="13.304" y1="5.82812" x2="13.304" y2="15.5361" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9C1B" />
                                    <stop offset="1" stopColor="#EC1B09" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_157_651" x1="16.0625" y1="10.7461" x2="16.0625" y2="23.1643" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9C1B" />
                                    <stop offset="1" stopColor="#EC1B09" />
                                </linearGradient>
                            </defs>
                        </svg>

                        Education
                    </div>

                    <div className="w-[288px] h-[115px] px-3 rounded-[9px] flex flex-col justify-center bg-[#FFE3BF] ">
                        <span className="text-gray-500">
                            November 2023 - April 2024
                        </span>

                        <span className="font-semibold">
                            FullStack Javascript Immersive
                        </span>

                        <span>
                            Hacktiv8
                        </span>
                    </div>

                    <div className="w-[288px] h-[115px] px-3 rounded-[9px] flex flex-col justify-center bg-[#FFEED9] ">
                        <span className="text-gray-500">
                            2019-2023
                        </span>

                        <span className="font-semibold">
                            Bachelor of Education <span className="font-normal text-[14px] text-gray-500">| GPA 3.71/4.00</span>
                        </span>

                        <span>
                            Intitut Agama Islam Persis - Bandung
                        </span>
                    </div>

                </div>

                {/* Experience */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row  text-[27px] font-semibold gap-3 items-center">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2283 9.88068V7.56924C10.2283 6.95621 10.4719 6.36829 10.9053 5.93482C11.3388 5.50134 11.9267 5.25781 12.5398 5.25781H17.1626C17.7757 5.25781 18.3636 5.50134 18.7971 5.93482C19.2305 6.36829 19.4741 6.95621 19.4741 7.56924V9.88068M5.60547 16.815L9.24597 17.7245C12.9262 18.6444 16.7762 18.6444 20.4564 17.7245L24.0969 16.815" stroke="url(#paint0_linear_157_646)" strokeWidth="2.31143" strokeLinecap="round" />
                            <path d="M5.60547 12.1923C5.60547 11.5793 5.84899 10.9913 6.28247 10.5579C6.71595 10.1244 7.30387 9.88086 7.9169 9.88086H21.7855C22.3985 9.88086 22.9864 10.1244 23.4199 10.5579C23.8534 10.9913 24.0969 11.5793 24.0969 12.1923V21.438C24.0969 22.051 23.8534 22.639 23.4199 23.0724C22.9864 23.5059 22.3985 23.7495 21.7855 23.7495H7.9169C7.30387 23.7495 6.71595 23.5059 6.28247 23.0724C5.84899 22.639 5.60547 22.051 5.60547 21.438V12.1923Z" stroke="url(#paint1_linear_157_646)" strokeWidth="2.31143" strokeLinejoin="round" />
                            <path d="M14.8471 15.6571C15.4854 15.6571 16.0028 15.1397 16.0028 14.5014C16.0028 13.8631 15.4854 13.3457 14.8471 13.3457C14.2088 13.3457 13.6914 13.8631 13.6914 14.5014C13.6914 15.1397 14.2088 15.6571 14.8471 15.6571Z" fill="url(#paint2_linear_157_646)" />
                            <defs>
                                <linearGradient id="paint0_linear_157_646" x1="14.8512" y1="5.25781" x2="14.8512" y2="18.4144" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9C1A" />
                                    <stop offset="1" stopColor="#E80505" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_157_646" x1="14.8512" y1="9.88086" x2="14.8512" y2="23.7495" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9C1A" />
                                    <stop offset="1" stopColor="#E80505" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_157_646" x1="14.8471" y1="13.3457" x2="14.8471" y2="15.6571" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9C1A" />
                                    <stop offset="1" stopColor="#E80505" />
                                </linearGradient>
                            </defs>
                        </svg>

                        Experience
                    </div>

                    <div className="w-[288px] h-[115px] px-3 rounded-[9px] flex flex-col justify-center bg-[#FFEED9] ">
                        <span className="text-gray-500">
                            Jul 2024 - Oct 2024
                        </span>

                        <span className="font-semibold">
                            Programmer
                        </span>

                        <span>
                            PT Talenta Sinergi Group
                        </span>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-5 -mt-5">
                    <div className="flex flex-row  text-[27px] font-semibold gap-3 items-center">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill="#E80505" />
                        </svg>
                        Key Skills
                    </div>

                    <ul className="skills-list gap-3 cursor-default">
                        <li>JavaScript & TypeScript</li>
                        <li>React & Next.js</li>
                        <li>Node.js & Express</li>
                        <li>MongoDB & PostgreSQL</li>
                        <li>RESTful APIs & GraphQL</li>
                        <li>Git & Version Control</li>
                    </ul>

                </div>

            </div>
        </>
    )
}