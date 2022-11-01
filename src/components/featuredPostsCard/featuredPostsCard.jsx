import './featuredPostsCard.scss';

function FeaturedPostsCard( { img, point, title, author } ) {
	return (
        <div className="featuredPostCard">
            <img src={img} alt="" className="featuredPostCard__img" />
            <h3 className="point">{point}</h3>
            <h2 className="card-title" id='small'>{title}</h2>
            <p className="author">{author}</p> 
        </div>
    );
}

export default FeaturedPostsCard;
