

export const BasicFunctions = () => {
    //retorna el tipo de valor que le coloquemos en el return tambien podemos indicar que regresara un tipo de dato con : y el dato
    
  const addTwoNumber = (a:number,b:number): number=>{
    return a + b;
  }
  
  
    return (
    <>
    <h3>funciones</h3>
    <span>El resultado de sumar: {addTwoNumber(2,8)}</span>
    
    </>
  )
}
