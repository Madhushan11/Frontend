import UserLoginForm from "../components/LoginForm";
import './LoginPage.css';
import NavigationBar from '../components/NavigationBar/Navigation';

export default function UserLoginPage(){
    return ( 
        <body class="login-page">
            <div class="login-page">
            <NavigationBar/>
            <UserLoginForm/>
        </div>
        </body>
        
    );
}
