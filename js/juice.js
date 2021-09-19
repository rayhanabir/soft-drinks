const loadJuice = async () => {
    toggleSpinner('block')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    if(searchText ==''){
        alert(' please input something')
    }
    else{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`

        const res = await fetch(url)
        const data = await res.json()
        if(data.drinks){
            showJuice(data.drinks)
            console.log(data.drinks);
        }
        else{
            document.getElementById('warning-text').style.display = 'block !important'
        }
       

        // fetch(url)
        // .then(res => res.json())
        // .then(data => showJuice(data.drinks))
       
    } 
};

//toggle spinner

const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}

//hide privius data

const toggleSearchResult = displayStyle =>{
    document.getElementById('card-container').style.display = displayStyle;
}
    //show juice in ui
const showJuice = (juices) =>{

        toggleSpinner('block')
        
        const cardContainer = document.getElementById('card-container');
        juices.forEach( juice =>{
            const div = document.createElement('div');
            div.classList.add('card')
            div.innerHTML =`
                <img class="img-fluid" src="${juice.strDrinkThumb}">
                <div class="card-body">
                <h5 class="card-title">${juice.strDrink}</h5>
                <p class="card-text">${juice.strInstructions}</p>
                <a href="#" onclick="loadDetails(${juice.idDrink})" class="btn btn-primary">Show Details</a>
              </div>
            `;
            cardContainer.appendChild(div)
            toggleSpinner('none')
            
        })
   
    
  
}

const loadDetails = async id =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url)
    const data = await res.json()
    showDetails(data.drinks[0])
    // fetch(url)
    // .then(res => res.json())
    // .then(data => showDetails(data.drinks[0]))
};

//display single juice details

const showDetails =(juice) =>{
    const jusiceDetails = document.getElementById('juice-details');
    jusiceDetails.textContent ='';
    const singleCard = document.createElement('div')
    singleCard.classList.add('card')
    singleCard.innerHTML = `
        <img class="img-fluid" src="${juice.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Category: ${juice.strCategory}</h5>
            <p class="card-text">${juice.strInstructionsIT}</p>
            <p class="card-text">${juice.strDrink}</p>
        </div>
    `;
    jusiceDetails.appendChild(singleCard);
};