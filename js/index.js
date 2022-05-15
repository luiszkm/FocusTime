import {Elements} from "./timerElements.js"
import { Controls } from "./timeControls.js"
import { CardElements } from "./cardElements.js"
import { CardControls } from "./cardControls.js"
import { Sound } from "./sound.js"
const sound = Sound()
const cardControls = CardControls()
const cardElements = CardElements()
const elements = Elements()
const controls = Controls()

//Eventos »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»

elements.btnStart.addEventListener('click', controls.startPlay)
elements.btnMore.addEventListener('click', controls.addFive)
elements.btnless.addEventListener('click', controls.removeFive)
elements.btnStop.addEventListener('click', controls.stopTime)

cardElements.cardSpring.addEventListener('click', cardControls.spring)
cardElements.cardStorm.addEventListener('click', cardControls.storm)
cardElements.cardWinter.addEventListener('click', cardControls.winter)
cardElements.cardSummer.addEventListener('click', cardControls.summer)

cardElements.volume.addEventListener('input',() =>{sound.musicVolume(cardElements.volume.value)
  })

