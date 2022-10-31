import './header.scss';

function Header() {
	return (
        <section className="header">
            <img src="/images/logo.svg" alt="logo" />
            <div className="header__menu">
                <a href='' className="header__menu-link">Home</a>
                <a href='' className="header__menu-link">Latest</a>
                <a href='' className="header__menu-link">About</a>
            </div>

        </section>
    );
}

export default Header;