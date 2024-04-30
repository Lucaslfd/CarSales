import { ReactNode, createContext,  useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services";

interface AuthProviderProps{
  children: ReactNode
};

type AuthContextsData = {
  signed: boolean;
  loadinAuth: boolean;
};

interface UserProps{
  uid: string;
  name: string | null;
  email: string | null;
};

export const AuthContexts = createContext({} as AuthContextsData);

function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadinAuth, setLoadinAuth] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser({
          uid: user.uid,
          name: user?.displayName,
          email: user?.email
        });
        setLoadinAuth(false);
      } else {
        setUser(null);
        setLoadinAuth(false);
      }
    })

    return () => {
      unsub();
    }
  }, [])

  return(
    <AuthContexts.Provider 
    value={{
      signed: !!user,
      loadinAuth
      }}>
      { children }
    </AuthContexts.Provider>
  )
};

export default AuthProvider;