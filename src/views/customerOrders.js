import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

function CustomerOrders() {
    return (
        <><div className="content">
            <Form>
                <Row>
                    <Col className="md-12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Your Orders</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Order No.</th>
                                            <th>Date</th>
                                            <th>Item</th>
                                            <th>Quantiy</th>
                                            <th className="text-center">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>01-07-2022</td>
                                            <td>Rice</td>
                                            <td>5kg</td>
                                            <td className="text-center">200</td>
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

export default CustomerOrders