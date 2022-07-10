import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Row,
    Col,
    Button,
    CardFooter,
    Input,
    CardTitle
} from 'reactstrap'
function LoginPage() {
    const login = ()=>{
        alert("login");
        <Redirect path='/data' />
    }
    return (
        <>
            <div className='container mx-auto' style={{"min-height":"100vh","display":"flex","alignItems":"center"}}>
                <Card className='mx-auto container'>
                    <CardHeader className='mx-auto'>
                        <CardTitle><h2>Login/ Signup</h2></CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form action='/admin/dashboard'>
                            <Col className='md-4'>
                                <Row className="px-md-3" md="5">
                                    <FormGroup>
                                        <label htmlFor='username'>Username</label>
                                        <Input
                                            id='username'
                                            defaultValue=""
                                            placeholder="Username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Row>
                                <Row className="pl-md-3" md="4">
                                    <FormGroup>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <Input placeholder='Password' id="password" type="password" />
                                    </FormGroup>
                                </Row>
                        </Col>
                    </Form>
                </CardBody>
                <CardFooter className='mx-auto'>
                    <Button className='btn btn-fill' color='success' onClick={login}>Login/Signup</Button>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}

export default LoginPage