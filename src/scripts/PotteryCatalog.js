const uncrackedPottery = []

const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    } else {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false) {
        uncrackedPottery.push(potteryObj)
    }
}

const usePottery = () => {
    const uncrackedPotteryCopy = [...uncrackedPottery]
    return uncrackedPotteryCopy
}
