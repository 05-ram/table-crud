import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../app/feature/userSlice';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.user);
    const existingUser = users.filter(f => f.id === id);
    const { name, email } = existingUser[0];
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/');
    }
    return (
        <div className='crud-page'>
            <Link to={'/'}>
                <Button variant='outline-light'>Back</Button>
            </Link>
            <div className='edit-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter Name" required value={uname} onChange={(e) => setUname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Enter Email" required value={uemail} onChange={(e) => setUemail(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Update

//27.57