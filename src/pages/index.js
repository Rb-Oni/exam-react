import Head from 'next/head'
import {useEffect, useState} from 'react';

export default function Home() {

	const [name, setName] = useState([]);

	useEffect(() => {
		names()
	}, [])

	const names = async () => {
		const responce = await fetch('http://localhost:3000/api/places');

		setName(await responce.json())
	}

	return (
		<>
			<Head>
				<title>Exam REACT</title>
				<meta name="description" content="Exam REACT, FALCK Robin RPI-DEV 2023"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<h1 className={'text-5xl'}>Hello</h1>
				<section className={'my-10 px-4 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4'}>
					{name.map((data) => {
						return (
							<a href={'#'} className={'mx-auto'} key={data.id}>
								<img src={data.image}
								     className={'opacity-90 hover:opacity-100 duration-150 w-60 rounded-lg'}
								     alt="{data.image}"/>
								<div className={'flex flex-col'}>
									<div className={'flex justify-between'}>
										<h2 className={'font-bold'}>{data.city.name}</h2>
										<span className={'font-bold'}>{data.priceByNight}€</span>
									</div>
									<span>{data.name}</span>
								</div>
							</a>
						)
					})}
				</section>
			</main>
		</>
	)
}
