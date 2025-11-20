//asi le damos un tipado a cada uno de nuestos atributos

interface Person {
     firstName: string;
     lastName: string;
     age: number;
    //genera un objeto como el de abajo de tipo adres con los atributos tipados
     address: Address;
    //con el signo mostramos que esto sera opcional
     isAlive?: boolean;

}
 //para que quede mas limpio el codigo lo que podemos hacer es lo siguiente
interface Address {
    country: string;
    houseNo: number;
  }
 
 

export const ObjectLIteral = () => {
  
  //es un objeto como una persona asi se crea los objetos en typescrip

  const person: Person = {
      age: 37,
      firstName: 'Daniel',
      lastName: 'perez',
      isAlive: true,
      address: {
          country: "",
          houseNo: 0
      }
  }
   

 
    return (
    <>
    <h3>Objetos literales</h3>
    <pre>
        
        {JSON.stringify(person,null, 2)}
    </pre>
    </>
  )
}
