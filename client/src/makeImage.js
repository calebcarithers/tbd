const makeImage = (context, x, y, image) => {
    const img = new Image();
    img.src = image;
    const size = Math.floor(Math.random() * 500) + 100;
    img.onload = () => {
        context.drawImage(img, x, y, size, size)
    }
}

export default makeImage
