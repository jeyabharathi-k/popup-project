
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
var cancelpopup=document.getElementById("cancel-popup")
var addk=document.getElementById("addbook")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}
)
 cancelpopup.addEventListener("click",function(event){
   Event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}
)
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
 addk.addEventListener("click",function(event){
  Event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>{booktitleinput.value}</ht2>`
    `<h5>${bookauthorinput.value}</h5>`
    `<p>${bookdescriptioninput.value}</P>`
    `<button onclick="delete-book(event)">delete</button>`
popupoverlay.style.display="none"
    popupbox.style.display="none"
    container.append(div)
 })
  function deletebook(event){
    event.target.parentElement.remove()
 }
    
