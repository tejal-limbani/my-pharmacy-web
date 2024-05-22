import { AuthFormWrapper } from "@/components/auth/auth-form-wrapper";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
    return (
        <AuthFormWrapper
            title="Welcome Back"
            subTitle="Please Login"
        >
            <LoginForm />
        </AuthFormWrapper>
    );
}

export default LoginPage
