# Color Picker React App

A small React application built with Vite for selecting and copying colors in RGB / Hex formats.

This was completed as part of a project for Codedex React course. I updated it slightly from the requirements to choose randomly from a set of 50 colours, and added a button to regenerate the colours. 

## Features

- Click or drag inside the color canvas to pick a hue + saturation.
- Use a slider for lightness/value control.
- Toggle between Hex and RGB output.
- Click to copy the current color code.
- Live preview box updates while interacting.

## Project structure

- `src/main.jsx` – app entry point
- `src/App.jsx` – main UI wrapper
- `src/ColorPicker.jsx` – custom color picker component and logic
- `src/index.css`, `src/App.css` – styling for the app

## Get started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start local dev server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in terminal (usually http://localhost:5173).

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Notes

- Designed for demos and learning, not production-critical UI yet.
- Editable in `ColorPicker.jsx` if you want to add alpha channel, saved palettes, or keyboard controls.

