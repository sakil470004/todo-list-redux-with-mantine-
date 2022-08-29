import { Box, Divider } from '@mantine/core';
import React from 'react'
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux'
import { colorChange, statusChange } from '../../redux/fillter/fillter.actions';

function Todos() {
    const todos = useSelector(state => state.todos)
    const filters = useSelector((state) => state.filters);
    const { colors, status } = filters;
    const dispatch = useDispatch();
    const remainingTodo = todos.filter((todo) => !todo.completed);

    const handleStatusChange = (status) => {
        dispatch(statusChange(status));
    };
    const setColorFilter = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChange(color, "removed"));
        } else {
            dispatch(colorChange(color, "added"));
        }
    };
    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed;
            case "Incomplete":
                return !todo.completed;
            default:
                return true;
        }
    };

    const filterByColor = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };
    return (
        <div>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                {
                    todos
                        .filter(filterByColor)
                        .filter(filterByStatus).map(TD => {
                            return <Todo key={TD.id} todo={TD} />
                        }, [])
                }
            </div>
            <Divider style={{ margin: '1rem 1rem' }} />
            <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 1.5rem', alignItems: 'center' }}>

                <small>{remainingTodo.length} task left</small>
                <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
                    <Box style={{ fontWeight: status === "All" && "bold" }}
                        onClick={() => handleStatusChange("All")}
                    >
                        All
                    </Box>
                    -
                    <Box style={{ fontWeight: status === "Complete" && "bold" }}
                        onClick={() => handleStatusChange("Complete")}
                    >
                        Complete
                    </Box>
                    -
                    <Box style={{ fontWeight: status === "Incomplete" && "bold" }}
                        onClick={() => handleStatusChange("Incomplete")}
                    >InComplete</Box>
                    <Box style={{
                        cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'red', border: '2px solid red',
                        background: colors?.includes("red") && 'red'
                    }}
                        onClick={() => setColorFilter("red")}
                    >

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'green', border: '2px solid green', background: colors?.includes("green") && 'green' }}
                        onClick={() => setColorFilter("green")}
                    >

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '0.8rem', height: '0.8rem', borderRadius: '50%', color: 'orange', border: '2px solid orange', background: colors?.includes("orange") && 'orange' }}
                        onClick={() => setColorFilter("orange")}
                    >

                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default Todos;