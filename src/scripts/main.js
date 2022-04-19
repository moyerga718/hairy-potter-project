// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { PotteryList } from './PotteryList.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",5,6)
let bowl = makePottery("bowl",7,8)
let plate = makePottery("plate",10,1)
let bowl2 = makePottery("bowl",7,8)
let mug2 = makePottery("mug",5,7)

console.log(mug)
console.log(bowl)


// Fire each piece of pottery in the kiln

let newmug = firePottery(mug,40)
let newbowl = firePottery(bowl,2201)
let newplate = firePottery(plate,100000)
let newbowl2 = firePottery(bowl2,100)
let newmug2 = firePottery(mug2,2200)

console.log(newmug)




// Determine which ones should be sold, and their price

toSellOrNotToSell(newmug)
toSellOrNotToSell(newbowl)
toSellOrNotToSell(newplate)
toSellOrNotToSell(newbowl2)
toSellOrNotToSell(newmug2)

const usablePottery = usePottery()

console.log(usablePottery)

// Invoke the component function that renders the HTML list

const potteryHtmlElement = document.querySelector(".potteryList")
potteryHtmlElement.innerHTML = PotteryList(usablePottery)
console.log(potteryHTML)

//const potteryHTMLsection = document.querySelector(".potteryList")





