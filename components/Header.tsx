import { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';

const Header = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const updateScrollPos = () => {
        setScrollPos(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", (updateScrollPos));

        return () =>   window.removeEventListener("scroll", (updateScrollPos));
    }, [])

    return (
        <header className={`sticky top-0 z-[10] bg-white transition-transform ease-linear duration-700 ${scrollPos > 200 ? 'shadow-md' : 'shadow-none'}`}>
            <ul className={`max-w-screen-lg mx-auto flex gap-12 transition-transform ease-linear duration-700 ${scrollPos > 200 ? 'border-b-0' : 'border-b'}`}>
                {   ['Architecture', 'Interior'].map((i, index) => 
                    <li key={index} className="inline-flex">
                        <Link
                            className="py-4"
                            activeClass="border-b-2 border-grey-800" 
                            to={i} 
                            smooth={true} 
                            duration={500} 
                            offset={i === 'Architecture' ? -300 : -70}
                        >{i}
                        </Link>
                    </li>
                )}
            </ul>
        </header>
    )
}
export default Header;