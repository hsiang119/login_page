import React, { useState } from "react";

const Login = () => {
    const [usernameFocusedOrValid, setUsernameFocusedOrValid] = useState<boolean>(false);
    const [passwordFocusedOrValid, setPasswordFocusedOrValid] = useState<boolean>(false);
    const [emailFocusedOrValid, setEmailFocusedOrValid] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [animate, setAnimate] = useState<boolean>(false);


    const handleUsernameFocus = (): void => {
        setUsernameFocusedOrValid(true);
    };

    const handleUsernameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameFocusedOrValid(!!e.target.value);
    };

    const handlePasswordFocus = (): void => {
        setPasswordFocusedOrValid(true);
    };

    const handlePasswordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordFocusedOrValid(!!e.target.value);
    };

    const handleEmailFocus = ():void => {
        setEmailFocusedOrValid(true);
    };

    const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmailFocusedOrValid(!!e.target.value);
    };

    const changeActive = () => {
        setIsActive(false);
        setAnimate(true);
    };

    const isNotActive = () => {
        setAnimate(false);
    }

    return (
        <div className={`${isActive ? "active translate-x-0 opacity-100 filter blur-0" : "" } wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden`}>
            <span className={`${animate ? '!rotate-[0deg] !skew-y-[0deg] delay-500' : '!delay-1600' } duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary`}></span>
            <span className={`${animate ? '!-rotate-[11deg] !-skew-y-[41deg] delay-1000' : '!delay-500' } duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary`}></span>

            <div className={`form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700`}>
                <h2 className={`text-3xl text-white text-center ease-linear duration-700 ${animate ? 'animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0' : '!delay-2100'} `}>Login</h2>
                <form action="#">
                    <div className={`${animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]' : '!delay-2200'} ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0`}>
                        <input
                            type="text"
                            required 
                            className="w-full h-full bg-transparent outline-none border-b-2 border-b-white duration-500 focus:border-b-primary text-white p-[10px]"
                            onFocus={handleUsernameFocus}
                            onBlur={handleUsernameBlur}
                        />
                        <label className={`
                            absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500
                            ${usernameFocusedOrValid ? '!-top-[5px] !text-primary' : ''}
                        `}>Username</label>
                    </div>
                    <div className={`${animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]' : '!delay-2300'} ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0>`}>
                        <input
                            type="password" 
                            required
                            className="w-full h-full bg-transparent outline-none border-b-2 border-b-white duration-500 focus:border-b-primary text-white p-[10px]"
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                        />
                        <label className={`
                            absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500
                            ${passwordFocusedOrValid ? '!-top-[5px] !text-primary' : ''}
                        `}>Password</label>
                    </div>
                    <button 
                        type="submit"
                        className={`${animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]' : '!delay-2400'} ease-linear duration-700 btn relative w-full h-[45px] border-2 border-white outline-none rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-neon after:content after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:shadow-neon after:opacity-0 hover:after:!opacity-100`}
                    >
                        Login
                    </button>
                    <div className={`${animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2500'} ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5`}>
                        <p> 
                            Don't have an account?
                            <a href="#" onClick={changeActive} className="ml-3 register-link text-primary decoration-[none font-semibold] hover:underline ">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={` info-text login absolute top-0 w-[50%] h-full right-0 flex flex-col justify-center text-right pt-0 pr-[40px] pb-[60px] pl-[150px]`}>
                <h2 className={`${animate ? 'animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2000'} duration-700 ease-linear text-[36px] text-white leading-snug uppercase`}>Welcome Back!</h2>
                <p className={`${animate ? 'animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2100'} duration-700 ease-linear text-[16px] text-white`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto' : '' } form-box register absolute top-0 w-[50%] h-[100%] flex flex-col justify-center right-0 pt-0 pr-[40px] pb-0 pl-[60px] translate-x-[120%] opacity-0 filter blur-[10px] duration-700 pointer-events-none`}>
                <h2 className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1700' : '!delay-0' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] text-3xl text-white text-center`}>Sigh Up</h2>
                <form action="#">
                    <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1800' : '!delay-100' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] input-box relative w-full h-[50px] my-[25px] mx-0`}>
                        <input
                            type="text"
                            required 
                            className="w-full h-full bg-transparent outline-none border-b-2 border-b-white duration-500 focus:border-b-primary text-white p-[10px]"
                            onFocus={handleUsernameFocus}
                            onBlur={handleUsernameBlur}
                        />
                        <label className={`
                            absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500
                            ${usernameFocusedOrValid ? '!-top-[5px] !text-primary' : ''}
                        `}>Username</label>
                    </div>
                    <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1900' : '!delay-200' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] input-box relative w-full h-[50px] my-[25px] mx-0`}>
                        <input
                            type="text"
                            required 
                            className="w-full h-full bg-transparent outline-none border-b-2 border-b-white duration-500 focus:border-b-primary text-white p-[10px]"
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                        />
                        <label className={`
                            absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500
                            ${emailFocusedOrValid ? '!-top-[5px] !text-primary' : ''}
                        `}>Email</label>
                    </div>
                    <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2000' : '!delay-300' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] input-box relative w-full h-[50px] my-[25px] mx-0`}>
                        <input
                            type="password" 
                            required
                            className="w-full h-full bg-transparent outline-none border-b-2 border-b-white duration-500 focus:border-b-primary text-white p-[10px]"
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                        />
                        <label className={`
                            absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500
                            ${passwordFocusedOrValid ? '!-top-[5px] !text-primary' : ''}
                        `}>Password</label>
                    </div>
                    <button 
                        type="submit"
                        className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2100' : '!delay-400' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] btn relative w-full h-[45px] border-2 border-white outline-none rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-neon after:content after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:shadow-neon after:opacity-0 hover:after:!opacity-100 `}
                    >
                        Sign Up
                    </button>
                    <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2200' : '!delay-500' } opacity-0 filter blur-[10px] duration-700 translate-x-[120%] logreg-link text-[14.5px] text-white text-center mt-5`}>
                        <p>
                            Already have an account?
                            <a onClick={isNotActive} href="#" className="ml-3 register-link text-primary decoration-[none font-semibold] hover:underline ">Login</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto' : '' } info-text register -translate-x-[120%] absolute top-0 w-[50%] h-full left-0 flex flex-col justify-center text-left pt-0 pr-[150px] pb-[60px] pl-[40px] pointer-events-none duration-700 ease-linear opacity-0 filter blur-[10px]`}>
                <h2 className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1700' : '!delay-0' } opacity-0 filter blur-[10px] duration-700 ease-linear -translate-x-[120%] text-[36px] text-white leading-snug uppercase`}>Welcome Back!</h2>
                <p className={`${animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1800' : '!delay-100' } opacity-0 filter blur-[10px] duration-700 ease-linear -translate-x-[120%] text-[16px] text-white`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

        </div>
    )
}

export default Login