import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header, SecArchitecture, SecHero, SecInterior } from '../components';

const Home:NextPage = () => {
    const unsplash = 
    {
        architecture: [
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            },
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            },
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            },
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            },
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            },
            {
                image: `https://source.unsplash.com/1600x900/?architecture`
            }
        ],
        interior: [
            {
                image: `https://source.unsplash.com/random/1920x1080/?interior`
            },
            {
                image: `https://source.unsplash.com/random/1920x1080/?interior`
            },
            {
                image: `https://source.unsplash.com/random/1920x1080/?interior`
            },
            {
                image: `https://source.unsplash.com/random/1920x1080/?interior`
            },
        ]
    }
    
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