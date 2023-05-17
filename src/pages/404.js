import Head from 'next/head'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <main>
                <section className={'my-10 px-4 container mx-auto text-center'}>
                    <h1 className={'text-7xl font-bold mb-5'}>Error 404</h1>
                    <a href="/"
                       className={'bg-blue-500 hover:bg-black duration-150 text-white py-2 px-4 rounded'}>Return</a>
                </section>
            </main>
        </>
    )
}