import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import type { ReqResUserList, User,GetIterLegers} from '../interfaces';

const loadUsers = async(page: number = 1): Promise<User []>=>{
    try{
         const { data } =await axios.get<ReqResUserList>('https://reqres.in/api/users', {
            headers: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json'
            },
            params: {
                page:page
            }
        });    
            return data.data;
    }catch (error){
        console.log(error);
        return [];
    }
}
















const getInter = async (): Promise<GetIterLegers> => {
    try {
        const response = await axios.get<GetIterLegers>('https://ilp.interledger-test.dev/alice/');
        console.log("resultado", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error; // Propaga el error para que pueda ser manejado por la función que llama
    }
}
export const UsersPage = () => {
  
    const [users, setUsers] = useState<User []>([]);
    const currentPageRef = useRef(1);
    useEffect(() => {
  
   loadUsers(currentPageRef.current).then(setUsers);
   
    
    // fetch('https://reqres.in/api/users?page=2', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'x-api-key': 'reqres-free-v1' // Reemplaza esto con tu clave real
    //     }
    // })
    // .then(resp => resp.json())
    // .then(data => console.log(data))
    // .catch(err => console.error('Error:', err));
}, []);

const nexPage = async() => {
    currentPageRef.current++;
      const users = await loadUsers(currentPageRef.current);
      if (users.length > 0) {
        setUsers( users);
      } else {
        currentPageRef.current--;
      }  
    }       
const PrevPage = async() => {
    if (currentPageRef.current < 1) return;
        currentPageRef.current--;
    const users = await  loadUsers(currentPageRef.current);
    setUsers(users);
}

  return (
    <>
        <h3>Usuarios</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
             </thead>
             <tbody>
                {
                    users.map(user => (
                     <UserRow key={user.id} 
                     user={user}/>
                    ))
                }
             </tbody>
        </table>


         <div>
            <button onClick={PrevPage}>Prev</button>
            <button onClick={nexPage}>Next</button>
            
        </div>       
    </>
  )
}
interface Props {
    user:User
}


export const UserRow = ({user}: Props) => {
    const {avatar, email, first_name, last_name}= user;
  return (
    <tr key={user.id}>
        <td><img style={{width:'50px'}} src={avatar} alt="User avatar" /></td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
     </tr>

  )
}
