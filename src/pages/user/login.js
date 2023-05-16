import {useState} from "react";
import {useRouter} from 'next/router';
import Link from 'next/Link';
import Navbar from "../../components/navbar";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/api/auth/login', {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({email, password}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					console.log(data['user'])
					localStorage.setItem('token', data['token'])
					router.push('/')
				}
			});
	};

	return (
		<>
			<Navbar></Navbar>
			<section>
				<form className={'container mx-auto my-16 flex flex-col items-center'} onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 px-12 py-8 shadow">
						<h2 className={'text-2xl mb-6 uppercase text-center'}>Connexion</h2>
						<div className="flex flex-col">
							<label htmlFor="inputEmail">Email</label>
							<input type="email" id={'inputEmail'} className={'border rounded px-2 py-1'} value={email}
							       onChange={(e) => setEmail(e.target.value)} required={true} autoFocus={true}/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="inputPassword">Password</label>
							<input type="password" id={'inputPassword'} className={'border rounded px-2 py-1'}
							       value={password}
							       onChange={(e) => setPassword(e.target.value)} required={true} autoFocus={true}/>
						</div>
						<p>Or <Link href='/user/register' className={'text-blue-500 hover:underline'}>sign up</Link></p>
						<button type="submit"
						        className={'bg-blue-500 hover:bg-black duration-150 text-white py-2 rounded'}>
							Connexion
						</button>
					</div>
				</form>
			</section>
		</>
	);

};

