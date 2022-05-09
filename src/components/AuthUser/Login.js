import React from 'react';
import { useNavigate } from 'react-router-dom';

const btnStyle = {
    width: '250px',
    height: '30px',
    marginTop: '10px'
}

const Login = () => {
    const navigate = useNavigate();
    const handleForLogin = (event) => {
        //-------
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        // const myNm = 'my name is kibria 22'
        console.log(email, password);

        const url = `http://localhost:5000/login`
        fetch(url, {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password }),

            // kib1: JSON.stringify({'my name is kibri 11'}),
            // kib2: JSON.stringify({myNm}),
            // kib3: JSON.stringify('my name is kibria 33'),

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('accessToken3', data.accessToken2);
                    navigate('/orders')
                    // return navigate('/orders')  // can redirect user any page from here to navigate to true user
                }
                console.log(data);
                   // return navigate('/signup')  // can redirect user any page from here to navigate for false user
            })

        //-------
    }

    return (
        <div>
            <div>
                <form onSubmit={handleForLogin} className="loginForm">
                    <input className='loginInputStyle' type="email" name="email" id="" /> <br />
                    <input className='loginInputStyle' type="password" name="password" id="" /> <br />
                    <input style={btnStyle} type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;