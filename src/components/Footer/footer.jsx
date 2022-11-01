import './footer.scss';

function Footer() {
	return (
        <footer>
            <section className="footer">
                <div className="footer__title">
                    <img src="/images/logoBlack.svg" alt="logo" />
                    <p className="footer__title-description">© 2018 Noiceland™, all rights reserved</p>
                </div>

                <div className="footer__splitter">
                </div>

                <div className="footer__items">
                    <div className="footer__items-categories categories">
                        <h3 className="categories__title">Categories</h3>
                        <div className="categories__blocks">
                            <div className="categories__blocks-items">
                                <p>Animation</p>
                                <p>Interactive Design</p>
                            </div>
                            <div className="categories__blocks-items">
                                <p>Architecture</p>
                                <p>Miscellaneous</p>
                            </div>
                            <div className="categories__blocks-items">
                                <p>Graphic Design</p>
                                <p>Photography</p>
                            </div>
                            <div className="categories__blocks-items">
                                <p>Illustration</p>
                                <p>Product Design</p>
                            </div>
                        </div>
                    </div>
                    <form action="" className="footer__items-form form">
                        <h3 className="form__title">Subscribe to newsletter</h3>
                        <div className="form__input">
                            <input className='form__input-input' type="email" placeholder="Email address" />
                            <button className="form__input-button">send</button>
                        </div>
                    </form>
                </div>

                <div className="footer__points">
                    <div className="footer__points-information">
                        <h3>Information</h3>
                        <p>about</p>
                        <p>contact</p>
                        <p>terms</p>
                    </div>
                    <div className="footer__points-social">
                        <h3>follow us</h3>
                        <p>instagram</p>
                        <p>facebook</p>
                        <p>twitter</p>
                    </div>
                    <div className="footer__points-templates">
                        <h3>Template</h3>
                        <p>Image License Info</p>
                        <p>Powered by Webflow</p>
                    </div>
                </div>


            </section>
        </footer>
    );
}

export default Footer;
