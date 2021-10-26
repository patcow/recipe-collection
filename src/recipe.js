const Recipe = ({name, instructions}) => {
    return(
        <div>
            <h3>
                {name}
            </h3>
            <p>
                {instructions}
            </p>

        </div>
    )
}

export default Recipe;