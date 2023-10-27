const getColor = () =>{
    const red =   Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue =  Math.floor(Math.random()*256);
    const color = "rgb(" + red +","+ green +","+ blue + ")"
    // Below is advance method of generating a string for color
// const color = `rgb(${red} , ${green} , ${blue})`;
document.body.style.backgroundColor = color;
document.getElementById("color-code").innerHTML=color;
}; 

document.getElementById("btn").addEventListener(
    "click" , getColor
)
 getColor();
