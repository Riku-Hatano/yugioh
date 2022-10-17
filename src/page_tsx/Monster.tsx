import axios from "axios"

import React, {Component} from "react"

import Card from "../make_modal_card/card"
import ModalWindow from "../make_modal_card/modal"

type Props = {
}
type State = {
    loading: boolean
    characters: any
    modalImage: string
}
class Monster extends Component <Props, State> {
    constructor(props: any){
        super(props)
        this.state = {
            loading: true,
            characters: {},
            modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
        }
        this.searchCard = this.searchCard.bind(this)
    }

    /*　
    searchCardは、個別のカードがクリックされた時、カードに応じた画像を拾って表示させる処理。
    都度http通信をする。
    */
    searchCard = (cardNumber: number, id: number) => {//cardUrlは、別の方法で画像を持ってきたくなった時のために一応残してある。
        // クリックされたカードの背景を紫色のする処理
        let parent = document.getElementById(`individualCard${cardNumber}`) as HTMLDivElement
        parent.classList.add("added")

        // モーダルウインドウの画像のsrcを変更する処理
        const imgsrc = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
        this.setState({
            modalImage: imgsrc
        })
        console.log(this.state.modalImage)

        // モーダルウインドウの表示/非表示を切り替える処理
        const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
        parentModalWindow.style.display = "inline"
    }   
    eraseModalWindow() {
        const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
        parentModalWindow.style.display = "none"
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        
        const characters: Array<any> = []
        let box: any = []
        
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Tuner%20Monster")
        // thenで成功した場合の処理
        .then((results) => { // レスポンスが来たらthenを実行
            // console.log(results.data); // コンソールログにresultsに含まれるdataを表示
            const d = results.data["data"] as Array<any>
            characters.push(d);
        })

        .then(() => axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Pendulum%20Normal%20Monster"))
        .then((results) => { 
            const d = results.data["data"] as Array<any>
            characters.push(d);
        })

        .then(() => axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster"))
        .then((results) => {
            const d = results.data["data"] as Array<any>
            characters.push(d);       
            for (let i = 0 ; i < characters.length ; i++) {
                for (let j = 0 ; j < characters[i].length ; j++) {
                    box.push(characters[i][j])
                }
            }        
        })

        .then(() => {
            this.setState({
                characters: box
            })
        })
        // catchでエラー時の挙動を定義
        .catch(err => {
            console.log("err:", err);
        })
    }
    

    render() {
        return (
            <div id="parentroot">
                <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
                <div>
                    <Card 
                    characters={this.state.characters}
                    loading={this.state.loading}
                    this={this}
                    />
                </div>    
                <div>
                    <ModalWindow
                    src={this.state.modalImage}
                    this={this}
                    />
                </div>
            </div>
        )
    }
}
   
export default Monster


