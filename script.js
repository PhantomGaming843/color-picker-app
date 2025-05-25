const colorInput = document.getElementById("colorInput");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const copyBtn = document.getElementById("copyBtn");

colorInput.addEventListener("input", () => {
  const hex = colorInput.value;
  hexCode.textContent = hex;
  const rgb = hexToRgb(hex);
  rgbCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent);
  alert("Copied to clipboard!");
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}
