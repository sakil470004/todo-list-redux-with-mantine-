import { Box, Checkbox, Divider } from '@mantine/core'
import React from 'react'
import cancelImg from './../../assets/images/cancel.png'

function Todo({ todo }) {
    const { text, status, color } = todo;
    return (
        <Box sx={{ margin: '0rem 1rem', padding: '0rem 1rem' }}>
            <Divider my="sm" />
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

                <Checkbox
                    checked={status === 'complete' ? true : false}
                    label={text}
                    color="green"
                    radius="xl"
                    style={{ cursor: 'pointer' }}
                />
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'red', border: '2px solid red', background: color === 'red' ? 'red' : '', }}>

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'green', border: '2px solid green', background: color === 'green' ? 'green' : '', }}>

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'orange', border: '2px solid orange', background: color === 'orange' ? 'orange' : '', }}>

                    </Box>
                    <img src={cancelImg} style={{ cursor: 'pointer', width: '1rem', height: '1rem' }} alt='cancel' />
                </Box>
            </Box>
        </Box>
    )
}

export default Todo