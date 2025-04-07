import React from 'react'

const Alert = (props) => {
    const capitalize = (text) => {
        let low = text.toLowerCase()
        return low.charAt(0).toUpperCase() + low.slice(1)
    }
    return (
        <div style={{height:'70px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}! </strong> {props.alert.msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
        </div>
    )
}

export default Alert
