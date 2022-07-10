import React, { useState } from "react";

import {
    Card,
    Button,
    CardFooter,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Form,
    FormGroup,
    Input,
    Row,
    Col
} from "reactstrap";

const ShopEdit = () => {
    let AddShop = () => {
        setAddShop(true);
    }
    let hideAddShop = () => {
        setAddShop(false);
    }
    let addShopToServer = () => {
        console.log("Added to API")
        setAddShop(false);
    }
    const [addShop, setAddShop] = useState(false);
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h4 className="title">Your Shop</h4>
                            </CardHeader>
                            {(addShop) ?
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="px-md-3" md="5">
                                                <FormGroup>
                                                    <label>Shop Name</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Shop Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Address</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Shop Address"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                                <Button onClick={addShopToServer} size="sm" className="btn-fill" color="success"><i className="tim-icons icon-simple-add"></i></Button>
                                                <Button onClick={hideAddShop} size="sm" className="btn-fill" color="danger"><i className="tim-icons icon-simple-remove"></i></Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody> : ""
                            }
                            {(!addShop)?<CardFooter>
                                <Button onClick={AddShop} className="btn-fill" color="primary">
                                    Add Shop
                                </Button>
                            </CardFooter>:""}
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ShopEdit;