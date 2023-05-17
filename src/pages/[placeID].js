import Navbar from "../components/navbar";
import {useState, useEffect} from "react";
import {useRouter} from 'next/router'

export default function PlaceID() {
	const router = useRouter();
	const [place, setPlace] = useState('');
	const {placeID} = router.query;

	useEffect(() => {
		fetch(`/api/places/${placeID}`)
			.then((response) => response.json())
			.then(data => setPlace(data));
	}, [placeID]);

	// J'ai essayé de display le nom de l'hôte et de la ville en vain alors que je récupère bien l'objet
	console.log(place);
	return (
		<>
			<Navbar></Navbar>
			<main>
				<section className={'my-10 px-4 container mx-auto'}>
					<h1 className={'text-5xl font-bold'}>{place.name}</h1>
					{/*<h2>{place.host.name}</h2>*/}
					<div className={'flex my-4 gap-4'}>
						<img src={place.image} alt={place.image}/>
						<p>{place.description}</p>
					</div>
				</section>
			</main>
		</>
	)
}
