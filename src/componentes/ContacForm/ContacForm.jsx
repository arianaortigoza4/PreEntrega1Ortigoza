import { useState } from "react"
const ContacForm= ({onCreate}) =>{
    const[name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({name})

    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button>Generar orden</button>
        </form>
    )
}

export default ContacForm