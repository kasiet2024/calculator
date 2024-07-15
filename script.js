let num1= document.getElementById("num1")
let num2= document.getElementById("num2")

const plus =() => {
    let res = parseInt(num1.value) + parseInt(num2.value)
    
    document.getElementById("result").innerHTML = res
    }
    
    const minus =() => {
        let res = parseInt(num1.value) - parseInt(num2.value)
        
        document.getElementById("result").innerHTML = res
        }

   
        const deline =() => {
            let res = parseInt(num1.value) * parseInt(num2.value)
            
            document.getElementById("result").innerHTML = res
            }

            const mul =() => {
                let res = parseInt(num1.value) / parseInt(num2.value)
                
                document.getElementById("result").innerHTML = res
                }
 const b =() => {
 let res = parseInt(num1.value) % parseInt(num2.value)
                    
  document.getElementById("result").innerHTML = res
                    }
                    const s =() => {
                        let res = parseInt(num1.value) = parseInt(num2.value)
                        
                        document.getElementById("result").innerHTML = res
                        }
            
        
