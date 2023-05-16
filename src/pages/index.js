import Head from 'next/head'
import Navbar from "../components/navbar";
import Card from "../components/card";

export default function Home() {


	return (
		<>
			<Head>
				<title>Exam REACT</title>
				<meta name="description" content="Exam REACT, FALCK Robin RPI-DEV 2023"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Navbar></Navbar>
			<main>
				<section className={'my-10 px-4 container mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6'}>
					<Card></Card>
				</section>
			</main>
		</>
	)
}
