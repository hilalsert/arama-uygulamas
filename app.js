const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const pictureList = document.querySelector(".pictureList");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit" , search);
    clearButton.addEventListener("click", clear);
}

function clear(){
    searchInput.value="";
    //Array.from(pictureList.children).forEach((child)=>child.remove())
    pictureList.innerHTML="";

}

function search(e){

    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}` ,{
        method : "GET",
        headers: {
            Authorization: "Client-ID cHZA9oW5IdiStJOPLnl8r1sd9Fw0kuKzlEN_kQx8deA"
        }

    })

    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            //console.log(image.urls.small)
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=> console.log(err));


    e.preventDefault();
}

function addImageToUI(url){
    console.log(pictureList)
    const div = document.createElement("div");
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height='400';
    img.weight='400';

    div.append(img);
    pictureList.append(div);

}


