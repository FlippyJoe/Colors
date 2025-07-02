🎨 Dynamic Background with Contrast-Aware Text
This JavaScript snippet creates a playful, responsive background effect that tracks the user's mouse movement, 
generating dynamic RGB color changes. To ensure text visibility, it uses a luminance-based algorithm to toggle 
between black and white text based on background brightness.

🚀 Features
🎯 Real-time background color changes based on mouse position
🌓 Automatic text color adjustment (black/white) for readability
💬 Live RGB color display

🔧 How It Works

Mouse Tracking 
The script listens to mousemove events and captures cursor coordinates.

Color Mapping
x position → Red (0–255)
y position → Green (0–255)
Random value → Blue (0–255)

Luminance Calculation 
To ensure text contrast, the script uses this brightness formula:

Brightness = (299 ⋅ 𝑅 + 587 ⋅ 𝐺 + 114 ⋅ 𝐵) / 1000
This approximates human perception of brightness.

Adaptive Text Color 
If brightness > 125 → use black text Otherwise → use white text

