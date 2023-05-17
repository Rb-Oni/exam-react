import {useState} from "react";
import {useRouter} from 'next/router';
import Link from 'next/Link';
import Navbar from "../../components/navbar";

export default function RegisterPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Invalid credentials");
			return;
		}
		fetch('/api/auth/register', {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email, password, name}),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				router.push('/')
				console.log(data);
			});
	};

	return (
		<>
			<Navbar></Navbar>
			<section>
				<form className={'container mx-auto my-16 flex flex-col items-center'} onSubmit={handleSubmit}>
					<div className="flex flex-col gap-4 px-12 py-8 shadow">
						<h2 className={'text-2xl mb-6 uppercase text-center'}>Register</h2>
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
						<div className="flex flex-col">
							<label htmlFor="inputConfirmPassword">confirm password</label>
							<input type="password" id={'inputConfirmPassword'} className={'border rounded px-2 py-1'}
							       value={confirmPassword}
							       onChange={(e) => setConfirmPassword(e.target.value)} required={true}/>
						</div>
						<p>Or <Link href='/user/login' className={'text-custom hover:underline'}> sign in</Link></p>
						<button type="submit"
						        className={'bg-custom font-semibold uppercase hover:bg-black duration-150 text-white py-2 rounded'}>Register
						</button>
					</div>
				</form>
			</section>
		</>
	);
};
