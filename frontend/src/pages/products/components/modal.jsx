import React from 'react'
import { Modal,Button } from 'react-bootstrap'

const ModalProduct = (props) => {
    const {title} = props
    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>

            <Modal.Footer>
                {props.actions?props.actions:null}
            </Modal.Footer>
        </Modal>
    )
}

export default Modal
