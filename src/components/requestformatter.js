
export function getFormattedDuration(duration) {
    return duration === "1" ? duration + " year" : duration + " years";
}

export function getFormattedAmount(amount) {
    return "£" + amount;
}

