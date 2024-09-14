import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteUser } from '../app/feature/userSlice';


const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }))
  }
  return (
    <div className='home-page'>
      <h3 className='text-center'>Home Page</h3>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Stack direction='horizontal' gap={3}>
                          <Link to={`/update/${user.id}`}>
                            <Button variant='primary'>Edit</Button>
                          </Link>
                          <Button variant='danger' onClick={() => handleDelete(user.id)}>Delete</Button>
                        </Stack>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <div className='d-flex justify-content-end'>
              <Link to={'/create'}>
                <Button variant='success' size='md'>Create</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home