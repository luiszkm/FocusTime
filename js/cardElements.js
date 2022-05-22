
export function CardElements (){

  let cardSpring = document.querySelector('#spring')
  let cardStorm = document.querySelector('#storm')
  let cardWinter = document.querySelector('#winter')
  let cardSummer = document.querySelector('#summer')

  let volume = document.querySelector('.volume')
  let volumeStorm = document.querySelector('.volumeStorm')
  let volumeSummer = document.querySelector('.volumeSummer')
  let volumeWinter = document.querySelector('.volumeWinter')
  
 function setVolume(){
   volume.value = 0.5 
   volumeStorm.value = 0.5
   volumeSummer.value = 0.5
   volumeWinter.value = 0.5
 }

  return {
   cardSpring,
   cardStorm,
   cardWinter,
   cardSummer,
   volume,
   volumeStorm,
   volumeSummer,
   volumeWinter,
   setVolume
  }
}

