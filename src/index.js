import './scss/style.scss'

export function FetchRecipe() {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=908fcb88&app_key=326171ee0f35f5aae421515d8b452ce9', {
        method: 'GET',
        headers: {
            'Edamam-Account-User' : 'Caobara'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
FetchRecipe()