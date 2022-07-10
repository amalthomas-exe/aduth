import React from 'react';
import {
    Input,
    FormGroup,
    Row,
    Col,
    Button
} from 'reactstrap';



function AddItemField(props) {
    const handleAddItem = (val) => {
        if(val==null){
            props.setShowAddItem(false);
        }else{
        props.setShowAddItem(false);
        console.log(props.check)
        }
    }


    return (
        <>
            <tr>
                <td><Col className="pl-md-1" md="10">
                    <FormGroup>
                        <Input placeholder="Serial no" type="number" />
                    </FormGroup>
                </Col></td>
                <td><Col className="pl-md-1" md="10">
                    <FormGroup>
                        <Input placeholder="Name" type="text" />
                    </FormGroup>
                </Col></td>
                <td>
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Input placeholder="Quantity" defaultValue={0} type="number" />
                        </FormGroup>
                    </Col></td>
                <td className="text-center">
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Input placeholder="Quantity" defaultValue={0} type="number" />
                        </FormGroup>
                    </Col>
                </td>
                <td>
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Button onClick={handleAddItem} size="sm" className="btn-fill" color="success"><i className="tim-icons icon-check-2"></i></Button>
                        </FormGroup>
                    </Col>
                </td>
                <td>
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Button onClick={handleAddItem} size="sm" className="btn-fill" color="danger"><i className="tim-icons icon-simple-remove"></i></Button>
                        </FormGroup>
                    </Col>
                </td>
            </tr>
        </>
    )
}

export default AddItemField