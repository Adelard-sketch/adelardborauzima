import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthState, LoginCredentials } from '@/types/user';
import { authService } from '@/services/authService';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const user = await authService.getCurrentUser();
          setState({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          localStorage.removeItem('token');
          setState({ user: null, isAuthenticated: false, isLoading: false });
        }
      } else {
        setState({ user: null, isAuthenticated: false, isLoading: false });
      }
    };
    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { user, token } = await authService.login(credentials);
    localStorage.setItem('token', token);
    setState({ user, isAuthenticated: true, isLoading: false });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setState({ user: null, isAuthenticated: false, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
