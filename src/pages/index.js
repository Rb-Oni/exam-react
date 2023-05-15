import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Exam REACT</title>
				<meta name="description" content="Exam REACT, FALCK Robin RPI-DEV 2023"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<h1 className={"text-5xl"}>Hello</h1>
			</main>
		</>
	)
}
