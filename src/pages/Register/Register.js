/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../../components/Container/Container";
import axios from "axios";
import { useState } from 'react'; 

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            nickname: nickname,
            password: password,
            passwordConfirmation: passwordConfirmation
        }

        axios.post('user/register', user).then(response => console.log(response))        
    }
    
    return (
        <Container>
            <form  onSubmit={handleSubmit}>
                <h3>Registro</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Seu Primeiro Nome" required onChange={event => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" placeholder="Sobrenome" required onChange={event => setNickname(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Digite seu um e-mail" required onChange={event => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite uma senha" required onChange={event => setPassword(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Confirmação Senha</label>
                    <input type="password" className="form-control" placeholder="Digite novamente" required onChange={event => setPasswordConfirmation(event.target.value)} />
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Registar</button>
                <p className="forgot-password text-right">
                    <a href="/login">log in?</a>
                </p>
            </form>
        </Container>
    );
    
}