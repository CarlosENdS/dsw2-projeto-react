import './CardGame.css'

const CardGame = ({ image, title, description }) => {
    return (
        <div className="card-game">
            <img src={image} alt={title}/>
                <h4 >{title}</h4>
                <p>
                    {description}
                </p>
        </div>
    )
}

export default CardGame;