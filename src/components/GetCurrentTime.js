//function of getting current time
function GetCurrentTime() {
  let now = new Date();
  let result = now.toLocaleString();
  result = result.replace(new RegExp("/", "g"), ".");
  result = result.replace(new RegExp(",", "g"), "");
  result = result.substring(0, 16);
  return result;
}

export default GetCurrentTime();
