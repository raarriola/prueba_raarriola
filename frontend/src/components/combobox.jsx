import React from 'react'
import { Form } from 'react-bootstrap'

const ComboBox = (props) => {
    const {options, labelOption} = props
    const optionHandler=(option)=>{
        if(labelOption===undefined)
            return option
        else
            return labelOption(option)
    }

    return (
        <Form.Select {...props}>
        {
            options.map(item=>
                <option value={item}>{optionHandler(item)}</option>
            )
        }
        </Form.Select>
    )
}

export default ComboBox
