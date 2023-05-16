import React from "react";

const Navbar = () => {
	return (
		<>
			<div className={"container-fluid border-b-2 border-blue-500 bg-white"}>
				<div className={"flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-8 lg:px-12 gap-8"}>
					<div className={"flex flex-row justify-between py-2"}>
						<a className={"font-bold text-6xl hover:text-blue-500 focus:text-blue-500 ease-in duration-150"}
						   aria-current="page" href="/">EXAM REACT</a>
					</div>
					<nav className={"flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"}>
						<a className={"hover:text-blue-500 focus:text-blue-500 font-bold text-2xl ease-in duration-150 md:mt-0 md:ml-4_home"}
						   href="/">Accueil</a>
					</nav>
					<a href={'#'} className={'justify-end hover:text-blue-500 focus:text-blue-500 ease-in duration-150'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-bluec" fill="none"
						     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
					</a>
				</div>
			</div>
		</>
	)
}
export default Navbar