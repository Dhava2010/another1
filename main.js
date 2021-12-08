var p1 = "";
var p2 = "";

Webcam.set({
    width: 800,
    height: 1000,
    img_format: 'png',
    png_quality: 100
});

camera = document.getElementById("webcamm");

Webcam.attach('#webcamm');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("sultan").innerHTML = '<img id = "captures_img" src = "' + data_uri + '"/>';
    });
    //johncena
}

console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X0sqDysrY/model.jsonhttps://teachablemachine.withgoogle.com/models/OrDOPuPg8/model.json", modellreddy);

function modellreddy()
{
    console.log("modelready");
}

function speak()
{
    var johncena = window.speechSynthesis;
    var p11 = "The first prediction is: " + p1;
    var p21 = "The second prediction is: " + p2;
    var uttrdis = new SpeechSynthesisUtterance(p11 + p21);
    johncena.speak(uttrdis);
}

function check()
{
    img = document.getElementById("captures_img");
    classifier.classify(img, gotRezult);
}

function gotRezult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        document.getElementById("resultofEmo").innerHTML = results[0].label;
        document.getElementById("resultofEmo2").innerHTML = results[1].label;

        p1 = results[0].label;
        p2 = results[1].label;

        speak();

        if(p1 == "happy")
        {
            document.getElementById("resultofEmoji").innerHTML = "&#128522";
        }
        if(p1 = "sad")
        {
            document.getElementById("resultofEmoji").innerHTML = "&#128532;"
        }
        if(p1 = "angry")
        {
            document.getElementById("resultofEmoji").innerHTML = "&#128548;"
        }
        if(p2 == "happy")
        {
            document.getElementById("resultofEmoji2").innerHTML = "&#128522";
        }
        if(p2 = "sad")
        {
            document.getElementById("resultofEmoji2").innerHTML = "&#128532;"
        }
        if(p2 = "angry")
        {
            document.getElementById("resultofEmoji2").innerHTML = "&#128548;"
        }
    }
}