import { CardElements } from './cardElements.js'
import { CardControls } from './cardControls.js'

const cardControls = CardControls()
const cardElements = CardElements()
/*Music Cards »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
const springMusic = new Audio(
  'https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Chuva.wav?raw=true'
)
const stormMusic = new Audio(
  'https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Floresta.wav?raw=true'
)
const summerMusic = new Audio(
  'https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Lareira.wav?raw=true'
)
const winterMusic = new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Cafeteria.wav?raw=true')
/*Music Buttons »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
const startMusic = new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Play.wav?raw=true')
const clickSound = new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Click.wav?raw=true')

export function Sound() {

  const pauseMusic = () => {
    springMusic.pause()
    stormMusic.pause()
    summerMusic.pause()
    winterMusic.pause()
    cardControls.resetCard()

  }
  const playMusic = () => {
    springMusic.play()
  }
  const playStormMusic = () => {
    stormMusic.play()
  }
  const playSummerMusic = () => {
    summerMusic.play()
  }
  const playWinterMusic = () =>{
    winterMusic.play()

  }
  function backVolume(){
    
    volumeSpring(cardElements.volume.value)
   cardElements.volumeStorm.value = volumeStorm()
   cardElements.volumeSummer.value = volumeSummer()
   cardElements.volumeWinter.value = volumeWinter()
   console.log(cardElements.volume.value = musicVolume());
  
  }
  /*Volmes Fcunctions »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
  const volumeSpring = musicVolume => {
    springMusic.volume = musicVolume
  }
  const volumeStorm = musicVolume => {
    stormMusic.volume = musicVolume
  }
  const volumeSummer = musicVolume =>{
    summerMusic.volume = musicVolume
  }
  const volumeWinter= musicVolume =>{
    winterMusic.volume = musicVolume
  }
/*Volume Buttons »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
const playStartMusic =() =>{
  startMusic.play()
}
const playClickSound = () =>{
  clickSound.play()
  
}
  return {
    playMusic,
    pauseMusic,
    volumeSpring,
    playStormMusic,
    volumeStorm,
    playSummerMusic,
    volumeSummer,
    playWinterMusic,
    volumeWinter,
    playStartMusic,
    playClickSound,
    backVolume
  }
}
