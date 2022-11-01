import './latestPostsCard.scss';

function LatestPostsCard( { img, point, title, author } ) {
	return (
        <div className="lpCard">
            <img src={img} alt="" className="lpCard__img" />
            <h3 className="lpCard__point point">{point}</h3>
            <h2 className="lpCard__title card-title">{title}</h2>
            <p className="lpCard__author author">{author}</p> 
        </div>
    );
}

export default LatestPostsCard;