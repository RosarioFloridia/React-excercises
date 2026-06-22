import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    
    return (
        <form>
            <div >
                <label htmlFor="focus">Focus me!</label>
                <input ref={inputRef} type="text" id="focus" name="focus"/>
            </div>
        </form>
    )
}