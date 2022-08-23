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
        </>
    )
}

export default Todos;