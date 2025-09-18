//window.alert("hello");
//console.log("hello world")
//document.write("<h1>maryam abdelbaki</h1>");
//let name='i love java script'

//console.log(name)
/*
console.log(name.repeat(3))
console.log(name[10]);
console.log(name.charAt(10));
*/
/*
console.log(name.endsWith('t'))
console.log(name.endsWith('e',2))
console.log(name.endsWith('j',8))
*/
//let names=['ahmed','ali','mazen','gamal']

//console.log(names.slice(-2))
//console.log(names)
const signup=document.querySelector('.sign_up');
const signin=document.querySelector('.sign_in');
const info=document.querySelector('.info');
signup.addEventListener('click',() => {
    info.classList.toggle('active');
});


