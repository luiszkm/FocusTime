
export function CardElements (){

  let cardSpring = document.querySelector('#spring')
  let cardStorm = document.querySelector('#storm')
  let cardWinter = document.querySelector('#winter')
  let cardSummer = document.querySelector('#summer')

  let volume = document.querySelector('.volume')

  let volumeValue = volume.value
 function getVolumeValue () {
   return volume.value
 }
  return {
   cardSpring,
   cardStorm,
   cardWinter,
   cardSummer,
   volume,
   volumeValue,
   getVolumeValue
  }
}

