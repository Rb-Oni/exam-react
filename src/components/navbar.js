import React from "react";

const Navbar = () => {
	return (
		<>
			<div className={"container-fluid border-b-2 border-black bg-white"}>
				<div className={"flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-8 lg:px-12"}>
					<div className={"flex flex-row justify-between py-2"}>
						<a className={"font-bold text-6xl hover:text-blue-700 focus:text-blue-700 ease-in duration-150"} aria-current="page" href="/">EXAM REACT</a>
					</div>
					<nav className={"flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"}>
						<a className={"hover:text-blue-700 focus:text-blue-700 font-bold text-2xl ease-in duration-150 md:mt-0 md:ml-4_home"}
						   href="/">Accueil</a>
					</nav>
				</div>
			</div>
		</>
	)
}
export default Navbar