document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = e.clientX;
  const y = e.clientY;

  // Define the 3 colors for rgb()
  const red = Math.round((x / innerWidth) * 255);
  const green = Math.round((y / innerHeight) * 255);
  const blue = Math.round(Math.random() * 255);

  // Use luminance formula to ensure text visibility
  function getContrastColor(r, g, b) {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "black" : "white";
  }
  // Add the colors as arguments to getContrastColor(r,g,b) function
  const contrastColor = getContrastColor(red, green, blue);

  // Set the dynamically changing background color
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Define the div for the color code and add the code as textContent
  const colorCode = document.querySelector(`.colorCode`);
  colorCode.textContent = `Your color code is: rgb(${red}, ${green}, ${blue})`;

  // Set the brightness of the text
  document.body.style.color = contrastColor;
});
