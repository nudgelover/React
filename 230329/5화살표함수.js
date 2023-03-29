let rect = [
  {w: 5, h: 4},
  {w: 15, h: 14},
  {w: 5, h: 4},
  {w: 5, h: 4},
  {w: 5, h: 4},
];

let r = rect.map((r) => {
  r.len = (r.w + r.h) * 2;
  r.surface = r.w * r.h;
  return r;
});

console.log(r);
console.log(rect);
