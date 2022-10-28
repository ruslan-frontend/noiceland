import './header.scss';

function Header() {
	return (
        <section className="header">
            <img src="/images/logo.svg" alt="logo" />
            <div className="header__menu">
                <button className="header__menu-button">Home</button>
                <button className="header__menu-button">Latest</button>
                <button className="header__menu-button">About</button>
            </div>

        </section>
    );
}

export default Header;