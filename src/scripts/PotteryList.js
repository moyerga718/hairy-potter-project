// import uncrackedPottery data from PotteryCatalog using usePottery

import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'

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
    id: 1,
        shape: 'mug',
        weight: 5,
        height: 6,
        fired: true,
        cracked: false,
        price: 20
}

toSellOrNotToSell(aMug)
toSellOrNotToSell(anotherMug)

const thisBoysPottery = usePottery()

console.log(thisBoysPottery)
*/

let potteryHTMLstring = ``

export const PotteryList = (usablePotteryArray) => {
    for (const potteryObj of usablePotteryArray) {
        potteryHTMLstring += 
        `<section class="pottery" id="pottery--${potteryObj.id}
            <h1 class="pottery__shape">${potteryObj.shape}</h1>
            <div class="pottery__properties">
                Item weighs ${potteryObj.weight} grams and is ${potteryObj.height} cm in height
            </div>
            <div class="pottery__price">
                Price is $${potteryObj.price}
            </div>
        </section>\n`
    }
    return potteryHTMLstring
}

/*
const myPotteryList = PotteryList(thisBoysPottery)

console.log(myPotteryList)
*/