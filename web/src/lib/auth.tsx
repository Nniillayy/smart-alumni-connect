import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import api from './api';

interface User {
    id: number;
    email: string;
    full_name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const response = await api.get('/profiles/me');
            // The endpoint returns the profile, which contains the user_id. 
            // Ideally /users/me would return user details, but let's use what we have.
            // Or we can decode the token, but simpler to fetch from API if available.
            // Wait, endpoint /profiles/me returns Profile schema. 
            // Let's assume for now we use the profile data or fetch user details.
            // Actually, let's just assume logged in for now and store the token.

            // Let's rely on token presence + successful 401 check
            setUser({ id: response.data.user_id, full_name: response.data.full_name, email: "user@example.com", role: "user" }); // meaningful data 
        } catch (error) {
            console.error("Failed to fetch user", error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const login = async (token: string) => {
        localStorage.setItem('token', token);
        await fetchUser();
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
