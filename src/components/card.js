import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Card = () => {
	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		fetch('/api/places')
			.then((response) => response.json())
			.then((data) => {
				setPlaces(data);
				setFilteredPlaces(data);
			});
	}, []);

	const handleSearch = (e) => {
		const searchInputValue = e.target.value.toLowerCase();
		setSearchInput(searchInputValue);

		const filtered = places.filter(
			(place) =>
				place.name.toLowerCase().includes(searchInputValue) ||
				place.city.name.toLowerCase().includes(searchInputValue)
		);
		setFilteredPlaces(filtered);
	};

	return (
		<>
			<section className={'my-10 px-4 container mx-auto'}>
				<input className={'text-black px-4 py-2 rounded-lg shadow'} id="search" type="text" placeholder="Search" value={searchInput} onChange={handleSearch}/>
			</section>

			<section className={'my-10 px-4 container mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'}>
				{filteredPlaces.map((place) => {
					return (
						<Link key={place.id} href={`/place/${place.id}`}
						      className={'mx-auto shadow rounded-lg'}>
							<img src={place.image}
							     className={'opacity-80 hover:opacity-100 duration-150 rounded-t-md'}
							     alt={place.image}/>
							<div className={'flex flex-col py-2 px-4'}>
								<div className={'flex justify-between'}>
									<h2 className={'font-semibold'}>{place.city.name}</h2>
									<span><span className={'font-semibold'}>€{place.priceByNight}</span>/night</span>
								</div>
								<span>{place.name}</span>
							</div>
						</Link>
					)
				})}
			</section>
		</>
	)
}
export default Card