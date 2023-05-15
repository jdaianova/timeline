export default function ValidateUserCoords(str) {
  return /\[-{0,}([\d]+\.[\d]{4,}),\s-{0,}([\d]+\.[\d]{4,})\]/.test(str);
}
