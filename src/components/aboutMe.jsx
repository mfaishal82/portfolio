
export default function AboutMe() {
    return (
        <>
            <div className="flex flex-row gap-5 items-center">
                <h1 className="text-[40px] font-bold">ABOUT ME</h1>
                <hr className="w-[252px] h-[3px] bg-gradient-to-r from-[#FE9119] to-[#ED250A]" />
            </div>

            <div className="mt-5">
                Hello! I'm Muhammad Faisal, a Fullstack Developer. My journey into software development began out of sheer curiosity, and I quickly realized that this is my true calling. The process of learning new technologies has not only equipped me with technical skills but also fostered a growth mindset that I cherish.
            </div>

            <div className="text-[32px] font-medium mt-10">
                What I do!
            </div>

            <div className="flex flex-row flex-wrap justify-around space-y-10 mt-5 mb-5">
                <div className="w-[333px] h-[185px] py-2 px-5  text-[20px] font-semibold bg-[#FFEBD1] rounded-[20px]">
                    <div className="flex flex-row items-center gap-2">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill="#E80505" />
                        </svg>
                        Web Development
                    </div>

                    <div className="text-[14px] font-thin text-gray-600">
                        As a programmer, I'm particularly drawn to the versatility and efficiency of NEXT.js. I'm constantly excited to embark on new ventures that utilize NEXT.js and explore innovative approaches to developing rapid, expandable, and intuitive applications.
                    </div>
                </div>

                <div className="w-[333px] h-[185px] py-2 px-5  text-[20px] font-semibold bg-[#F2F7FC] rounded-[20px]">
                    <div className="flex flex-row items-center gap-2">
                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H10C10.5304 20.5 11.0391 20.2893 11.4142 19.9142C11.7893 19.5391 12 19.0304 12 18.5V2.5C12 1.96957 11.7893 1.46086 11.4142 1.08579C11.0391 0.710714 10.5304 0.5 10 0.5ZM7 19.5H5V18.5H7V19.5ZM10 17.5H2V3.5H10V17.5Z" fill="url(#paint0_linear_207_10)" />
                            <defs>
                                <linearGradient id="paint0_linear_207_10" x1="6" y1="0.5" x2="6" y2="20.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9A1A" />
                                    <stop offset="1" stopColor="#EC1C09" />
                                </linearGradient>
                            </defs>
                        </svg>
                        React-Native Development
                    </div>

                    <div className="text-[14px] font-thin text-gray-600">
                        As a mobile developer, I'm particularly drawn to the cross-platform capabilities of React Native. I'm constantly excited to explore new projects that harness React Native's potential and discover innovative approaches to building efficient, responsive, and user-centric mobile applications.
                    </div>
                </div>

            </div>
        </>
    )
}