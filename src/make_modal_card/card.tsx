import React from "react";
import { Component } from "react";
import "./card.css"



const Card = (props: any) => {
    const cardBox: any = []

    for (let i = 0 ; i < props.characters.length ; i++) {
        const monsterItem = React.createElement(
            "div",
            {
                className: "monsterItem"
            },
            props.characters[i].name
        )
        const flavorItem = React.createElement(
            "div",
            {
                className: "flavorItem"
            },
            props.characters[i].desc
        )
        // monsterItemとflavorItemをindividualCardを親要素にしてにまとめて、一枚のカードのようにする。
        const individualCard = React.createElement(
            "div",
            {
                key: i,
                id: `individualCard${i}`,
                className: "parentItem",
                onClick: () => props.this.searchCard(i, props.characters[i].id)
            }, 
            monsterItem, flavorItem)

            cardBox.push(individualCard)
        }

        //individualCardがたくさん入ったchildBoxを出力する。
        const cardList = React.createElement(
            "div",
            {
                className: "cardList", 
                id: "cardList"
            },
            cardBox 
        )

    return (
        <>
        {cardList}
        </>
    )

}


export default Card


