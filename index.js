function distanceFromHqInBlocks(block) {
    return Math.abs(block-42);
}

function distanceFromHqInFeet(block) {
    return (distanceFromHqInBlocks(block)*264);
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination-start);
    const feet = distance * 264;
    return feet;
}

function calculatesFarePrice(start, destination) {
    let cost;
    const distance = Math.abs(destination-start)*264;
    if (distance < 400) {
        cost = 0;
    } else if (distance < 2000) {
        cost = (distance-400)*0.02;
    } else if (distance <= 2500) {
        cost = 25;
    } else if (distance > 2500) {
        cost = "cannot travel that far";
    }
    return cost;
}