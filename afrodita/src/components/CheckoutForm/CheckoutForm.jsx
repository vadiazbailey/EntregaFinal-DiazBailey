import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [direc, setDirec] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Limpiar mensajes de error
        setError('');

        // Validación de campos
        if (!name || !phone || !direc || !email) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Validación de nombre y dirección no vacíos
        if (name.trim() === '' || direc.trim() === '') {
            setError('Nombre y dirección no pueden estar vacíos.');
            return;
        }

        // Validación de teléfono como solo números
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phone)) {
            setError('Teléfono debe contener solo números.');
            return;
        }

        // Validación de email con @
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Email no válido.');
            return;
        }

        const userData = {
            name,
            phone,
            direc,
            email
        };

        try {
            onConfirm(userData);
        } catch (error) {
            setError(`Error al procesar la orden: ${error.message}`);
        }
    };

    return (
        <div>
            {error && <div style={{ color: 'red', marginBottom: '10px', display: 'flex', justifyContent:'center'}}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Teléfono:
                    <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    Dirección:
                    <input type="text" placeholder="Dirección" value={direc} onChange={(e) => setDirec(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default CheckoutForm;