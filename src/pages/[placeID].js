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
                    <h1 className={'text-5xl font-semibold'}>{place.name}</h1>
                    <div className={'flex flex-row gap-8'}>
                        <h2 className={'text-lg'}><span className={' font-semibold'}>{place.priceByNight}€</span> / by
                            night</h2>
                        {/*<span>{place.city.name}</span>*/}
                        {/*<h2>{place.host.name}</h2>*/}
                    </div>
                    <div className={'flex my-4 gap-4'}>
                        <img src={place.image} alt={place.image}/>
                        <p>{place.description}</p>
                    </div>
                    <div className={'flex flex-row gap-8'}>
                        <h3 className={'text-lg'}><span
                            className={'font-semibold'}>{place.numberOfRooms}</span> {place.numberOfRooms > 1 ? "rooms" : "room"}
                        </h3>
                        <h3 className={'text-lg'}><span
                            className={'font-semibold'}>{place.numberOfBathrooms}</span> {place.numberOfBathrooms > 1 ? "bathrooms" : "bathroom"}
                        </h3>
                    </div>
                </section>
            </main>
        </>
    )
}
