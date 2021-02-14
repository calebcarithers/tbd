import makeImage from "./makeImage.js"

const canvas = document.getElementById("canvas");
canvas.width = 10000; //document.width is obsolete
canvas.height = 10000; //document.height is obsolete
console.log("canvas", canvas);

if (canvas.getContext) {
    var ctx = canvas.getContext("2d")
}

document.addEventListener("click", function (e) {
    const {x,y} = getMousePosition(canvas,e);
    fetch("http://localhost:5000/position/test", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({x_pos: x, y_pos: y})
    })
        .then(res => {
            console.log("res", res)
            makeImage(
                ctx,
                x,
                y,
                "https://whyy.org/wp-content/uploads/2019/08/bigstock-Rubber-Stamp-And-Word-Fake-Pri-272426671.jpg",
            )
        })
        .catch(e => console.log("error", e))
});

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("CLICK EVENT " + "Coordinate x: " + x, "Coordinate y: " + y);
    return {x, y}
}

document.addEventListener("keydown", function (e) {

})