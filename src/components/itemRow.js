import React from 'react'
import {
    Button,
    Input,
    FormGroup,
    Col,
    Row
} from 'reactstrap'

function ItemRow(props) {
    return (
        <>
            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Input placeholder="Quantity" onChange={props.handleChange} defaultValue={props.defaultQuantity} type="number" />
                        </FormGroup>
                    </Col></td>
                <td className="text-center">
                    <Row>
                    <Col className="pl-md-1" md="8">
                        <FormGroup>
                            <Input placeholder="Price" onChange={props.handleChange} defaultValue={props.defaultPrice} type="number" />
                        </FormGroup>
                    </Col>
                    </Row>
                </td>
                <td>
                    <Button onClick={props.deleteItem} size="sm" color="danger"><i className="tim-icons icon-trash-simple"></i></Button>
                </td>
            </tr>
        </>
    )
}

export default ItemRow