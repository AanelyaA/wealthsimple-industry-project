import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            if (response.data.success) {
                navigate('/dashboard'); // redirect to dashboard on success
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Log in</h2>
            <form className='form__container' onSubmit={handleSubmit}>
                <div className='input__container'>
                    <div >
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className='error__message'>{error}</p>}
                </div>
                <button type="submit">Log in</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
            <p><a href="/forgot-password">Forgot password?</a></p>
        </div>
    );
};

export default Login;
