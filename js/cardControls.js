import{CardElements} from"./cardElements.js"
import { Sound } from "./sound.js"
const card = CardElements()
const sound = Sound()
export function CardControls(){
  function resetCard () {
    card.cardSpring.classList.remove('select-card')
    card.cardStorm.classList.remove('select-card')
    card.cardWinter.classList.remove('select-card')
    card.cardSummer.classList.remove('select-card')
  }
  
  function spring (){
    resetCard()
    card.cardSpring.classList.add('select-card')
    sound.playMusic()
  }
  
  function storm (){
    resetCard()
    card.cardStorm.classList.add('select-card')
  }
  
  function winter (){
    resetCard()
    card.cardWinter.classList.add('select-card')
  }
  
  function summer (){
    resetCard()
    card.cardSummer.classList.add('select-card')
  }

  return{
    resetCard,
    spring,
    storm,
    winter,
    summer,
  }
}
