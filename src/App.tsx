import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import RegistrationForm from './components/registration/steps/PersonalInfoStep';
import './App.css';
import MultiStepForm from './components/registration/MultiStepForm';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		 <MultiStepForm />
		</>
	);
}

export default App;
