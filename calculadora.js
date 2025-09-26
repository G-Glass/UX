function calcular() {
  let numero1 = document.querySelector("#valor")
  let numero2 = document.querySelector("#valor2")
  let saida = document.querySelector("selecte")
  let responde = document.querySelector("#selec")
  let mais = document.querySelector("#mas")
  
  let v1 = Number(numero1.value)
  let v2 = Number(numero2.value)
  let s = saida
  
 
      responde.innerHTML=''
      for ( let n = 0 ; n <= v2; n++) {
        let item = document.createElement('option')
        item.text=`${v1} + ${n} = ${v1*n}`
        responde.appendChild(item)
      }
      
}