// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/fetch.js";

// console.log(navbar)
document.getElementById("navbar").innerHTML=navbar;

document.getElementById("search_input").addEventListener("keypress",EnterSearch);

function EnterSearch(event){
   
    if(event.key === "Enter"){
        let query = document.getElementById("search_input").value;
       localStorage.setItem("query",JSON.stringify(query));
        window.location.href = "search.html"; 
    }
    
}
// if(query!==null){

// }

let code = "in"; 

document.getElementById("in").addEventListener("click",India);
function India(){
    code = "in";
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;
    getData(url);
}
document.getElementById("us").addEventListener("click",Usa);
function Usa(){
    code = "us";
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;
    getData(url);
}
document.getElementById("ch").addEventListener("click",China);
function China(){
    code = "ch";
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;
    getData(url);
}
document.getElementById("uk").addEventListener("click",UK);
function UK(){
    code = "uk";
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;
    getData(url);
}
document.getElementById("nz").addEventListener("click",Nzealand);
function Nzealand(){
    code = "nz";
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;
    getData(url);
}


let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code} `;







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
