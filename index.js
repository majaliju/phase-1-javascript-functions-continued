
// write a function called saturdayFun
function saturdayFun(activity) {
    let message;
    if (activity !== undefined) {
        message = `This Saturday, I want to ${activity}!`;
    }
    else {
        activity = "roller-skate";
        message= `This Saturday, I want to ${activity}!`;
    }
    return message;
}


// implement a function expression called mondayWork
const mondayWork = function(activity) {
    let message;
    if (activity !== undefined) {
        message = `This Monday, I will ${activity}.`;
    }
    else {
        activity = "go to the office";
        message= `This Monday, I will ${activity}.`;
    }
    return message;
}

// implement a function called wrapAdjective
function wrapAdjective(adj) {
    const innerFunction = function(phrase){
        return `You are ${adj}${phrase}${adj}!`;
    }
    return innerFunction;
}