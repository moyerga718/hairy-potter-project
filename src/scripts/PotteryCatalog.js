const uncrackedPottery = []

const lilBabyObject = {
    name: "dangus",
    weight: 7,
    cracked: false
}

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

toSellOrNotToSell(lilBabyObject)

myPottery = usePottery()
console.log(myPottery)