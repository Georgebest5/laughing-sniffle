
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BQYsOTvwL/model.json', modelReady);
}

function modelReady() {
    console.log('model is ready');
    classifier.classify(gotResults);
}