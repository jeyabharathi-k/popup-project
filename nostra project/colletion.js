var productContainer = document.getElementById("search")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
 
search.addEventListener("keyup",function(){
var enteredValue=event.target.value.touppercase()
  

for( var i=0;i<productlist.length;i++){
    var productname=productlist[count].querySelector("p").textcontent
}
if(productname.toUppercase().indexof(enteredValue),0){
    productlist.style.display="none"
}
else{
    productlist.style.display="block"
}
    }
)