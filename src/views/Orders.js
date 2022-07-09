import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Input,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

function Orders() {
    return (
        <><div className="content">
            <Form>
                <Row>
                    <Col className="md-12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Completed Orders</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Order No.</th>
                                            <th>customer</th>
                                            <th>Order</th>
                                            <th>Quantity</th>
                                            <th className="text-center">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Alwin</td>
                                            <td>Rice</td>
                                            <td>5kg</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Pending Orders</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Order No.</th>
                                            <th>customer</th>
                                            <th>Order</th>
                                            <th>Quantity</th>
                                            <th className="text-center">Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Ebin</td>
                                            <td>Snuggies</td>
                                            <td>10</td>
                                            <td className="text-center">50</td>
                                            <td>
                                                <FormGroup>
                                                    <Input type='checkbox' defaultChecked={true}></Input>
                                                </FormGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </div>
        </>
    )
}

export default Orders