function playRockPaperScissors(userChoice: string) {

    // - buat array kemungkinan/probabilitas ['rock', 'paper', 'scissors']
    // - pilih salah satu secara acak pakai Math.random (untuk pilihan komputer)
    // - bandingkan pilihan user dengan komputer:
    // -- rock vs scissor -> WIN
    // -- paper vs rock -> WIN
    // -- scissor vs paper -> WIN
    // - jika sama -> DRAW
    // - lainnya LOSE

    let choices: string[] = ['rock', 'paper', 'scissor']
    let randomIndex: number = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[randomIndex]

    console.log(`You : ${userChoice}, Computer : ${computerChoice}`)

    if (userChoice === computerChoice) {
        return "DRAW"
    }

    if ((userChoice === "rock" && computerChoice === "scissor")
        || (userChoice === "paper" && computerChoice === "rock")
        || (userChoice === "scissor" && computerChoice === "paper")) {
        return "WIN"
    } else {
        return "LOSE"
    }
}

console.log(playRockPaperScissors('rock'))