import React, {Component} from "react"
import react from "react"
import { useEffect, useState } from "react"
import axios from "axios"

import Card from "../make_modal_card/card"
import ModalWindow from "../make_modal_card/modal"
import { useParams } from "react-router-dom"

const ComponentDidMount = (props: any) => {
    const { archetype } = useParams<{archetype: string}>() 

    props.props({
        ...props.values,
        valuesLoading: true
    })
    
    const characters: Array<any> = []
    let box: any = []
    
    useEffect (() => {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype)
        .then((results) => {
            const d = results.data["data"] as Array<any>
            characters.push(d);       
            for (let i = 0 ; i < characters.length ; i++) {
                for (let j = 0 ; j < characters[i].length ; j++) {
                    box.push(characters[i][j])
                    console.log(characters[i][j])
                }
            }        
        })
        .then(() => {
            props.props({
                ...props.values,
                valuesCharacters: box
            })
        })
        .catch(err => {
            console.log("err:", err);
        })
    }, [])

    return (
        <div id="parentroot">
            <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
            <div>
                <Card 
                characters={props.valuesCharacters}
                loading={props.valuesLoading}
                />
            </div>    
            <div>
                <ModalWindow
                src={props.valuesModalImage}
                />
            </div>
        </div>
    )
}

// const ComponentDidMount = (values: any, valuesLoading: boolean, valuesCharacters: any, valuesModalImage: string, props: react.Dispatch<react.SetStateAction<any>>) => {
//     const { archetype } = useParams<{archetype: string}>() 
//     console.log(values)
//     console.log(valuesLoading)
//     console.log(valuesModalImage)
//     console.log(valuesCharacters)
//     console.log(props)
//     props ({
//         ...values,
//         valuesLoading: true
//     })
    
//     const characters: Array<any> = []
//     let box: any = []
    
//     axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype)
//     .then((results) => {
//         const d = results.data["data"] as Array<any>
//         characters.push(d);       
//         for (let i = 0 ; i < characters.length ; i++) {
//             for (let j = 0 ; j < characters[i].length ; j++) {
//                 box.push(characters[i][j])
//                 console.log(characters[i][j])
//             }
//         }        
//     })

//     .then(() => {
//         props({
//             ...values,
//             valuesCharacters: box
//         })
//     })
//     .catch(err => {
//         console.log("err:", err);
//     })

//     return (
//         <div id="parentroot">
//             <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
//             <div>done</div>
//             <div>
//                 <Card 
//                 characters={valuesCharacters}
//                 loading={valuesLoading}
//                 // this={this}
//                 />
//             </div>    
//             <div>
//                 <ModalWindow
//                 src={valuesModalImage}
//                 // this={this}
//                 />
//             </div>
//         </div>
//     )
// }


const Archetypes = () => {
    const [values, setValues] = useState({
        loading: true,
        characters: {},
        modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
    })
    
    // ComponentDidMount();
    // useEffect(() => {
    //     ComponentDidMount(values, values.loading, values.characters, values.modalImage, setValues);
    // }, [])
    const { archetype } = useParams<{archetype: string}>() 

    // setValues ({
    //     ...values,
    //     loading: true
    // })
    
    const characters: Array<any> = []
    let box: any = []
    
    useEffect (() => {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype)
        .then((results) => {
            const d = results.data["data"] as Array<any>
            characters.push(d);       
            for (let i = 0 ; i < characters.length ; i++) {
                for (let j = 0 ; j < characters[i].length ; j++) {
                    box.push(characters[i][j])
                    console.log(characters[i][j])
                }
            }        
        })
        .then(() => {
            setValues ({
                ...values,
                characters: box
            })
        })
        .catch(err => {
            console.log("err:", err);
        })
    }, [])

    return (
        <div id="parentroot">
            <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
            <div>
                <Card 
                characters={values.characters}
                loading={values.characters}
                />
            </div>    
            <div>
                <ModalWindow
                src={values.modalImage}
                />
            </div>
        </div>
    )
    // return (
    //     <ComponentDidMount
    //     values = {values}
    //     valuesLoading = {values.loading}
    //     valuesCharacters = {values.characters}
    //     valuesModalImage = {values.modalImage}
    //     props = {setValues}
    //     />
    // )
}







// const Archetypes = () => {
//     const [values, setValues] = useState({
//         loading: true,
//         characters: {},
//         modalImage: "https://storage.googleapis.com/ygoprodeck.com/pics/38955728.jpg",
//     })

//     const ComponentDidMount = () => {
//         const { archetype } = useParams<{archetype: string}>() 
//         setValues({
//             ...values,
//             loading: true
//         })
        
//         const characters: Array<any> = []
//         let box: any = []
        
//         axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype)
//         .then((results) => {
//             const d = results.data["data"] as Array<any>
//             characters.push(d);       
//             for (let i = 0 ; i < characters.length ; i++) {
//                 for (let j = 0 ; j < characters[i].length ; j++) {
//                     box.push(characters[i][j])
//                     console.log(characters[i][j])
//                 }
//             }        
//         })
    
//         .then(() => {
//             setValues({
//                 ...values,
//                 characters: box
//             })
//         })
//         .catch(err => {
//             console.log("err:", err);
//         })
//     }
    
    
//     // ComponentDidMount();
//     useEffect(() => {
//         ComponentDidMount();
//     }, [])

//     return (
//         <div id="parentroot">
//             <meta name="viewport" content="width=divice-width, initial-scale=1.0"></meta>
//             <div>done</div>
//             <div>
//                 <Card 
//                 characters={values.characters}
//                 loading={values.loading}
//                 // this={this}
//                 />
//             </div>    
//             <div>
//                 <ModalWindow
//                 src={values.modalImage}
//                 // this={this}
//                 />
//             </div>
//         </div>
//     )
// }





export default Archetypes
