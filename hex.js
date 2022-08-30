const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
// # from 0 to 9 and from A to F #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});