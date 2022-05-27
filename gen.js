//TOGGLE THEME
document.body.classList.toggle('dark');
const check = document.getElementById('check');
// check.checked = true;
// check.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });

//RANDOM PASSWORD of 12 Characters
var btn = document.querySelector('#btn');
var pwd1 = document.querySelector('#pwd1');
var pwd2 = document.querySelector('#pwd2');
var pwd3 = document.querySelector('#pwd3');
var pwd4 = document.querySelector('#pwd4');
let randomSet = [];
const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
             'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
             'a','b','c','d','e','f','g','h','i','j','k','l','m',
             'n','o','p','q','r','s','t','u','v','w','x','y','z',
             '0','1','2','3','4','5','6','7','8','9',
             '!', '#', '$', '%', '&', '(',')','*','+'];


btn.addEventListener("click", function(){
    //remove the ellipsis
    pwd1.textContent = "";
    pwd2.textContent = "";
    pwd3.textContent = "";
    pwd4.textContent = "";
    //assign each pwd a set of 12 random picks
    for (let i = 0; i < 12; i++) {
        pwd1.textContent += randomChar();
        pwd2.textContent += randomChar();
        pwd3.textContent += randomChar();
        pwd4.textContent += randomChar();
    }
    //allow user to copy password onclick
    var copy = document.getElementsByClassName("pwd"); //creates a HTMLCollection of the 4 Divs
    //convert HTMLCollection to Array
    var arr = [].slice.call(copy);
    arr.forEach(element => {
        element.addEventListener("click", function(){
            var range = document.createRange();
            range.selectNode(element);
            window.getSelection().removeAllRanges(); // clear current selection
            window.getSelection().addRange(range); // to select text
            document.execCommand("copy");
            window.getSelection().removeAllRanges();// to deselect
            //display "copied" message
            setTimeout( function() {
                document.getElementById("custom-tooltip").style.display = "inline";
            }, 500);
            document.getElementById("custom-tooltip").setAttribute("class", "fade");
            setTimeout( function() {
                document.getElementById("custom-tooltip").style.display = "none";
            }, 3000);
        });
    });
    
})

//pick a random index of the chars array
function randomChar(){
    var pick = chars[Math.floor(Math.random()*chars.length)]; 
    //console.log(pick)
    return pick; 
}
