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
