import { Box, Divider } from '@mantine/core';
import React from 'react'
import Todo from './Todo';

function Todos() {
    const todos = [
        {
            id: 1,
            text: "learn JS",
            status: 'complete',
            color: 'red',
        },
        {
            id: 2,
            text: "learn Redux",
            status: 'incomplete',
            color: '',
        },

    ]
    return (
        <>
            {
                todos.map(TD => {
                    return <Todo todo={TD} />
                }, [])
            }
            <Divider style={{ margin: '1rem 1rem' }} />
            <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 1.5rem', alignItems: 'center' }}>

                <small>4 task left</small>
                <Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <Box >
                        Complete
                    </Box>
                    <hr style={{ width: '2px', height: 'calc(100%-(2*0.8rem))', color: 'black', border: '1px solid black' }} />
                    <Box>InComplete</Box>
                    <Box style={{ cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'red', border: '2px solid red', }}>

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'green', border: '2px solid green', }}>

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'orange', border: '2px solid orange', }}>

                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Todos;