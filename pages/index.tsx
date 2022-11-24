import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header, SecArchitecture, SecHero, SecInterior } from '../components';

const Home:NextPage = () => {
    // `https://source.unsplash.com/1600x900/?architecture`
    return (
        <main>
            <Head><title>Home</title></Head>
            <SecHero />    
            <Header />    
            <SecArchitecture />    
            <SecInterior />    
        </main>
    )
}
export default Home;

// export const getServerSideProps = async () => {
//     const response = await fetch (`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_API_KEY}`);
//     const data = await response.json();

//     return {
//         props: {
//             data: data
//         }
//     }
// }