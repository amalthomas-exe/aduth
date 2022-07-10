import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Input,
    Button,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";
import OrdersRow from 'components/ordersRow';

function Orders() {

    const completeOrder = ()=>{
    }
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
                                        <OrdersRow no={1} customer="Alwin" order="Rice" quantity="5kg" price={500} completed={true}/>
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
                                        <OrdersRow no={2} customer="Ebin" order="Biscuit" quantity={10} price={100} completed={false} completeOrder={completeOrder}/>
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