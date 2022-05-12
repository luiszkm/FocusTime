import {Elements} from "./timerElements.js"
import { Timer } from "./timer.js"

const elements = Elements()
const timer = Timer()

//funçoes dos controles do temporizador »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»
export function Controls (){

  function startPlay() {
    timer.countDown()
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