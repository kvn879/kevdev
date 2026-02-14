import { Link } from 'react-router-dom';
function NavBar() {

    const navLinks=["Home", "Portfolio", "Cat_Showcase", "Minigames"];
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white/30 backdrop-blur-md border-b border-white/20 px-10 py-4">

            <div className="font-bold text-xl text-amber-900">Kaz&Co.</div>
            <ul className='hidden md:flex space-x-8'>
                {navLinks.map(link => (
                    <li key={link}>
                        <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                            className="text-amber-900 hover:text-amber-600 transition-colors capitalize">
                            {link.replace("_", " ")}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
}

export default NavBar;