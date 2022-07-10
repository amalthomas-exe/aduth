import React, { useState } from "react";
import AddItemField from "components/addItemField";

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
import ItemRow from "components/itemRow";

const Tables = () => {


  const [showAddItem, setShowAddItem] = useState(false);

  let addItem = () => {
    setShowAddItem(true);
  }

  let deleteItem = () => {

  }
  let handleChange = ()=>{
    //Api Call to edit values
    console.log("Api call here!!")
  }
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
                        <th>Name</th>
                        <th>Available Quantity</th>
                        <th>Price (Rs)</th>
                      </tr>
                    </thead>
                    <tbody id="tableBody">
                      <ItemRow no={1} name="Rice" defaultQuantity={100} defaultPrice={150} handleChange={handleChange} deleteItem={deleteItem}/>
                      {showAddItem && <AddItemField setShowAddItem={setShowAddItem} check={showAddItem} />}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Button onClick={addItem} className="btn-fill" color="primary">
                    Add Items
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Tables;
