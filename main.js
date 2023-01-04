//getting the totale
var tt=document.getElementById("total");
// console.log(tt);
//getting button
var plusBtns=document.getElementsByClassName("plus");

for(let btn of plusBtns){
btn.addEventListener(    "click",function(){
      var itemName = btn.getAttribute("name");
      
      //getting price
      var price = document.getElementById(itemName + "_price").innerHTML;
      //console.log(price);
      //getting the quantity
      var qty = document.getElementById(itemName + "_qty");
      //console.log(qty)
      //incrémenter the quantity
      qty.innerHTML++;
      total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
} )  

}


// minus btns 
var minusBtns = document.getElementsByClassName("minus");
//getting buttonvar plusBtns=document.getElementsByClassName("plus");

for(let btn of minusBtns){
btn.addEventListener(    "click",function(){
      var itemName = btn.getAttribute("name");
      
      //getting price
      var price = document.getElementById(itemName + "_price").innerHTML;
      //console.log(price);
      //getting the quantity
      var qty = document.getElementById(itemName + "_qty");
      //console.log(qty)
      //incrémenter the quantity
      if(qty.innerHTML>0){

        qty.innerHTML--;
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
      }else{
        alert("quantity cannot be negative ")
      }
} )  

}
var hearts=document.querySelectorAll(".heart");
// console.log(hearts)
for(let heart of hearts){
    heart.addEventListener("click",function(){
if(heart.getAttribute("fill"=="grey"))
{heart.setAttribute("fill","red")}
else{heart.setAttribute("fill","red")}
    })}
    
///bouton supprimer
var btn_supprimer =document.querySelectorAll(".btn_supp");
//console.log(btn_supprimer);
for(let btns of btn_supprimer){
  btns.addEventListener("click",function(){
    var name_ps=btns.name;
    var produit_supprimer=document.querySelectorAll(name_ps);
    produit_supprimer.remove();
  })
}
  