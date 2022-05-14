
export function Elements(){
  let btnStart = document.querySelector('#start')
  let btnStartDisable = document.querySelector('#startDisabled')
  let btnStop = document.querySelector('#stop')
  let btnMore = document.querySelector('#more')
  let btnless = document.querySelector('#less')
  let displayMinutes = document.querySelector('#minutes')
  let displaySeconds = document.querySelector('#seconds')
  let timerTimeOut
  let minutes
  let seconds

  return{
    btnStart,
    btnStartDisable,
    btnStop,
    btnMore,
    btnless,
    displayMinutes,
    displaySeconds,
    timerTimeOut,
    minutes,
    seconds,
  }
}