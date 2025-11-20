import { create } from "zustand";


interface AuthState {
    status: 'authenticaded' | 'anauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    };
    login: (email: string, password: string)=> void;
    logout: ()=> void;

}

export const useAuthStore = create<AuthState>()((set)=>({
    status: 'checking',
    token: undefined,
    user: undefined,
        login: (email: string, password: string)=> {
            set({
                status: 'authenticaded',
                token: 'ABC123',
                user:{
                    name:'John Doe',
                    email:email,
                }
            });
        },
        logout: ()=> {
            set({
                status: 'anauthenticated',
                token: undefined,
                user: undefined,
            });
        },


}))
