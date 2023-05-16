import Head from 'next/head'
import Navbar from "../components/navbar";
import {useRouter} from 'next/router'
import React from "react";

export default function Place() {

	const router = useRouter();
	const data = router.query;



	console.log(data)
	return (
		<>
			<Head>
				<title>Exam REACT</title>
				<meta name="description" content="Exam REACT, FALCK Robin RPI-DEV 2023"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Navbar></Navbar>
			<main>
				<section className={'my-10 px-4 container mx-auto'}>
					<h1 className={'text-5xl font-bold'}>{data.name}</h1>
					<h2>{data.host}</h2>
					<img src={data.image} alt={data.image}/>
					<p>{data.description}</p>
				</section>
			</main>
		</>
	)
}
