import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'

import './Styles/LogReg.css'
import Input from '../../Components/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

function LogReg({ m }) {
    const navigate = useNavigate();
    //Global States
    const [Auth, setAuth] = useContext(Context);

    //States
    const [LogReg, setLogReg] = useState(m);
    const [ErrMsg, setErrMsg] = useState(null);

    //Effects
    useEffect(() => {
        setAuth(localStorage.getItem('Auth') === 'true')
    }, [Auth])

    //Functions
    const HandleToggle = () => {
        if (LogReg === 'Reg') {
            setLogReg('Log');
            navigate('/Login');
        } else {
            setLogReg('Reg');
            navigate('/Register');
        }
    }
    const HandleToggleShow = (e) => {
        if (e.target.nextSibling.type === 'text') {
            e.target.nextSibling.type = 'password'
        } else {
            e.target.nextSibling.type = 'text'
        }
    }

    const HandleExecLogin = (e) => {
        let inputs = e.target.parentElement.querySelectorAll('input[atr]');
        if (inputs[0].value === '') {
            setErrMsg('Ingresa un Usuario');
            return;
        }
        if (inputs[1].value === '') {
            setErrMsg('Ingresa tu contraseña');
            return;
        }

        setErrMsg(null);
        setAuth(true);
        localStorage.setItem('Auth', true);
    }

    const HandleExecRegister = (e) => {
        let inputs = e.target.parentElement.querySelectorAll('input[atr]');

        if (inputs[0].value === '') {
            setErrMsg('Ingresa un Usuario');
            return;
        }
        if (inputs[1].value === '') {
            setErrMsg('Ingresa tu contraseña');
            return;
        }
        if (inputs[2].value === '') {
            setErrMsg('Las contraseñas no coinciden');
            return;
        }
        setErrMsg(null);
        setAuth(true);
        localStorage.setItem('Auth', true);
    }

    return (
        <main className='main-LogReg fixed h-100 w-100 relative'>
            <Link className='mlr-logo ski absolute' to={'/'}></Link>
            <div className='mlr-form absolute'>
                <form className='f-col relative g-25'>
                    <header className='f-col g-5'>
                        <h1 className='text-center'>{LogReg === 'Reg' ? 'Sign Up' : 'Sign In'}</h1>
                        <p className='a-fnt-2 text-center'>Don’t have an account? <span className='fnt-link' onClick={HandleToggle}>{LogReg === 'Reg' ? 'Sign In' : 'Sign Up'}</span></p>
                    </header>
                    <div className='f-col g-25 mt-10 mlr-js'>
                        <Input text={'Username'} n={'username'} atr={'user'} />
                        <div className='f-col g-10'>
                            <Input t={'password'} text={'Password'} f={HandleToggleShow} atr={'pass1'} />
                            {LogReg === 'Reg' ? null : <Link to={'/ResetPassword'} className='fnt-link f-align-self-end'>Forgot password?</Link>}
                        </div>
                        {LogReg === 'Reg' ? <Input t={'password'} text={'Repeat Password'} f={HandleToggleShow} atr={'pass2'} /> : null}
                    </div>
                    <footer className='mlr-fot'>
                        {ErrMsg ? <p className='a-fnt-2 text-center fnt-s14'>{ErrMsg}</p> : null}
                        <h5 className='w-100 text-center fnt-s15'>OR</h5>
                        <div className='f-row g-30 mt-25 f-justify-center'>
                            <span className="ski pointer"></span>
                            <span className="ski pointer"></span>
                            <span className="ski pointer"></span>
                        </div>
                    </footer>
                    <span className='mlr-button btn btn-primary pointer mt-15' onClick={LogReg === 'Log' ? HandleExecLogin : HandleExecRegister}>Continue</span>
                    <ul className='fl-com f-justify-center'>
                        <Link>HLZ 2024 Copyright</Link>
                        <Link>Contact</Link>
                        <Link>Community</Link>
                        <Link>Terms of Service</Link>
                    </ul>
                </form>
            </div>
        </main>
    )
}

export default LogReg