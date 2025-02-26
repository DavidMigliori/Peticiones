import { useEffect, useState } from "react"

export const Peticiones =({}) =>{
    const [Personas, setpersonas] = useState ([])
    const obtenerdatos =async() => { 
        let respuestas = await fetch ("https://dummyjson.com/users")
        let data = await respuestas.json ()
        setpersonas (data.users)
    }
     useEffect (()=>{
        obtenerdatos()
         },[])
         if (Personas.length == 0){ 
            
            return <h1>Cargando</h1>
         } 
         console.log (Personas) 
    return <>
    <h1>Usuarios</h1>
    {Personas.map((element,index)=>{
        return <div key={index}>
            <h3>{element.firstName}</h3>
            <h3>{element.lastName}</h3>
            <h2>{element.age}</h2>
            <h4>{element.address.address}</h4>
            <h5>{element.email}</h5>
            <h6>{element.eyeColor}</h6>
            <h4>{element.age<30?"Menor de 30":"Mayor de 30"}</h4>


        </div>

    })}
    
    </>

} 