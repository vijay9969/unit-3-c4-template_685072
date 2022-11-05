// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/fetch.js";

// console.log(navbar)
document.getElementById("navbar").innerHTML=navbar;

// import query from "./index.js";
// console.log(query);

let query  =  document.getElementById("search_input").value ||JSON.parse(localStorage.getItem("query"));

console.log("Query:",query);
let url = `https://masai-api.herokuapp.com/news?q=${query}`;

let getData = async (url) =>{
    let res = await  fetch(url);
    let data = await res.json();
   append(data.articles);
 
}

getData(url);
let append = (data)=>{
    console.log(data);
    let results = document.getElementById("results");
    results.innerHTML = null;
data.forEach((el) => {
    
    let div = document.createElement("div");
    div.setAttribute("class","news");
    div.addEventListener("click",function(){
        DisNews(el);
    });
    let img = document.createElement("img");
    img.src = el.urlToImage;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let dicription  = document.createElement("p");
    dicription.innerText  = el.description;

    div.append(img,title,dicription);
    results.append(div);

});
}
function DisNews(el){
    console.log("el:",el);
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href = "news.html";
}

document.getElementById("search_input").addEventListener("keypress",EnterSearch);

function EnterSearch(event){
   
    if(event.key === "Enter"){
        let query = document.getElementById("search_input").value;
       localStorage.setItem("query",JSON.stringify(query));
        window.location.href = "search.html"; 
    }
    
}