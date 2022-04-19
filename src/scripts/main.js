// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",5,6)
let bowl = makePottery("bowl",7,8)
let plate = makePottery("plate",10,1)
let bowl2 = makePottery("bowl",7,8)
let mug2 = makePottery("mug",5,7)

let newmug = firePottery(mug,40)
let newbowl = firePottery(bowl,2201)
let newplate = firePottery(plate,100000)
let newbowl2 = firePottery(bowl2,100)
let newmug2 = firePottery(mug2,2200)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



