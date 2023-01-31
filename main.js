//https://teachablemachine.withgoogle.com/models/GURvJmTfM/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.sondClassifier(https://teachablemachine.withgoogle.com/models/GURvJmTfM/);
}

function modelReady(){
    classifier.classify(gotResults);
}
var BoraBill = 0;
var Mel = 0;
var BataPalmas = 0;

function gotResults(error, results){
    if(error){
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.ElementByld("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
        document.ElementByld("result_count").innerHTML = 'BoraBill detectado - '+BoraBill+ 'Mel detectado -'+Mel+ 'BatendoPalmas detectado - '+BatendoPalmas;
        document.ElementByld("result_label").style.color = "rgb(+random_number_r+","+random_number_b+")";
        document.ElementByld("result_count").style.color = "rgb(+random_number_r+","+random_number_b+")";
        img = document.getElementByld('animal_image');

        
}