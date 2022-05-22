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
    resetVolume()
  }

  function spring() {
      sound.pauseMusic()
      card.cardSpring.classList.add('select-card')
      sound.playStormMusic()
  }

  function storm() {
      sound.pauseMusic()
      card.cardStorm.classList.add('select-card')
      sound.playMusic() 
  }

  function winter() {
      sound.pauseMusic()
      card.cardWinter.classList.add('select-card')
      sound.playWinterMusic()
  }
  function summer() {
      sound.pauseMusic() 
      card.cardSummer.classList.add('select-card')
      sound.playSummerMusic()
    
  }
  function resetVolume() {
    if (card.volume.classList.contains('select-card')) {
      card.volume.value = 0.1
    } else {
    }
  }
 
  return {
    resetCard,
    spring,
    storm,
    winter,
    summer,
    resetVolume
  }
}
