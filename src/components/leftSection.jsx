

export default function LeftSection() {

    return (
        <section className="bg-white rounded-[20px] h-[616px] w-1/3 max-[1153px]:w-full flex flex-col items-center gap-3 pb-7">
            {/* Photo Profile */}
            <div className="hs-tooltip inline-block -mt-20">
                <div className="hs-tooltip-toggle relative inline-block">
                    <img className="inline-block size-[150px] rounded-[20px]" src='PP.png' alt="Avatar" />
                    <span className="absolute -bottom-1 -end-1 block size-5 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-500"></span>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700" role="tooltip">
                        Muhammad Faisal is open to work
                    </div>
                </div>
            </div>

            {/* Name & Job position */}
            <h1 className="font-bold text-[24px]">Muhammad Faisal</h1>
            <h6 className="text-gray-400">FullStack Developer</h6>

            {/* Social Media */}
            <div className='flex flex-row gap-3'>
                <a href={import.meta.env.VITE_FB} target="_blank">
                    <div className='w-[60px] h-[60px] bg-[#F2F7FC] rounded-[8px] flex items-center justify-center'>
                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75027 12.0825H10.2308L11.2231 8.11357H7.75027V6.12912C7.75027 5.10712 7.75027 4.14467 9.73472 4.14467H11.2231V0.810787C10.8996 0.768121 9.67816 0.671875 8.38827 0.671875C5.69438 0.671875 3.78137 2.31599 3.78137 5.33534V8.11357H0.804688V12.0825H3.78137V20.5164H7.75027V12.0825Z" fill="#1877F2" />
                        </svg>
                    </div>
                </a>

                <a href={import.meta.env.VITE_LINKEDIN} target="_blank">
                    <div className='w-[60px] h-[60px] bg-[#F2F7FC] rounded-[8px] flex items-center justify-center'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.929688" y="0.671875" width="19.8445" height="19.8453" rx="8.26855" fill="#F2F7FC" />
                            <path d="M5.88945 4.80688C5.88923 5.24547 5.71479 5.66601 5.40451 5.97599C5.09422 6.28596 4.67351 6.45998 4.23491 6.45976C3.79632 6.45954 3.37578 6.2851 3.06581 5.97482C2.75583 5.66453 2.58181 5.24382 2.58203 4.80523C2.58225 4.36664 2.75669 3.9461 3.06698 3.63612C3.37726 3.32614 3.79798 3.15212 4.23657 3.15234C4.67516 3.15256 5.0957 3.327 5.40568 3.63729C5.71565 3.94757 5.88967 4.36829 5.88945 4.80688ZM5.93906 7.68434H2.63164V18.0366H5.93906V7.68434ZM11.1648 7.68434H7.8739V18.0366H11.1317V12.6041C11.1317 9.57783 15.0758 9.2967 15.0758 12.6041V18.0366H18.3419V11.4796C18.3419 6.3779 12.5043 6.56808 11.1317 9.07345L11.1648 7.68434Z" fill="#0077B5" />
                        </svg>
                    </div>
                </a>

                <a href="https://gitlab.com/faisal.works" target="_blank">
                    <div className='w-[60px] h-[60px] bg-[#F2F7FC] rounded-[8px] flex items-center justify-center'>
                        <svg width="21" height="21" className="tanuki-logo" viewBox="0 0 36 36">
                            <path className="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
                            <path className="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
                            <path className="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
                            <path className="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
                            <path className="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
                            <path className="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
                            <path className="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
                        </svg>
                    </div>
                </a>
                
                <a href="https://github.com/mfaishal82" target="_blank">
                    <div className='w-[60px] h-[60px] bg-[#F2F7FC] rounded-[8px] flex items-center justify-center'>
                        <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.27246 0.326172C3.70408 0.326172 0.00390761 4.02635 0.00390761 8.59472C0.00291203 10.3304 0.548473 12.0224 1.5632 13.4305C2.57793 14.8387 4.01029 15.8916 5.65711 16.4399C6.07054 16.5119 6.22599 16.2638 6.22599 16.0463C6.22599 15.8504 6.21524 15.1996 6.21524 14.5067C4.13818 14.8896 3.60073 14.0007 3.43536 13.5352C3.34192 13.297 2.93924 12.5636 2.58783 12.3668C2.29843 12.2122 1.885 11.8294 2.57708 11.8195C3.22864 11.8087 3.69333 12.4189 3.84878 12.667C4.59295 13.9172 5.78114 13.5658 6.25658 13.3491C6.32935 12.8117 6.54598 12.4503 6.78412 12.2436C4.94437 12.0369 3.02193 11.3233 3.02193 8.16062C3.02193 7.261 3.34192 6.51766 3.86945 5.93804C3.78677 5.73132 3.49737 4.8838 3.95214 3.74687C3.95214 3.74687 4.64422 3.53023 6.22599 4.59522C6.8991 4.4084 7.59457 4.31438 8.29313 4.31575C8.99596 4.31575 9.69878 4.40835 10.3603 4.5944C11.942 3.51949 12.6341 3.7477 12.6341 3.7477C13.0889 4.88462 12.7995 5.73215 12.7168 5.93886C13.2435 6.51766 13.5643 7.25108 13.5643 8.16062C13.5643 11.3341 11.632 12.0369 9.79139 12.2436C10.0915 12.5016 10.3503 12.9977 10.3503 13.7733C10.3503 14.8788 10.3396 15.7677 10.3396 16.0472C10.3396 16.2638 10.495 16.5218 10.9085 16.4391C12.5496 15.8848 13.9757 14.8298 14.9859 13.4227C15.9962 12.0155 16.5398 10.327 16.5402 8.59472C16.5402 4.02635 12.84 0.326172 8.27163 0.326172H8.27246Z" fill="#0B0909" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Contact */}
            <div className='bg-[#F2F5F9] rounded-[20px] w-[350px] h-[350px] flex flex-col items-center justify-center border-collapse'>
                {/* Phone */}
                <div className='flex flex-row border-b  p-5 items-center gap-3 w-[300px]'>
                    <div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="24" height="24" rx="8.26855" fill="#F2F7FC" />
                            <path d="M16 2.5H8C7.46957 2.5 6.96086 2.71071 6.58579 3.08579C6.21071 3.46086 6 3.96957 6 4.5V20.5C6 21.0304 6.21071 21.5391 6.58579 21.9142C6.96086 22.2893 7.46957 22.5 8 22.5H16C16.5304 22.5 17.0391 22.2893 17.4142 21.9142C17.7893 21.5391 18 21.0304 18 20.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5ZM13 21.5H11V20.5H13V21.5ZM16 19.5H8V5.5H16V19.5Z" fill="url(#paint0_linear_27_11)" />
                            <defs>
                                <linearGradient id="paint0_linear_27_11" x1="12" y1="2.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF9A1A" />
                                    <stop offset="1" stopColor="#EC1C09" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Phone/ WhatsApp</span>
                        <span>{import.meta.env.VITE_PHONE}</span>
                    </div>
                </div>

                {/* Email */}
                <div className='flex flex-row border-b  p-5 items-center gap-3 w-[300px]'>
                    <div>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="21.36" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
                            <path d="M2.97 6.65L12 1L21.03 6.65C21.61 7 22 7.63 22 8.36V18.36C22 19.46 21.1 20.36 20 20.36H4C2.9 20.36 2 19.46 2 18.36V8.36C2 7.63 2.39 7 2.97 6.65ZM4 18.36H20V10.36L12 15.36L4 10.36V18.36ZM12 13.36L20 8.36L12 3.36L4 8.36L12 13.36Z" fill="#FF9C1B" />
                        </svg>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Email</span>
                        <span>{import.meta.env.VITE_EMAIL}</span>
                    </div>
                </div>

                {/* Location */}
                <div className='flex flex-row border-b  p-5 items-center gap-3 w-[300px]'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="23.5" height="23.499" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
                            <path d="M12.25 2C15.9766 2 19 4.87766 19 8.42188C19 12.5 14.5 18.9627 12.8477 21.1948C12.7791 21.2891 12.6892 21.3657 12.5853 21.4186C12.4814 21.4715 12.3665 21.499 12.25 21.499C12.1335 21.499 12.0186 21.4715 11.9147 21.4186C11.8108 21.3657 11.7209 21.2891 11.6523 21.1948C10 18.9636 5.5 12.5033 5.5 8.42188C5.5 4.87766 8.52344 2 12.25 2Z" stroke="#E80505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.25 11.0154C11.0332 11.0154 10.0469 10.0291 10.0469 8.81241C10.0469 7.59571 11.0332 6.60938 12.25 6.60938C13.4668 6.60938 14.4531 7.59571 14.4531 8.81241C14.4531 10.0291 13.4668 11.0154 12.25 11.0154Z" stroke="#E80505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Location</span>
                        <span>{import.meta.env.VITE_LOCATION}</span>
                    </div>
                </div>

                <a href="/CV.pdf" download={"Muhammad_Faisal_Resume"} className="flex flex-row w-auto mt-4 px-5 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 rounded-full items-center justify-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z" fill="#F2F7FC" />
                    </svg>
                    Download Resume
                </a>
            </div>
        </section>
    )
}