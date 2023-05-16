import React, {useEffect, useState} from "react";

const Card = () => {

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
			{name.map((data) => {
				return (
					<a href={'#'} className={'mx-auto border-2 border-blue-500 rounded-lg'} key={data.id}>
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
					</a>
				)
			})}
		</>
	)
}
export default Card