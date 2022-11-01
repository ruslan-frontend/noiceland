import './header.scss';

function Header() {
	return (
        <section className="header">
            <img src="/images/logo.svg" alt="logo" />
            <div className="header__menu">
                <a className="header__menu-link">Home</a>
                <a className="header__menu-link">Latest</a>
                <a  className="header__menu-link">About</a>
            </div>
            <div className="header__rectangle"></div>
        </section>
    );
}

export default Header;