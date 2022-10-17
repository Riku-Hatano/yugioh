import React from "react"
import "./modal.css"

const ModalWindow = (props: any) => {
    const imageModalWindow = React.createElement(
        "img",
        {
            src: props.src,
            className: "image-modal-window"
        },
        null
    )
    const parentModalWindow = React.createElement(
        "div",
        {
            className: "parent-modal-window",
            id: "parentModalWindow",
            onClick: () => props.this.eraseModalWindow()
        },
        imageModalWindow
    )

    // うまく動作しなかった処理。
    // const parentModalWindow = document.createElement("div") as HTMLDivElement
    // const imageModalWindow = document.createElement("img") as HTMLImageElement
    // parentModalWindow.classList.add("parent-modal-window")
    // imageModalWindow.classList.add("image-modal-window")
    // imageModalWindow.id = ("imageModalWindow")
    // imageModalWindow.src = props
    // parentModalWindow.appendChild(imageModalWindow)
    // console.log(props)
    return (
        <>
        {parentModalWindow}
        </>
    )
}

export default ModalWindow
