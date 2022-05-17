import { CardElements } from './cardElements.js'

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
  }
  const playMusic = () => {
    pauseMusic()
    springMusic.play()
    
   
  }
  const playStormMusic = () => {
    pauseMusic()
    stormMusic.play()
    startMusic.loop()
  }
  const playSummerMusic = () => {
    pauseMusic()
    summerMusic.play()
  }
  const playWinterMusic = () =>{
    pauseMusic()
    winterMusic.play()
    musicLoop()
  }
  /*Volmes Fcunctions »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
  const musicVolume = musicVolume => {
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
    musicVolume,
    playStormMusic,
    volumeStorm,
    playSummerMusic,
    volumeSummer,
    playWinterMusic,
    volumeWinter,
    playStartMusic,
    playClickSound
  }
}
