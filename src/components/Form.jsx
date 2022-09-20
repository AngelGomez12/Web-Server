import React from 'react'
import { useState } from 'react'

export const Form = () => {
 
    const [resultado, setResultado] = useState();
    let x1 
    let x2
    let delta
    const bhaskara = (a,b,c) => {
        const delta = b * b - 4 * a * c;

        if (!a || !b || !c) {
            alert("a, b , c");
        } else if (a == 0) {
            alert("A debe ser diferente de 0");
        } else if (delta < 0) {
           alert("No tiene raiz")
        } else {
             x1 = (-b + Math.sqrt(delta)) / (2 * a);
             x2 = (-b - Math.sqrt(delta)) / (2 * a);
        }
         const raices = {
            x1: x1,
            x2: x2,
            A: a,
            B: b,
            C: c,
            delta: delta
        }
        setResultado(raices)
    }

    const calcular = e => {
        e.preventDefault()

        let datos = e.target
        const A = datos.A.value
        const B = datos.B.value
        const C = datos.C.value
            
        if ((A >= 1 && A <= 100) && (B >= 1 && B <= 100) && (C >= 1 && C <= 100)) {
            bhaskara(A,B,C)
        } else {
            alert("Los numeros tienen que ser entre 1 y 100")
        }
    }
    
  return (
    <div className='container'>
        <form onSubmit={calcular} className='form-container'>
            <label htmlFor="">A: 
            <input type="number" name='A'/>
            </label>
            <label htmlFor="">B:
            <input type="number" name='B'/>
            </label>
            <label htmlFor="">C:
            <input type="number" name='C'/>
            </label>
            <input type="submit" name='enviar'  className='button'/>
        </form>
        <div>
            <p>{resultado ? `${resultado.A}x² + ${resultado.B}x + ${resultado.C} = 0` : ""}</p>
            <p>{resultado ? ` Δ= ${resultado.B}² - 4 * ${resultado.A}x * ${resultado.C} = ${resultado.delta}` : ""}</p>
            <p>{resultado  && resultado.delta > 0 ? 
            `x1= -${resultado.B} - √${resultado.delta}/2*${resultado.A}
            = -2 - 0.4 √15
            = ${resultado.x1.toFixed(4)}` 
             
             : ""}</p>
            <p>{resultado && resultado.delta > 0 ? 
            `x2= -${resultado.B} - √${resultado.delta}/2*${resultado.A}
            = -2 - 0.4 √15
            = ${resultado.x2.toFixed(4)}` 
             
             : ""}</p>
        </div>
    </div>
  )
}
