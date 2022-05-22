import { CardElements } from './cardElements.js'
import { Sound } from './sound.js'
const card = CardElements()
const sound = Sound()

export function CardControls() {
  function resetCard() {
    card.cardSpring.classList.remove('select-card')
    card.cardStorm.classList.remove('select-card')
    card.cardWinter.classList.remove('select-card')
    card.cardSummer.classList.remove('select-card')
  
  }

  function spring() {
      sound.pauseMusic()
      // card.setVolume()
      card.cardSpring.classList.add('select-card')
      sound.playStormMusic()
      sound.backVolume()
    
  }

  function storm() {
      sound.pauseMusic()
     
      card.cardStorm.classList.add('select-card')
      sound.playMusic() 
      sound.backVolume()
  }

  function winter() {
      sound.pauseMusic()
    
      card.cardWinter.classList.add('select-card')
      sound.playWinterMusic()
      sound.backVolume()
  }
  function summer() {
      sound.pauseMusic() 
    
      card.cardSummer.classList.add('select-card')
      sound.playSummerMusic()
      sound.backVolume()
    
  }
 
 
  return {
    resetCard,
    spring,
    storm,
    winter,
    summer,

  }
}
