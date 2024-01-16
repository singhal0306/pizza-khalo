import React from 'react'

export default function Error({ error }) {
    return (
        <div className='alert alert-danger'>
            {error}
        </div>
    )
}