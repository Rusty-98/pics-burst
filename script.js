var crsr = document.querySelector("#cursor");

function mousepointer(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(`#cursor`).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
mousepointer();
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;

            return func(...args);
        }
    }
}

const arr =[
    "images\\1.jpg",
    "images\\2.jpg",
    "images\\3.jpg",
    "images\\4.jpg",
    "images\\5.jpg",
    "images\\6.jpg",
    "images\\7.jpg",
    "images\\8.jpg",
    "images\\9.jpg",
    "images\\10.jpg",
    "images\\11.jpg",
    "images\\12.jpg",
    "images\\13.jpg",
    "images\\8.jpg",
    "images\\9.jpg",
    "images\\10.jpg",
    "images\\11.jpg",
    "images\\12.jpg",
    "images\\13.jpg"
 ]
 let prevMouseX = 0;

function getRan(){
    return Math.floor(Math.random()*arr.length);
} 


document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
    var hell = document.createElement("div");
    hell.classList.add("img-div");
    hell.style.left = dets.clientX + "px";
    hell.style.top = dets.clientY - 230 + "px";

    var diff = dets.clientX - prevMouseX;
    prevMouseX = dets.clientX;
    var rota = gsap.utils.clamp(-20,20,diff);

    gsap.to(hell, {
        rotate: rota, // Set the transform origin to the center
    });
    

    var image = document.createElement("img");
    image.setAttribute("src", arr[getRan()]);
    hell.appendChild(image);

    document.body.appendChild(hell);
    var diff = dets.clientX - rotate;
    var rotate = dets.clientX;
    

    gsap.to(image,{
        y:"0",
        scale:1,
        duration:0.5,
    })
    gsap.to(image,{
        y:"120%",
        scale:1.3,
        delay:0.8,
        
    })
    setTimeout(function(){
        hell.remove();
    },1300)
},150)
);