import FeaturedPostsCard from "../../components/featuredPostsCard/featuredPostsCard";
import './featuredPosts.scss';

function FeaturedPosts() {
	return (
        <section className="featuredPosts">
            <div className="rectangle"></div>
            <h3 className="block-title">featured POSTS</h3>
            <div className="featuredPosts__flex">
                <FeaturedPostsCard 
                img = {'/images/cards/fp1.png'}
                point = {'Graphic Design'} 
                title = {'A Brief History of the FIFA World Cup Logo'}
                author = {'By Clem Onojeghuo'}
                />
                <FeaturedPostsCard 
                img = {'/images/cards/fp2.png'}
                point = {'Graphic Design'} 
                title = {'Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back'}
                author = {'By Alessandra Ortiz'}
                />
                <FeaturedPostsCard 
                img = {'/images/cards/fp3.png'}
                point = {'Photography'} 
                title = {'Fred Rowson directs film for Years and Years'}
                author = {'By Coby Gottlieb'}
                />
                <FeaturedPostsCard 
                img = {'/images/cards/fp4.png'}
                point = {'Illustration'} 
                title = {'M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas'}
                author = {'By Annie Lueilwitz'}
                />
            </div>
        </section>
    );
}

export default FeaturedPosts;