import {Elements} from "./timerElements.js"
import { Timer } from "./timer.js"
import { Sound } from "./sound.js"
import { CardElements } from "./cardElements.js"
const cardElements =CardElements()
const elements = Elements()
const timer = Timer()
const sound = Sound()
//funçoes dos controles do temporizador »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»
export function Controls (){

  function startPlay() {
    timer.countDown()
    sound.playClickSound()
    elements.btnStartDisable.classList.remove('hide')
    elements.btnStart.classList.add('hide')
    cardElements.setVolume()
  }

  function addFive (){
    elements.minutes = Number(elements.displayMinutes.innerHTML)
    elements.seconds = Number(elements.displaySeconds.innerHTML)
    timer.updateDisplayTimer(elements.minutes + 5, elements.seconds)
    sound.playStartMusic()
  }
  
  function removeFive(){
    elements.minutes = Number(elements.displayMinutes.innerHTML)
    elements.seconds = Number(elements.displaySeconds.innerHTML)
    timer.updateDisplayTimer(elements.minutes - 5, elements.seconds)
    sound.playStartMusic()
  }

  function stopTime (){
    timer.stopTime()
    sound.playClickSound()
    elements.btnStartDisable.classList.add('hide')
    elements.btnStart.classList.remove('hide')
  }
 
return{
  startPlay,
  addFive,
  removeFive,
  stopTime
}

}