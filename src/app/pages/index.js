import {useEffect} from 'react';
import { getAuth } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import fireBaseConfig from "@/app/components/firebaseConfig";

export default function userProfile(){ 
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const app = initializeApp(fireBaseConfig);
        const auth = getAuth(app);
        setIsLoggedIn(true);
        setUser({});
},[])

if (!isLoggedIn || !user) return null;

return(
<main>
    
</main>
);
}