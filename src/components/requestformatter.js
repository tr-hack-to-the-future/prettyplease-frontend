export function getFormattedDuration(duration = 0) {
  return duration === 1 ? duration + " year" : duration + " years";
}

export function getFormattedAmount(amount = 0) {
  return "£" + amount;
}

export function getFormattedPlural(text = "", count = 0) {
  return count === 1 ? text : text + "s";
}
