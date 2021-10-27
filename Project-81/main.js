canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.storkestyle = "blue";
ctx.linewidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.storkestyle = "black";
ctx.linewidth = 5;
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.storkestyle = "red";
ctx.linewidth = 5;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.storkestyle = "yellow";
ctx.linewidth = 5;
ctx.arc(300,250,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.storkestyle = "green";
ctx.linewidth = 5;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();