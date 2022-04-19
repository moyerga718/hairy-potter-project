let numOfItems = 1;

export const makePottery = (shape, weight, height) => {
    const newPottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: numOfItems,
    }
    numOfItems ++
    return newPottery;
}

