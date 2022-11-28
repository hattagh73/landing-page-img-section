import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
// import { Link as RLink } from 'react-scroll';

const Header = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [shadow, setShadow] = useState("shadow-none");
    const [border, setBorder] = useState("border-b");
    const [linkFont, setLinkFont] = useState('font-normal');

    
    const updateScrollPos = () => {
        setScrollPos(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", (updateScrollPos));

        return () => window.removeEventListener("scroll", (updateScrollPos));
    }, [scrollPos])

    const router = useRouter();

    const anchorLink = () => {
        if(router.asPath == '/#Architecture' || router.asPath == '/#Interior') {
            setLinkFont('font-medium');
        } else {
            setLinkFont('font-normal');
        }
    }

    useEffect(() => {
        anchorLink();
    }, [router.asPath])

    return (
        <header className={` px-6 lg:px-0 sticky top-0 z-[10] bg-white transition-transform ease-linear duration-700  ${scrollPos > 290 ? "shadow-md" : "shadow-none" } `}>

            <ul className={` max-w-screen-lg lg:mx-auto flex gap-12 transition-transform ease-linear duration-700 ${scrollPos > 290 ? "border-b-0" : "border-b" } `}>

                {   ['Architecture', 'Interior', 'People'].map((i, index) => 

                    <li key={index} className="inline-flex">

                        {/* Links tag */}
                        <Link
                            className={`py-4 cursor-default ${linkFont}`}
                            href={`/#${i}`}
                            scroll={false}
                        >{i}
                        </Link>

                    </li>

                )}
            </ul>

        </header>
    )
}
export default Header;

/*
    <Link
        className="py-4 font-medium cursor-default"
        activeClass={`border-b-2 border-grey-800`} 
        to={i} 
        smooth={true} 
        duration={500} 
        offset={i === 'Architecture' ? -600 : -70}
    >{i}
    </Link>
*/