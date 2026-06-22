import { useEffect, useRef } from "react"


export function FirstMountLogger() {
        const hasMounted = useRef(false)

        useEffect(() => {
            if (!hasMounted.current) {
                console.log("Il componente è stato montato per la prima volta")
                hasMounted.current = true
            }
        }, [])

    return null
    }