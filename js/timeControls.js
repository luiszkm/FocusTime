import {Elements} from "./timerElements.js"
import { Timer } from "./timer.js"
import { Sound } from "./sound.js"
const elements = Elements()
const timer = Timer()
const sound = Sound()
//funçoes dos controles do temporizador »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»
export function Controls (){

  function startPlay() {
    timer.countDown()
    sound.playStartMusic()
  }

  function addFive (){
    elements.minutes = Number(elements.displayMinutes.innerHTML)
    elements.seconds = Number(elements.displaySeconds.innerHTML)
    timer.updateDisplayTimer(elements.minutes + 5, elements.seconds)
  }
  
  function removeFive(){
    elements.minutes = Number(elements.displayMinutes.innerHTML)
    elements.seconds = Number(elements.displaySeconds.innerHTML)
    timer.updateDisplayTimer(elements.minutes - 5, elements.seconds)
  }

  function stopTime (){
    timer.stopTime()
  }

return{
  startPlay,
  addFive,
  removeFive,
  stopTime
}

}