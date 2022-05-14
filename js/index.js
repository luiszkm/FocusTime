import {Elements} from "./timerElements.js"
import { Controls } from "./timeControls.js"
import { CardElements } from "./cardElements.js"
import { CardControls } from "./cardControls.js"
import { Sound } from "./sound.js"
import { Modes } from "./modes.js"

const sound = Sound()
const cardControls = CardControls()
const cardElements = CardElements()
const elements = Elements()
const controls = Controls()
const modes = Modes()

//Eventos »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»

elements.btnStart.addEventListener('click', controls.startPlay)
elements.btnMore.addEventListener('click', controls.addFive)
elements.btnless.addEventListener('click', controls.removeFive)
elements.btnStop.addEventListener('click', controls.stopTime)

cardElements.cardSpring.addEventListener('click', cardControls.spring)
cardElements.cardStorm.addEventListener('click', cardControls.storm)
cardElements.cardWinter.addEventListener('click', cardControls.winter)
cardElements.cardSummer.addEventListener('click', cardControls.summer)

/*Regulador de Voluems »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
cardElements.volumeStorm.addEventListener('input',() =>{sound.musicVolume(cardElements.volumeStorm.value)
})
cardElements.volume.addEventListener('input', () =>{sound.volumeStorm(cardElements.volume.value)
})
cardElements.volumeSummer.addEventListener('input',() =>{sound.volumeSummer(cardElements.volumeSummer.value)
})
cardElements.volumeWinter.addEventListener('input',() =>{sound.volumeWinter(cardElements.volumeWinter.value)
})
