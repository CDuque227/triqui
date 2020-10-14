import React, {Component} from 'react'
import'../style/App.css'
import uid from 'uid';
import { serviceApi } from "./helpers/request";
import  ListItem  from "./list"

export default class Triqui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn:'X',
            gameEnd:false,
            winner:undefined,
            squares:'',
            showInfo:false,
            tasks:[]
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
            console.log(board[moves[i][0]], board[moves[i][1]],board[moves[i][2]])
            if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]]){
                winner = board[moves[i][0]]
                if(winner.length == 1){
                    let dataToSend = {
                        winner : winner,
                        positions : board
                    }
                    serviceApi(dataToSend, 'http://localhost:3000/api/save', 'POST')
                        .then(data => {
                            console.log("dataaa",data)
                    }).catch(error => {
                            console.log("errorr", error)
                    })
                }
                return winner
            }
            if(this.gameState.totalMoves == 9){
                winner ='none'

                let dataToSend = {
                    winner : winner,
                    positions : board
                }
                serviceApi(dataToSend, 'http://localhost:3000/api/save', 'POST')
                    .then(data => {
                        console.log("dataaa",data)
                    }).catch(error => {
                        console.log("errorr", error)
                })
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

    getHistorial(){
        serviceApi('', 'http://localhost:3000/api/getData', 'GET')
            .then(data => {
                let arrayHistorial = []
                for (let i = 0; i < data.data.length; i ++){
                    arrayHistorial.push(data.data[i].winner)
                }
                this.setState({tasks:arrayHistorial}, ()=>{
                    console.log("actualiza ?? ", this.state.tasks)
                })
        }).catch(error => {
            console.log("errorr", error)
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
                <div>
                    <button style={{ display: !this.state.showInfo ? "block" : "none" }}onClick={(e)=>{this.getHistorial()}}> HISTORIAL </button>
                </div>
                <div >
                    <ListItem
                    tasks = {this.state.tasks}></ListItem>
                </div>
            </div>

        )
    }
}
