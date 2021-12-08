
import React from 'react'
import { Button } from 'react-bootstrap'

const IconButton = (props) => {
    const {icon, ...rest} = props
    return (
        <Button {...rest} variant="outline-primary d-flex align-items-center btn-icon">
        {
            icon
        }
        </Button>
    )
}

export default IconButton
