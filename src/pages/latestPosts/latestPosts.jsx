import LatestPostsCard from "../../components/secondBlockCard/latestPostsCard";
import './latestPosts.scss';

function LatestPosts() {
	return (
        <section className="latestPosts">
            <div className="rectangle"></div>
            <h3 className="latestPosts__title card-title">LATEST POSTS</h3>
            <div className="latestPosts__flex">
                <LatestPostsCard 
                img = {'/images/main.png'}
                point = {'Illustration'} 
                title = {'Japan House opens in mountainside to foster peak creativity'}
                author = {'By Reta Torphy'}
                />
                <LatestPostsCard 
                img = {'/images/cards/1.png'}
                point = {'Photography'} 
                title = {'Helmut Lang celebrates taxi drivers worldwide in latest campaign'}
                author = {'By Alessandra Ortiz'}
                />
                <LatestPostsCard 
                img = {'/images/cards/2.png'}
                point = {'Photography'} 
                title = {'Bowlcut launch a new summer collection that pays homage to “UK legends”'}
                author = {'By Rosanna Ondricka'}
                />
                <LatestPostsCard 
                img = {'/images/cards/3.png'}
                point = {'Photography'} 
                title = {'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn'}
                author = {'By Annie Lueilwitz'}
                />
                <LatestPostsCard 
                img = {'/images/cards/4.png'}
                point = {'Interactive Design'} 
                title = {'London-based Yinka Ilori’s storytelling furniture'}
                author = {'By Annie Lueilwitz'}
                />
                <LatestPostsCard 
                img = {'/images/cards/5.png'}
                point = {'Graphic Design'} 
                title = {'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck'}
                author = {'By Simeon Brekke'}
                />
                <LatestPostsCard 
                img = {'/images/cards/6.png'}
                point = {'Architecture'} 
                title = {'Suzanne Saroff’s meticulously arranged photographs alter perceptions'}
                author = {'By Reta Torphy'}
                />
                <LatestPostsCard 
                img = {'/images/cards/7.png'}
                point = {'Graphic Design'} 
                title = {'Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches'}
                author = {'By Leo Bartell'}
                />
            </div>
            <button className="latestPosts__button">
                view all latest posts
            </button>
        </section>
    );
}

export default LatestPosts;