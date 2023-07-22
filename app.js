console.log('whatever')

var searchTermElem = document.getElementById("searchTermButton");


testFunction = function(){
    console.log('whatever')
};
//searchTermElem.onclick(alert("WOW!"));

searchTermElem.addEventListener("click", testFunction);

