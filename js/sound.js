import { CardElements } from "./cardElements.js"
const cardElements = CardElements()
export function Sound (){

  const springMusic = new Audio("https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Chuva.wav?raw=true")

  const playMusic = () =>{
    springMusic.play()
  }
  // let rageInput = cardElements.volume.oninput = function(){
  // // console.log(this.value);
  
  //   return 
  // }
  const musicVolume = (volumeValue) => {
  //  Number(volumeValue)
    springMusic.volume = 0
    console.log(volumeValue);
    console.log(springMusic.volume);
  }
  return{
    playMusic,
    musicVolume,
    // rageInput
  }
}
