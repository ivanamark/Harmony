const CON = 'ay'
const CNI = 'yay'
var str = 'I'
var word = str.toLowerCase();
var sc = word.charAt(0)
var cd = word.charAt(1);
var ig = word.charAt(2);
var sc1 = word.substring(1);
var sc2 = word.substring(2);
var sc3 = word.substring(3)
pigLatin = (str) => {
    if (((sc !== "a" || sc !== "e" || sc !== "i" || sc !== "o" || sc !== "u") && (cd !== "a" || cd !== "e" || cd !== "i" || cd !== "o" || cd !== "u")) && (ig !== "a" || ig !== "e" || ig !== "i" || ig !== "o" || ig !== "u")) {
        result = `${sc3}${sc}${cd}${ig}${CON}`

    }

    if (word.length = 1) {
        result = `${word}${CNI}`;


    }
    if ((sc !== "a" || sc !== "e" || sc !== "i" || sc !== "o" || sc !== "u") && (cd !== "a" || cd !== "e" || cd !== "i" || cd !== "o" || cd !== "u") && (ig === "a" || ig === "e" || ig === "i" || ig === "o" || ig === "u")) {
        result = `${sc2}${sc}${cd}${CON}`


    }
    if ((sc !== "a" || sc !== "e" || sc !== "i" || sc !== "o" || sc !== "u") && (cd === "a" || cd === "e" || cd === "i" || cd === "o" || cd === "u")) {

        result = `${sc1}${sc}${CON}`

    }
    if ((sc !== "a" || sc !== "e" || sc !== "i" || sc !== "o" || sc !== "u") && (cd === "a" || cd === "e" || cd === "i" || cd === "o" || cd === "u") && (ig === "a" || ig === "e" || ig === "i" || ig === "o" || ig === "u")) {

        result = `${sc1}${sc}${CON}`
        console.log(result);

    }
    if ((sc === "a" || sc === "e" || sc === "i" || sc === "o" || sc === "u") && (cd !== "a" || cd !== "e" || cd !== "i" || cd !== "o" || cd !== "u")) {
        result = `${word}${CNI}`


    }
    if ((sc === "a" || sc === "e" || sc === "i" || sc === "o" || sc === "u") && (cd === "a" || cd === "e" || cd === "i" || cd === "o" || cd === "u")) {
        result = `${word}${CNI}`


    }

    return result;


}
var final_result = console.log(pigLatin(str));