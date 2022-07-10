import React from 'react'
import {Button} from 'reactstrap'
function OrdersRow(props) {

    return (
        <>
            <tr>
                <td>{props.no}</td>
                <td>{props.customer}</td>
                <td>{props.order}</td>
                <td>{props.quantity}</td>
                <td className="text-center">{props.price}</td>
                {!props.completed ? <td>
                    <Button onClick={props.completeOrder} className="btn-fill" size="sm" color='success'><i className="tim-icons icon-check-2"></i></Button>
                </td>:""}
            </tr>
        </>
    )
}

export default OrdersRow;