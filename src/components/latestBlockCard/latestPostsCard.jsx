import './latestPostsCard.scss';

function LatestPostsCard( { img, point, title, author } ) {
	return (
        <div className="latestPostCard">
            <img src={img} alt="" className="latestPostCard__img" />
            <h3 className="point">{point}</h3>
            <h2 className="card-title" id='small'>{title}</h2>
            <p className="author">{author}</p> 
        </div>
    );
}

export default LatestPostsCard;