let numOfItems = 1;

const makePottery = (shape, weight, height) => {
    const newPottery = {
        id: numOfItems,
        shape: shape,
        weight: weight,
        height: height
    }
    numOfItems ++
    return newPottery;
}

module.exports = {makePottery}