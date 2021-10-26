// App.js
import React from 'react';
import Recipe from "./recipe";

class App extends React.Component {
    state = {
        isAddRecipeFormDisplayed: false,
        recipes: [],
        newRecipeName: "",
        newRecipeInstructions: ""
    }

    handleRecipeInstructionsChange = (event) => {
        const value = event.target.value;

        this.setState({newRecipeInstructions: value});
    }

    handleRecipeNameChange = (event) => {
        const value = event.target.value;

        this.setState({newRecipeName: value});
    }

    submitRecipe = (event) => {
        event.preventDefault()
        this.setState({recipes: [...this.state.recipes,{name: this.state.newRecipeName, instructions :this.state.newRecipeInstructions}]
        })
    }

    toggleAddRecipeForm = () => {
        this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
    }

    render(){
        const addNewRecipeForm = (
            <form id="recipe-form" onSubmit={this.submitRecipe}>
                <label htmlFor="newRecipeName">Recipe name: </label>
                <input type="text"
                       name="newRecipeName"
                       id="newRecipeName"
                       onChange={this.handleRecipeNameChange}
                       value={this.state.newRecipeName} />
                <label htmlFor="newRecipeInstructions">Instructions:</label>
                <textarea name="newRecipeInstructions"
                          id="newRecipeInstructions"
                          placeholder="write recipe instructions here..."
                          onChange={this.handleRecipeInstructionsChange}
                          value={this.state.newRecipeInstructions} />
                <input type="submit" />
            </form>
        )

        return (
            <div className="App">
                <h1 className="App-header">My Recipes</h1>
                {
                    this.state.isAddRecipeFormDisplayed
                        ? addNewRecipeForm
                        : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
                }
                {
                    this.state.recipes.length > 0 ?
                        <>{this.state.recipes.map(
                                (recipe)=> <Recipe name = {recipe.name} instructions = {recipe.instructions} key = {recipe.name}/>
                            )}</>:
                        <p>There are no recipes to list.</p>
                }
            </div>
        )
    }
}

export default App;