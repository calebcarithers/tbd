const makeImage = (context, x, y, image) => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
        context.drawImage(img, x, y, 100, 100)
    }
}

export default makeImage
