import type { BaseSyntheticEvent } from "react";

export function MouseClicker() {
    
    function handleMouseClick(event:BaseSyntheticEvent) {
        console.log(event.currentTarget.name)
    }

    function handleButtonImgClick(event:BaseSyntheticEvent) {
        event.stopPropagation()  // Ho utilizzato il metodo stopPropagation() così da fermare l'effetto "BUBBLING" siccome in React gli eventi si propagano dal figlio al genitore
        console.log(event.currentTarget.src)
    }

    return (
        <button name="one" onClick={handleMouseClick}>
            <img src="../../favicon.svg" alt="Vite favicon" onClick={handleButtonImgClick}/>
            Click me!
        </button>
    )
}

export function MultiButton() {
    function handleMouseClick(event:BaseSyntheticEvent) {
        console.log(event.currentTarget.name)
    }

    return (
        <>
            <button name="one" onClick={handleMouseClick}>ONE</button>
            <button name="two" onClick={handleMouseClick}>TWO</button>
            <button name="three" onClick={handleMouseClick}>THREE</button>
        </>
    )
}