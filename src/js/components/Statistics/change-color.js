export default function changeColor() {
  let r = Math.floor(Math.random(2) * 250);
  let g = Math.floor(Math.random(2) * 250);
  let b = Math.floor(Math.random(2) * 250);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
