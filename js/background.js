const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg"];

const handleBackground = () => {
  const randomNumber = Math.floor(Math.random() * images.length);
  const img = document.createElement("img");
  img.src = `images/${images[randomNumber]}`;
  document.body.appendChild(img);
};

handleBackground();
