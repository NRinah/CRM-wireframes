import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-body">
            <div className="login-panel"></div>

            <div className="login-content">
                <img src="assets/layout/images/ernu-logo.jpeg" alt="babylon-layout" />

                <div className="login-input-wrapper">
                    <InputText placeholder="Username" />
                    <i className="pi pi-user"></i>
                </div>

                <div className="login-input-wrapper">
                    <InputText placeholder="Password" />
                    <i className="pi pi-lock"></i>
                </div>

                <Button style={{backgroundColor:'#239B47'}}
                    label="LOGIN"
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </div>
        </div>
    );
};
