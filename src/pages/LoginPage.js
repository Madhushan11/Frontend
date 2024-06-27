import LoginForm from "../components/LoginForm";
import './LoginPage.css';
import NavigationBar from '../components/NavigationBar/Navigation';

export default function LoginPage(){
    return ( 
        <body class="login-page">
            <div class="login-page">
            <NavigationBar />
            <LoginForm/>
        </div>
        </body>
        
    );
}
