import type { BaseSyntheticEvent } from "react"


export function UncontrolledForm() {

    function handleForm(event: BaseSyntheticEvent) {
        event.preventDefault()

        const formData = new FormData (event.target)
        const email = formData.get("email")
        const password = formData.get("password")

        console.log({email, password})
    }

    return (
        <form onSubmit={handleForm}>
            <div >
                <label htmlFor="email">Inserisci e-mail</label>
                <input type="email" id="email" name="email"/>
            </div>
            <div>
                <label htmlFor="password">Inserisci password</label>
                <input type="password" id="password" name="password"/>
            </div>
            

            <button type="submit">Login!</button>
        </form>
    )
}