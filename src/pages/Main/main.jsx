import './main.scss';


function Main() {
	return (
        <section className="main">
            <img className='main__img' src="/images/main.png" alt="fields" />
            <div className="main__block">
                <h3 className="point">Illustration</h3>
                <h1 className="main__block-title ">Japan House opens in mountainside to foster peak creativity.</h1>
                <p className="main__block-description">Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
                <p className="author">By Reta Torphy</p>
            </div>
            <div className="rectangle"></div>
        </section>
    );
}

export default Main;
