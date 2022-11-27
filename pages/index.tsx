import { NextPage } from 'next';
import Head from 'next/head';
import { Header, SecArchitecture, SecHero, SecInterior, SecPeople } from '../components';

const Home:NextPage = ({architectures, interiors, peoples}) => {
    return (
        <main>
            <Head><title>Home</title></Head>
            <SecHero />    
            <Header />    
            <SecArchitecture architectures={architectures} />    
            <SecInterior interiors={interiors} />    
            <SecPeople peoples={peoples} />    
        </main>
    )
}
export default Home;

export const getServerSideProps = async () => {

    const start = new Date().getTime();

    let architecture = await fetch(`https://api.unsplash.com/search/photos?query=architecture&per_page=6&client_id=${process.env.UNSPLASH_API_KEY}`);

    let interior = await fetch(`https://api.unsplash.com/search/photos?query=interior&per_page=4&client_id=${process.env.UNSPLASH_API_KEY}`);

    let people = await fetch(`https://api.unsplash.com/search/photos?query=people&per_page=8&client_id=${process.env.UNSPLASH_API_KEY}`);
    
    [architecture, interior, people] = await Promise.all([architecture.json(), interior.json(), people.json()]);

    console.log((new Date().getTime() - start) / 1000, "seconds taken");
    
    return {
        props: {
            architectures: architecture.results,
            interiors: interior.results,
            peoples: people.results,
        }
    }

}