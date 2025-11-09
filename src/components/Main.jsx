export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    const ingredientListItem = ingredients.map(ingredients => (<li key={ingredients}>{ingredients}</li>))
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');
    }


    return(<form onSubmit={handleSubmit}>
        


    </form>);
}

