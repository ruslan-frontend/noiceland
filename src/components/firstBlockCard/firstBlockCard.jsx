import './firstBlockCard.scss';

function FirstBlockCard( { img, point, title, author } ) {
	return (
        <div className="fbCard">
            <img src={img} alt="" className="fbCard__img" />
            <h3 className="fbCard__point point">{point}</h3>
            <h2 className="fbCard__title card-title">{title}</h2>
            <p className="fbCard__author author">{author}</p> 
        </div>
    );
}

export default FirstBlockCard;