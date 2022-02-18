/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../../components/Container/Container";
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

export default function Login () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
      
      const login = {
          email: email,
          password: password
      }

      axios.post('/auth/login', login)
      .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token)
      })
    }
    
    return (
        <div className='altura'>
            <Container>
            
                <form  onSubmit={handleSubmit}>
                    <h3>Entrar</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Digite o seu e-mail" required onChange={event => setEmail(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" placeholder="Digite uma senha" required onChange={event => setPassword(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Logar</button>
                    <p className="forgot-password text-right">
                        Esqueceu <a href="#">Senha?</a>
                    </p>
                </form>
            </Container>
        </div>
    );    
}