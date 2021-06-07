var answer;
var score=0;
var backgroundImages = [];
function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;
    answer = n2+n1;

}

function checkAnswer(){
    const prediction = predictImage();
    console.log(`answer ${answer}, prediction ${prediction}`);

    if (prediction == answer){
        score++;
        console.log('Correct, score: '+score); 
        if(score<=6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }
        else{
            alert('well done. ');
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
    }

    else{
        if(score =! 0){score--;}
        console.log('False, score: '+ score); 
        setTimeout(function (){
            backgroundImages.pop();
            document.body.style.backgroundImage=backgroundImages;
        })
    }

   
}
