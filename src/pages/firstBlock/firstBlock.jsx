import FirstBlockCard from '../../components/firstBlockCard/firstBlockCard';
import './firstBlock.scss';

function FirstBlock() {
	return (
        <section className="firstBlock">
            <FirstBlockCard 
            size = {'small'}
            img = {'/images/cards/1.png'}
            point = {'Photography'} 
            title = {'Helmut Lang celebrates taxi drivers worldwide in latest campaign'}
            author = {'By Alessandra Ortiz'}
            />
            <FirstBlockCard 
            img = {'/images/cards/2.png'}
            point = {'Photography'} 
            title = {'Bowlcut launch a new summer collection that pays homage to “UK legends”'}
            author = {'By Rosanna Ondricka'}
            />
            <FirstBlockCard 
            img = {'/images/cards/3.png'}
            point = {'Photography'} 
            title = {'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn'}
            author = {'By Annie Lueilwitz'}
            />
            <FirstBlockCard 
            img = {'/images/cards/4.png'}
            point = {'Interactive Design'} 
            title = {'London-based Yinka Ilori’s storytelling furniture'}
            author = {'By Annie Lueilwitz'}
            />
            <FirstBlockCard 
            img = {'/images/cards/5.png'}
            point = {'Graphic Design'} 
            title = {'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck'}
            author = {'By Simeon Brekke'}
            />
            <FirstBlockCard 
            img = {'/images/cards/6.png'}
            point = {'Architecture'} 
            title = {'Suzanne Saroff’s meticulously arranged photographs alter perceptions'}
            author = {'By Reta Torphy'}
            />
        </section>
    );
}

export default FirstBlock;
