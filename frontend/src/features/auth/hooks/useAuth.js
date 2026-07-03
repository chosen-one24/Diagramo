import { useContext } from "react"
import { AuthContext } from "../auth.context.js";
import { login, logout, register } from "../services/auth.api.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;


    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);

            const data = await login(email, password);

            await delay(1500); // 1.5s delay to show custom loader animation
            setUser(data.user);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const data = await register(username, email, password);

            await delay(1500); // 1.5s delay to show custom loader animation
            setUser(data.user);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            await delay(1500); // 1.5s delay to show custom loader animation
            setUser(null);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };



    return { user, loading, handleLogin, handleRegister, handleLogout }
}