var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var btn = document.querySelector("button");


console.log(css,color1,color2,body,btn);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setGradient () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

// btn.addEventListener("click", function(){
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var r1 = Math.floor(Math.random() * 256);
//     var g1 = Math.floor(Math.random() * 256);
//     var b1 = Math.floor(Math.random() * 256);
//     console.log(r,g,b);
//     console.log(r1,g1,b1);
//     body.style.background = "linear-gradient(to right, rgb(" +
//                                 r + ", " + g + ", " + b + "), " +"rgb(" +
//                                 r1 + ", " + g1 + ", " + b1 + "))"
    
    
    
// })

function randomColor() {
    
        
        
        var r =  Math.floor(Math.random() * 256);
        var g =  Math.floor(Math.random() * 256);
        var b =  Math.floor(Math.random() * 256);
        
        var r2 =  Math.floor(Math.random() * 256);
        var g2 =  Math.floor(Math.random() * 256);
        var b2 =  Math.floor(Math.random() * 256);
        
    
    body.style.background = "linear-gradient(to right, rgb(" +
                                r + ", " + g + ", " + b + "), " +"rgb(" +
                                r2 + ", " + g2 + ", " + b2 + "))"


}

btn.addEventListener("click", randomColor);











