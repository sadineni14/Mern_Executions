
function convert(){
    let cm = document.getElementById("cm").value
    let inches = cm / 2.54
    document.getElementById("inches").innerText =
        cm + " cm = " + inches + " inches"
}
let x=document.getElementById("out")
x.addEventListener("dblclick",function(){
    console.log("Button clicked")
    console.log(alert("You double clicked the output area"))
})
let y=document.getElementById("out")
y.addEventListener("mouseenter",function(){
    console.log("Mouse entered")    
    console.log(alert("You entered the output area"))
})
let z=document.getElementById("out")
z.addEventListener("mouseleave",function(){
    console.log("Mouse left")    
    console.log(alert("You left the output area"))
})