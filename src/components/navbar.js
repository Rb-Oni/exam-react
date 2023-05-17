import React from "react";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter();

    return (
        <>
            <div className={"container-fluid shadow"}>
                <div
                    className={"flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-8 lg:px-12 gap-8"}>
                    <div className={"flex flex-row justify-between py-2"}>
                        <a className={"opacity-90 hover:opacity-100 ease-in duration-150"}
                           aria-current="page" href="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
                                className={'w-60'} alt="App logo"/>
                        </a>
                    </div>
                    <nav className={"flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row gap-4"}>
                        <a className={router.pathname === '/' ? 'text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4' : 'hover:text-custom focus:text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4'}
                           href="/">Home</a>
                        <a className={router.pathname === '/user/login' ? 'text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4' : 'hover:text-custom focus:text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4'}
                           href="/user/login">Login</a>
                        <a className={router.pathname === '/user/register' ? 'text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4' : 'hover:text-custom focus:text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4'}
                           href="/user/register">Register</a>
                    </nav>
                    <a href={'/user/update'}
                       className={router.pathname === '/user/update' ? 'justify-end text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4' : 'justify-end hover:text-custom focus:text-custom text-2xl ease-in duration-150 md:mt-0 md:ml-4'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Navbar