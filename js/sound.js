import { CardElements } from "./cardElements.js"
const cardElements = CardElements()

 const springMusic = new Audio("https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Chuva.wav?raw=true")
 
export function Sound (){

  const playMusic = () =>{
    springMusic.play()
  }
  
  const musicVolume = (volumeValue) => {
  //  Number(volumeValue)
    springMusic.volume = Number(volumeValue)
    console.log(volumeValue);
    console.log(springMusic.volume);
  }
  
  return{
    playMusic,
    musicVolume,
  }
}
