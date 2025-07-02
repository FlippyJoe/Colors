# 🎨 Dynamic Mouse-Responsive Background with Contrast-Aware Text

This script adds a fun, interactive twist to your webpage: as the user moves their mouse, the background color shifts in real-time. To ensure text remains legible, the script dynamically calculates brightness and adjusts text color (black or white) for optimal contrast.

## 🚀 Features

- 🎯 Real-time background color generation based on mouse coordinates
- 🌓 Adaptive text color using perceived brightness
- 💬 Live display of the current RGB color code

---

## 💡 How It Works

1. **Track Mouse Movement**  
   Captures the cursor's X and Y position relative to the window size.

2. **Map to RGB**

   - **X** controls the red channel
   - **Y** controls the green channel
   - **Blue** is randomized for flair

3. **Calculate Brightness**  
    Uses a weighted brightness formula based on human visual sensitivity:
   Brightness = (299 × R + 587 × G + 114 × B) / 1000

4. **Set Contrast Color**

- Brightness > 125 → `black` text
- Brightness ≤ 125 → `white` text

---

## 📦 Code

```js
document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = e.clientX;
  const y = e.clientY;

  const red = Math.round((x / innerWidth) * 255);
  const green = Math.round((y / innerHeight) * 255);
  const blue = Math.round(Math.random() * 255);

  function getContrastColor(r, g, b) {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "black" : "white";
  }

  const contrastColor = getContrastColor(red, green, blue);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.color = contrastColor;

  const colorCode = document.querySelector(".colorCode");
  colorCode.textContent = `Your color code is: rgb(${red}, ${green}, ${blue})`;
});
```
