import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Card = () => {

	const [name, setName] = useState([]);

	useEffect(() => {
		names()
	}, [])

	const names = async () => {
		const response = await fetch('http://localhost:3000/api/places');

		setName(await response.json())
	}

	return (
		<>
			{name.map((data) => {
				return (
					<Link href={{pathname: '/place', query: data }}
					      className={'mx-auto border-2 border-blue-500 rounded-lg'} key={data.id}>
						<img src={data.image}
						     className={'opacity-90 hover:opacity-100 duration-150 rounded-t-md'}
						     alt="{data.image}"/>
						<div className={'flex flex-col py-1 px-2'}>
							<div className={'flex justify-between'}>
								<h2 className={'font-bold'}>{data.city.name}</h2>
								<span className={'font-bold'}>{data.priceByNight} €</span>
							</div>
							<span>{data.name}</span>
						</div>
					</Link>
				)
			})}
		</>
	)
}
export default Card