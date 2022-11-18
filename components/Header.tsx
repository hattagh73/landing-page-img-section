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
        <header className={`sticky top-0 z-[2] bg-white transition ease-linear ${scrollPos > 90 ? 'shadow-md' : 'shadow-none'}`}>
            <ul className={`max-w-screen-lg mx-auto flex gap-6 py-4 transition ease-linear duration-700 ${scrollPos > 90 ? 'border-b-0' : 'border-b'}`}>
                <li>Interior</li>
                <li>Nature</li>
                <li>Food</li>
            </ul>
        </header>
    )
}
export default Header;