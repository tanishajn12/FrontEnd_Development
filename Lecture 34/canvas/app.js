let canvas=document.querySelector('canvas');
let ctx=canvas.getContext("2d");


// ctx.fillStyle="red";
// ctx.fillRect(50,200,100,200)
// // x coordinate, y coord, width, height


// ctx.strokeStyle="green"
// ctx.strokeRect() //x y width height

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200,100)
ctx.lineTo(200,0)
ctx.lineTo(0,200);
ctx.lineTo(200,200);
ctx.lineTo(400,200);
ctx.stroke();
// ctx.fill();

ctx.closePath();

ctx.font="28px sans-serif";
ctx.fillStyle="blue";
ctx.fillText("tanisha",100,200);
