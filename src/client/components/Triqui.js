import React, {Component} from 'react'
import'../style/App.css'
import uid from 'uid';

export default class Triqui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn:'X',
            gameEnd:false,
            winner:undefined,
            squares:''
        }

        this.gameState = {
            totalMoves:0
        }
    }

    componentWillMount() {
        this.restart()
    }

    clicked(e){
        let index = e.target.dataset.square
        if(!this.state.gameEnd){
            if(this.gameState.board[index] === ''){
                this.gameState.board[index] = this.state.turn
                e.target.innerText = this.state.turn
                this.setState({
                    turn : this.state.turn === 'X' ? 'O' : 'X',
                })
                this.gameState.totalMoves += 1
            }
        }
        let winner = this.checkWinner()
        console.log("winnner", winner)
        if(winner == 'X'){
            this.setState({
                gameEnd :true,
                winnerLine : this.msgWinner('Ganó X')
            })
        } else if(winner == 'O') {
            this.setState({
                gameEnd :true,
                winnerLine : this.msgWinner('Ganó O')
            })
        }else if(winner == 'none') {
            this.setState({
                gameEnd :true,
                winnerLine : this.msgWinner('Empate')
            })
        }
        console.log(this.gameState.board)
    }

    msgWinner(str){
        return(
            <div>
                <div>{str}</div>
                <div onClick={(e)=>{this.restart()}}> RESTART </div>
            </div>
        )
    }

    checkWinner (){
        let winner = null,
            moves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]],
            board = this.gameState.board


        for (let i = 0; i <= moves.length; i++){
            console.log("moves.length", moves.length)
            console.log("iii", i)
            console.log(board[moves[i][0]], board[moves[i][1]],board[moves[i][2]])
            if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]]){
                winner = board[moves[i][0]]
                return winner
            }
            if(this.gameState.totalMoves == 9){
                console.log("winner", winner)
                winner ='none'
                return winner
            }
        }
    }
    restart(){
        this.gameState.board = Array(9).fill('')
        this.gameState.totalMoves = 0
        this.setState({
           turn: 'X',
           gameEnd:false,
           winnerLine:'',
           squares:<div id="board" onClick={(e)=>this.clicked(e)}>
               {
                this.gameState.board.map((square, key)=>{
                    return <div className ="square" data-square={key} key={uid()}></div>

               })
               }
           </div>
        })
    }

    render(){
        return(
            <div id="game">
                <div id= "status">{this.state.winnerLine}</div>
                <div id= "head">TIC TAC TOE</div>
                <div>
                    {this.state.squares}
                </div>
            </div>
        )
    }
}
