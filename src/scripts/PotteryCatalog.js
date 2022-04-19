const uncrackedPottery = []

/*
const aMug = {
    id: 1,
    shape: 'mug',
    weight: 5,
    height: 6,
    fired: true,
    cracked: false,
    price: 20
}

const anotherMug = {
    id: 2,
    shape: 'mug',
    weight: 5,
    height: 6,
    fired: true,
    cracked: true,
    price: 20
}
*/

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
            potteryObj.price = 20
        }
        uncrackedPottery.push(potteryObj)
    }
    return potteryObj
}



export const usePottery = () => {
    const uncrackedPotteryCopy = [...uncrackedPottery]
    return uncrackedPotteryCopy
}

/*
toSellOrNotToSell(aMug)
toSellOrNotToSell(anotherMug)

let mySalablePottery = usePottery()

console.log(mySalablePottery)
*/

