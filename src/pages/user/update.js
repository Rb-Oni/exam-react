import {useState} from "react";
import Navbar from "../../components/navbar";

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		const token = localStorage.getItem('token');
		console.log(JSON.stringify({name: name, email: email, password: password}))
		e.preventDefault();
		fetch('/api/auth/me', {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({name: name, email: email, password: password}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('error')
				}
			});
		console.log(name)
	};

	return (
		<>
			<Navbar></Navbar>
			<section>
				<form className={'container mx-auto my-16 flex flex-col items-center'} onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 px-12 py-8 shadow">
						<h2 className={'text-2xl mb-6 uppercase text-center'}>Update</h2>
						<div className="flex flex-col">
							<label htmlFor="inputName">Name</label>
							<input type="text" id={'inputName'} className={'border rounded px-2 py-1'} value={name}
							       onChange={(e) => setName(e.target.value)} required={true} autoFocus={true}/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="inputEmail">Email</label>
							<input type="email" id={'inputEmail'} className={'border rounded px-2 py-1'} value={email}
							       onChange={(e) => setEmail(e.target.value)} required={true}/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="inputPassword">Password</label>
							<input type="password" id={'inputPassword'} className={'border rounded px-2 py-1'}
							       value={password}
							       onChange={(e) => setPassword(e.target.value)} required={true}/>
						</div>
						<button type="submit"
						        className={'bg-custom font-semibold uppercase hover:bg-black duration-150 text-white py-2 rounded'}>Update
						</button>
					</div>
				</form>
			</section>
		</>
	);

};

