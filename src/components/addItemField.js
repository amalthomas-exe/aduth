import React,{props} from 'react';
import {
    Input,
    FormGroup,
    Row,
    Col,
    Button
} from 'reactstrap';



function AddItemField(props) {
    const handleAddItem = ()=>{
        props.setShowAddItem(false);
        console.log(props.check)
    }
    return (
        <>
            <tr>
                <td>01</td>
                <td><div style={{ "height": "6em", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}><Input type='file' name='imageFile' /></div></td>
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
                            <Button onClick={handleAddItem} className="btn-fill" color="primary">OK</Button>
                        </FormGroup>
                    </Col>
                </td>
            </tr>
        </>
    )
}

export default AddItemField