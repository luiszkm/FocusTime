
export function CardElements (){

  let cardSpring = document.querySelector('#spring')
  let cardStorm = document.querySelector('#storm')
  let cardWinter = document.querySelector('#winter')
  let cardSummer = document.querySelector('#summer')

  let volume = document.querySelector('.volume')
  let volumeStorm = document.querySelector('.volumeStorm')
  let volumeSummer = document.querySelector('.volumeSummer')
  let volumeWinter = document.querySelector('.volumeWinter')
  let volumeValue = volume.value
  
  return {
   cardSpring,
   cardStorm,
   cardWinter,
   cardSummer,
   volume,
   volumeValue,
   volumeStorm,
   volumeSummer,
   volumeWinter
  }
}

