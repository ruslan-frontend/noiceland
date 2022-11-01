import './firstBlockCard.scss';

function FirstBlockCard( { img, point, title, author } ) {
	return (
        <div className="firstBlockCard">
            <img src={img} alt="" className="firstBlockCard__img" />
            <h3 className="point">{point}</h3>
            <h2 className="card-title" id='big'>{title}</h2>
            <p className="author">{author}</p> 
        </div>
    );
}

export default FirstBlockCard;