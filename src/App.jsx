import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import FeaturedPosts from './pages/featuredPosts/featuredPosts';
import FirstBlock from './pages/firstBlock/firstBlock';
import LatestPosts from './pages/latestPosts/latestPosts';
import Main from './pages/Main/main';

function App() {
	return (
        <>
            <Header />
            <Main />
            <FirstBlock />
            <LatestPosts/>
            <FeaturedPosts />
            <Footer />
        </>
    );
}

export default App;
