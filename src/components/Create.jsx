import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import users from '../data/users';


const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const canSubmit = Boolean(name) && Boolean(email);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        users.push({
            name, email
        })
        navigate('/')
    }
    return (
        <div className='create-page'>
            <Link to={'/'}>
                <Button variant='outline-light'>Back</Button>
            </Link>
            <div className='create-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit" disabled={!canSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Create