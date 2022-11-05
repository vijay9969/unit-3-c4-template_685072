// Ude Import export (MANDATORY)
import navbar from "../components/fetch.js";

// console.log(navbar)
document.getElementById("navbar").innerHTML=navbar;


let data = JSON.parse(localStorage.getItem("news"));

let append = (data)=>{
    console.log(data);
    let results = document.getElementById("detailed_news");
    results.innerHTML = null;
    
    let div = document.createElement("div");
    div.setAttribute("class","news");
    let img = document.createElement("img");
    img.src = data.urlToImage;

    let title = document.createElement("h3");
    title.innerText = data.title;

    let dicription  = document.createElement("p");
    dicription.innerText  = data.description;

    div.append(img,title,dicription);
    results.append(div);
}
append(data);
document.getElementById("search_input").addEventListener("keypress",EnterSearch);

function EnterSearch(event){
   
    if(event.key === "Enter"){
        let query = document.getElementById("search_input").value;
       localStorage.setItem("query",JSON.stringify(query));
        window.location.href = "search.html"; 
    }
    
}