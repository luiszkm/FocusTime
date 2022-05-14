import { CardElements } from "./cardElements.js"

const cardElements = CardElements()

export function Modes (){

let btnLigthMode = document.querySelector('.ligthMode')
let btnDarkMode = document.querySelector('.darkMode')
let display = document.querySelector('.display')
let controls = document.querySelector('.controls')

btnLigthMode.addEventListener('click', darkMode)
btnDarkMode.addEventListener('click' ,ligthMode)


function darkMode(){
  btnDarkMode.classList.remove('hide')
  btnLigthMode.classList.add('hide')
  document.body.classList.add('darkMode')
  display.classList.add('darkModeText')
  controls.classList.add('controlsDarkMode')
  cardAddDarkMode()
}
function ligthMode () {
  btnDarkMode.classList.add('hide')
  btnLigthMode.classList.remove('hide')
  document.body.classList.remove('darkMode')
  display.classList.remove('darkModeText')
  controls.classList.remove('controlsDarkMode')
  cardRemoveDarkMode()

}
function cardAddDarkMode(){
  cardElements.cardSpring.classList.add('cardDarkMode')
  cardElements.cardStorm.classList.add('cardDarkMode')
  cardElements.cardSummer.classList.add('cardDarkMode')
  cardElements.cardWinter.classList.add('cardDarkMode')
}
function cardRemoveDarkMode (){
  cardElements.cardSpring.classList.remove('cardDarkMode')
  cardElements.cardStorm.classList.remove('cardDarkMode')
  cardElements.cardSummer.classList.remove('cardDarkMode')
  cardElements.cardWinter.classList.remove('cardDarkMode')
}

 return{
  btnLigthMode,
  btnDarkMode,
  display,
  controls,
  darkMode,
  ligthMode,
  cardAddDarkMode,
  cardRemoveDarkMode,
 }

}