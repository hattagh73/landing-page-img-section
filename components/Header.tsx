import { useEffect, useState } from 'react';

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
        <header className={`sticky top-0 z-[2] bg-white transition-transform ease-linear duration-700 ${scrollPos > 90 ? 'shadow-md' : 'shadow-none'}`}>
            <ul className={`max-w-screen-lg mx-auto flex gap-12 transition-transform ease-linear duration-700 ${scrollPos > 90 ? 'border-b-0' : 'border-b'}`}>
                {   ['Architecture', 'Interior', 'People'].map((i, index) => 
                    <li key={index} className={`py-4 ${i === 'Architecture' && 'border-b-2 border-grey-800' } `}>
                        {i}
                    </li>
                )}
            </ul>
        </header>
    )
}
export default Header;