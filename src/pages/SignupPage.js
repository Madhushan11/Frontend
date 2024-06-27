import SignupForm from '../components/SignupForm'
import './SignupPage.css'
import NavigationBar from '../components/NavigationBar/Navigation';


export default function SignupPage() {
  return (
    <body class="signup-page">
      <div>
      <NavigationBar />
      <SignupForm/>
    </div>
    </body>
  );
}
