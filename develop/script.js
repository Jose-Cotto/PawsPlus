
APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"


document.querySelector("#search-button").addEventListener("click", function(){
    var searchInput = document.querySelector("#search-input").value; 
        if (searchInput === "") {
        alert("enter a pet breed!")
        return;
    }
    callWiki()
    
})

function callWiki(breed) {
    var wikiUrl = "https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=" + breed + "&limit=10" + APIKey

    fetch(wikiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var petInfoLink = document.querySelector("#pet-info-link");
        if (data.pages.length > 0) {
            var pageTitle = data.pages[0].title;
            var pageUrl = "https://en.wikipedia.org/wiki/" + pageTitle;
            petInfoLink.innerHTML = ``;
        } else {
            petInfoLink.innerHTML = "No results found";
        }
    })
}


