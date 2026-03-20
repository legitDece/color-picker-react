import { useState, useMemo } from 'react'


//an array of 50 random colours and their closest color names, hardcoded
const fullColorList = [
  {"hex":"#E43D79","name":"Raspberry Blaze"},
  {"hex":"#4B8EE8","name":"Ocean Gleam"},
  {"hex":"#9ECB3A","name":"Limeburst"},
  {"hex":"#D95E1E","name":"Autumn Ember"},
  {"hex":"#12B1A0","name":"Aqua Tide"},
  {"hex":"#6346C8","name":"Violet Flux"},
  {"hex":"#F2C85D","name":"Sand Dune"},
  {"hex":"#3F2F1A","name":"Coffee Bark"},
  {"hex":"#F57C44","name":"Coral Ember"},
  {"hex":"#70C3FF","name":"Sky Ripple"},
  {"hex":"#4CAF4C","name":"Meadow Mint"},
  {"hex":"#E847B8","name":"Fuchsia Spark"},
  {"hex":"#7A4E2F","name":"Rustic Wood"},
  {"hex":"#1E354F","name":"Deep Harbor"},
  {"hex":"#F4FCE4","name":"Spring Dew"},
  {"hex":"#BC4E8D","name":"Mulberry Frost"},
  {"hex":"#2F7F66","name":"Forest Spring"},
  {"hex":"#C08EC5","name":"Orchid Haze"},
  {"hex":"#FFB16D","name":"Apricot Kiss"},
  {"hex":"#5577E2","name":"Dusk Lagoon"},
  {"hex":"#D94A21","name":"Ember Flame"},
  {"hex":"#A7D9A8","name":"Mint Whisper"},
  {"hex":"#311E4A","name":"Midnight Plum"},
  {"hex":"#8DDCDC","name":"Glacier Mist"},
  {"hex":"#F16F90","name":"Sunset Petal"},
  {"hex":"#4F803F","name":"Pine Grove"},
  {"hex":"#CB6A1A","name":"Copper Dawn"},
  {"hex":"#9B4FEC","name":"Amethyst Glow"},
  {"hex":"#F8E1A1","name":"Buttercream"},
  {"hex":"#2C4A92","name":"Indigo Peak"},
  {"hex":"#58A27E","name":"Jade Stream"},
  {"hex":"#DC2D23","name":"Cardinal Flame"},
  {"hex":"#B2C7F0","name":"Cloud Veil"},
  {"hex":"#69454D","name":"Plum Stone"},
  {"hex":"#F7C4A1","name":"Peach Perfume"},
  {"hex":"#22A7BF","name":"Tropical Wave"},
  {"hex":"#907038","name":"Amber Clay"},
  {"hex":"#E05EAD","name":"Pink Radiance"},
  {"hex":"#5E887D","name":"Slate Fern"},
  {"hex":"#FFCF77","name":"Golden Halo"},
  {"hex":"#3A62CE","name":"Electric Royal"},
  {"hex":"#97B34C","name":"Basil Leaf"},
  {"hex":"#DA996D","name":"Cinnamon Blush"},
  {"hex":"#1DBFBB","name":"Caribbean Tide"},
  {"hex":"#833B9A","name":"Purple Orchid"},
  {"hex":"#E0E8FA","name":"Frosted Whisper"},
  {"hex":"#C84270","name":"Berry Fusion"},
  {"hex":"#47A351","name":"Emerald Grove"},
  {"hex":"#FD9B42","name":"Marigold Flame"},
  {"hex":"#5C5D77","name":"Stormy Slate"}
]
//choose 6 colors with their names at random from fullColorList
function generateRandomColors() {
  const shuffled = fullColorList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}

export default function ColorPicker() {

const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
const [focusedIndex, setFocusedIndex] = useState(null);
const [hoveredColor, setHoveredColor] = useState(null);
const [regenerateKey, setRegenerateKey] = useState(0);

const colors = useMemo(() => [
  ...generateRandomColors()
  
], [regenerateKey]);


function handleClick(color) {
  setSelectedColor(color);
}
function handleMouseEnter(color) {
  setHoveredColor(color);
}
function handleMouseLeave() {
  setHoveredColor(null);
}
function handleFocus(index) {
  setFocusedIndex(index);
}
function handleBlur() {
  setFocusedIndex(null);
}
function handleKeyDown(e, index) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick(colors[index]);
  }
}
function handleRegenerate() {

  setRegenerateKey(prev => prev + 1);
}


return <div className="color-picker">
  <h1>Color Picker</h1>
  <div className="color-list">
    {colors.map((color, index) => (
      <div
        key={index}
        className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
        style={{ backgroundColor: color.hex }}
        onClick={() => handleClick(color)}
        onMouseEnter={() => handleMouseEnter(color)}
        onMouseLeave={handleMouseLeave}
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={0}
      >
        {hoveredColor?.hex === color.hex && (
          <span className="color-code">{color.hex}</span>
        )}
        {selectedColor.hex === color.hex && (
          <span className="color-code">{selectedColor.name || color.name}</span>
        )}
      </div>
    ))}
  </div>
    <button onClick={handleRegenerate} className="regenerate-btn">Regenerate Colors</button>

</div>

}