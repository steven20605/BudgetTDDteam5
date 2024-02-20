class Tennis {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.player1Score = 0
        this.player2Score = 0
    }

    addPlayer1Score(){
        this.player1Score++
    }

    addPlayer2Score(){
        this.player2Score++
    }

    score(){
        const converter = ['love', 'fifteen', 'thirty', 'forty']

        if (this.player1Score >= 3 && this.player2Score >= 3 ){
            const statusPlayer = this.player1Score - this.player2Score > 0 ? this.player1: this.player2;
            const status = () => {
                const scoreDiff = Math.abs(this.player1Score - this.player2Score)
                const isAdv = scoreDiff ===1;
                const isWin = scoreDiff ===2;
                return isAdv
            }

            return `${statusPlayer} ${status}`
            // if (this.player1Score - this.player2Score === 1 ){
            //    return `${this.player1} adv`
            // }
            // else if (this.player1Score - this.player2Score === 2 ){
            //     return `${this.player1} win`
            // }
            // else if (this.player2Score - this.player1Score === 1 ){
            //     return `${this.player2} adv`
            // }
            // else if (this.player2Score - this.player1Score === 2 ){
            //     return `${this.player2} win`
            // }
            return 'deuce'
        }

        if(this.player1Score === this.player2Score){
            return `${converter[this.player1Score]} all`
        }

        if(this.player1Score ===4){
            return `${this.player1} wins`
        }
        if(this.player2Score ===4){
            return `${this.player2} wins`
        }

        return `${converter[this.player1Score]} ${converter[this.player2Score]}`
    }
}

const tennis = new Tennis('Gary', 'Ray')
tennis.addPlayer1Score()
tennis.addPlayer1Score()
tennis.addPlayer1Score()
tennis.addPlayer1Score()


tennis.addPlayer2Score()
tennis.addPlayer2Score()
tennis.addPlayer2Score()
console.log(tennis.score())
