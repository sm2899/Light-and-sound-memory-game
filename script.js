var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var clueHoldTime = 1000;
const cluePauseTime = 333; 
const nextClueWaitTime = 1000;
var guessCounter=0;
var mistakes=3;
var temp;
var timeLeft=0;
var time=0;
var inter;
var delay=1000;

function startGame(){
  context.resume();
  progress = 0;
  mistakes=3;
  gamePlaying = true;
  getClue();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence(0)
  time=10;
  document.getElementById("timer").innerText=time;
  setTimeout(function() {inter=setInterval(timer, 1000)}, delay)
  
}

function stopGame(){
  gamePlaying = false;
  guessCounter=0;
  clueHoldTime = 1000
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("timer").innerText="";
  clearInterval(inter);
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
function flashButtons(){
  lightButton(1);
  lightButton(2);
  lightButton(3);
  lightButton(4);
  lightButton(5);
  lightButton(6);
  setTimeout(function() {
    setTimeout(function() {clearButton(1) },0)
    clearButton(2)
    clearButton(3);
    clearButton(4);
    clearButton(5);
    clearButton(6);}
             ,300)
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(temp){
  if (temp==1) clueHoldTime-=100;
  guessCounter=0;
  delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
}

function getClue(){
  for (var i=0; i<8; i++){
    pattern[i]=Math.floor(Math.random()*6+1);
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  console.log("pattern "+pattern[guessCounter]+"your guess "+btn)
  if (pattern[guessCounter]==btn) {
    if(progress==pattern.length-1 && guessCounter==progress) winGame();
    if(guessCounter==progress){
      clearInterval(inter);
      progress++;
      playClueSequence(1);
      time=10;
      document.getElementById("timer").innerText=time;
      setTimeout(function() {inter=setInterval(timer, 1000)}, delay)
    }
    else guessCounter+=1;
    
  }
  else{
    mistake();
  }
}

function mistake(){
  
    if (mistakes==1) {
      loseGame();}
    else {
      flashButtons()
      setTimeout(flashButtons(),1000)
      clearInterval(inter);
      playClueSequence(0)
      time=10;
      document.getElementById("timer").innerText=time;
      setTimeout(function() {inter=setInterval(timer, 1000)}, delay)
      mistakes-=1;}
}

function playTone(btn,len){ 
  tonePlaying=true;
  document.getElementById("b"+btn+"a").play();
  setTimeout(function (){
    document.getElementById("b"+btn+"a").pause();
    document.getElementById("b"+btn+"a").currentTime=0;},clueHoldTime);
  tonePlaying=false;
  
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById("b"+btn+"a").play();
  }
}
function stopTone(btn){
    document.getElementById("b"+btn+"a").pause();
}

function timer(){
  document.getElementById("timer").innerText=time;
  if(time>=0){time-=1;}
  if(time==-100){
    mistake();
  }
  
}

//Page Initialization
// Init Sound Synthesizer

var AudioContext = window.AudioContext          // Default
              || window.webkitAudioContext
var context = new AudioContext()
context.resume()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)