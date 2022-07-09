/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
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

function Tables() {
  return (
    <>
      <div className="content">
        <Form>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Your Items</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Serial No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Available Quantity</th>
                        <th>Price (Rs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td><img style={{ "height": "6em" }} alt="" src="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024"></img></td>
                        <td>Rice</td>
                        <td>
                          <Col className="pl-md-1" md="4">
                            <FormGroup>
                              <Input placeholder="Quantity" defaultValue={200} type="number" />
                            </FormGroup>
                          </Col></td>
                        <td className="text-center">
                          <Col className="pl-md-1" md="4">
                            <FormGroup>
                              <Input placeholder="Quantity" defaultValue={200} type="number" />
                            </FormGroup>
                          </Col>
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
  );
}

export default Tables;
