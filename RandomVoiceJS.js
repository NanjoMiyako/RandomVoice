var currentSpeech = null;
var speechContinueFlg = true;

function Execute(){
  if(currentSpeech != null){
  	speechSynthesis.cancel(currentSpeech);
  } 
  
  var voiceSpanTime = parseInt(document.getElementById("voiceSpanTime").value);
  var voiceKindCount = parseInt(document.getElementById("voiceKindCount").value);
  var text = document.getElementById("text1").value;
  RandomSpeech(voiceSpanTime, voiceKindCount)
}


async function RandomSpeech(utterSpanTime, voiceKindCount){

	var random1 = Math.ceil( Math.random()*voiceKindCount);
	idStr = "text" + random1
	text = document.getElementById(idStr).value
	currentSpeech = new SpeechSynthesisUtterance(text)
	speechSynthesis.speak(currentSpeech)
	
	if(speechContinueFlg == true){
		await new Promise(resolve => setTimeout(resolve, utterSpanTime * 1000))
		RandomSpeech(utterSpanTime, voiceKindCount)
	}

}

function cancel(){
 speechSynthesis.cancel(currentSpeech)
 speechContinueFlg = false
}
