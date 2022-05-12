import {Elements} from "./timerElements.js"

const elements = Elements()

// Funçoes do contador »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»
export function Timer (){

  function stopTime (){// parar o temporizador
    clearTimeout(elements.timerTimeOut)
  }

  const countDown = () => {
    elements.timerTimeOut = setTimeout(() => {
      let min = Number(elements.displayMinutes.innerHTML)//valor padrao html
      let sec = Number(elements.displaySeconds.innerHTML)
  
      updateDisplayTimer(min, sec - 1)// att display -1 por segundo
  
      if (min == 0 && sec == 0) {// n deixar o tempo ficar negativo
        updateDisplayTimer(min, sec)
        return
      }
      if (sec <= 0) {// transiçao de  00 segundo para  60 segundos - 1 min
        sec = 60
        min--
        updateDisplayTimer(min, sec - 1)
      }
      updateDisplayTimer(min, sec - 1)
  
      countDown()
    }, 1000)
  }
  
  const updateDisplayTimer = (minutes, seconds) => {// imprimir no html
    if(minutes <= 0){minutes = 0}//valor minimo === 0
    if(minutes >= 60){minutes = 60, seconds = 0}// valor max temp === 60 minutos
    elements.displayMinutes.innerHTML = String(minutes).padStart(2, '0')//2 casa fixa 
    elements.displaySeconds.innerHTML = String(seconds).padStart(2, '0')
  }
  
  return{
    stopTime,
    countDown,
    updateDisplayTimer
  }
}