import { DB } from "../../../data/api/functions";
import { useNavigate } from "react-router-dom";
import { auth,createUser,updateUser,createUserRequest } from "../../../data/api/auth";
import { useState, createContext,useContext,useEffect } from "react";
import AppModel from "../../model/app";
import { User } from "../../../data/api/models";
interface AuthContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    newUser: createUserRequest | null;
    setNewUser: (newUser: createUserRequest | null) => void;
    register: (newUser: createUserRequest) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    newUser: null,
    setNewUser: () => {},
    register: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<createUserRequest | null>(null);
    const navigate = useNavigate();
    
    const login = async (email: string, password: string) => {
     await auth(email, password);
        setUser(DB.authStore.model as unknown as User);
        navigate("/");
    };

    const logout = async () => {
        setUser(null);
        DB.authStore.clear();
        navigate("/login");
    };

    const register = async (newUser: createUserRequest) => {
        const user = await createUser(newUser);
        setUser(user as unknown as User);
        navigate("/");
    };

    useEffect(() => {
        const user = DB.authStore.model as unknown as User;
        if (user) {
            setUser(user);
        }
    }, []);
    



    return (
        <AuthContext.Provider
            value={{ user, setUser, login, logout, register, newUser, setNewUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;