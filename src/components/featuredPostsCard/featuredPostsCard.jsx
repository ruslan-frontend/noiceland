import './featuredPostsCard.scss';

function FeaturedPostsCard( { img, point, title, author } ) {
	return (
        <div className="fpCard">
            <img src={img} alt="" className="fpCard__img" />
            <h3 className="fpCard__point point">{point}</h3>
            <h2 className="fpCard__title card-title">{title}</h2>
            <p className="fpCard__author author">{author}</p> 
        </div>
    );
}

export default FeaturedPostsCard;