const Card = (props: any) => {
    return (
        <div className="tile is-parent">
            <article className="tile is-child box">
                <p className="title">{ props.title }</p>
                <p className="subtitle">{ props.subTitle }</p>
            </article>
        </div>        
    )
}

export default Card;