
async function timeSleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function writeTextSlowly(text ,textClass, timer, timerAfterPrint = 0, timerAfterWord = 0){

    writingText = document.querySelector(textClass)

    writingText.innerHTML = ""

    await timeSleep(timerAfterPrint)
    
    if(Array.isArray(text))
    {
        for (let i = 0; i < text.length; i++) {
            const word = text[i];
            writingText.innerHTML = ""
            for (let index = 0; index < word.length; index++) {
                const element = word[index];
                writingText.innerHTML = writingText.innerHTML + element
                await timeSleep(timer)
            }
            await timeSleep(timerAfterWord)
        }
    }
    else
    {
        console.log("notArray")
        for (let index = 0; index < text.length; index++) {
            const element = text[index];
            writingText.innerHTML = writingText.innerHTML + element
            await timeSleep(timer)
        }
        await timeSleep(timerAfterWord) 
    }
}

function CutWordsToArray(words){
    var word = ""
    var array = []
    if(!Array.isArray(words)){
        for (let index = 0; index < words.length; index++) {
            const element = words[index];
            word = word + element
            if(element == " "){
                array.push(word)
                word = ""
            }
        }
    }
    else{
        return "nonCorrectType"
    }
    return array
}

const HelloMessages = [
    "привет, моё солнышко",
    "...",
    "я снова хотел тебе сказать \n как я тебя люблю", 
    ""
]

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id люблю_тебя"

const stih = "Во глубине сибирских руд Храните гордое терпенье, Не пропадет ваш скорбный труд И дум высокое стремленье. Несчастью верная сестра, Надежда в мрачном подземелье Разбудит бодрость и веселье, Придет желанная пора: Любовь и дружество до вас Дойдут сквозь мрачные затворы, Как в ваши каторжные норы Доходит мой свободный глас. Оковы тяжкие падут, Темницы рухнут — и свобода Вас примет радостно у входа, И братья меч вам отдадут."

async function HelloScreen(){
    const textArray = CutWordsToArray(lorem) 
    await writeTextSlowly(textArray, ".diktor1", 50, 0, 300)
}

HelloScreen()