import Container from '../global/Container';
import Logo from './logo';
import NavSearch from './navSearch';
import CardButtons from './cardButton';
import DarkMode from './darkMode';
import Links from './linksDropdown';

function Navbar() {
    return <nav className="border-b">
        <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
            <Logo />
            <NavSearch />
            <div className='flex gap-4 items-center'>
                <CardButtons />
                <DarkMode />
                <Links />
            </div>
        </Container>
    </nav>
}

export default Navbar;