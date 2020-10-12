
export function getFormattedDuration(duration = 0) {
    return duration === "1" ? duration + " year" : duration + " years";
}

export function getFormattedAmount(amount = 0) {
    return "£" + amount;
}

