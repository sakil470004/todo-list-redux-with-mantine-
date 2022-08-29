import { Box, Center, Checkbox, Divider } from '@mantine/core'
import { IconEdit } from '@tabler/icons';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { colorselected, deletetodo, toggledTodo, updateTodo } from '../../redux/todo/todo.actions';
import cancelImg from './../../assets/images/cancel.png'

function Todo({ todo }) {
    const { text, completed, color, id } = todo;
    const [editStart, setEditStart] = useState(false);
    const [changedText, setChangedText] = useState(text);

    const dispatch = useDispatch();

    const handleColorChange = (color) => {
        dispatch(colorselected(id, color));
    };
    const handleTogle = () => {
        dispatch(toggledTodo(id));
    };
    const handleDeleteTodo = () => {
        dispatch(deletetodo(id));
    };
    const textBoxEditOn = () => {
        setEditStart(true)
        document.getElementById(`todo-editable-text-box-${id}`).focus();
    }
    const handleEditDone = () => {
        setEditStart(false)
        dispatch(updateTodo(id, changedText));
    }
    // aita fuck
    const demo = () => {
    }

    return (
        <Box sx={{ margin: '0rem 1rem', padding: '0rem 1rem', fontSize: '16px' }}>
            <Divider my="sm" />
            <div style={{ display: !editStart && 'none' }} id={`todo-editable-text-box-${id}`} contentEditable="true" suppressContentEditableWarning={true}
                onInput={e => setChangedText(e.currentTarget.textContent)}
                onBlur={handleEditDone}

            >
                {text}
            </div>

            <Box
                onChange={handleTogle}
                style={{ display: editStart ? 'none' : 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer' }} >
                    <Checkbox
                        checked={completed ? true : false}
                        color="green"
                        radius="xl"
                        onChange={demo}
                    />
                    <Box style={{ textDecoration: completed ? 'line-through' : 'none', userSelect: 'none', }}>{text}</Box>
                </label>

                <Center
                    sx={{ gap: '10px' }}
                >
                    {!completed && <button style={{ borderRadius: 'none', border: 'none', outline: 'none', cursor: 'pointer' }} title='edit' onClick={textBoxEditOn}>
                        <IconEdit size={16}

                        />
                    </button>
                    }
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'red', border: '2px solid red', background: color === 'red' ? 'red' : '', }}
                        onClick={() => handleColorChange("red")}
                    >

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'green', border: '2px solid green', background: color === 'green' ? 'green' : '', }}
                        onClick={() => handleColorChange("green")}
                    >

                    </Box>
                    <Box style={{ cursor: 'pointer', width: '1rem', height: '1rem', borderRadius: '50%', color: 'orange', border: '2px solid orange', background: color === 'orange' ? 'orange' : '', }}
                        onClick={() => handleColorChange("orange")}
                    >

                    </Box>

                    <img
                        onClick={handleDeleteTodo}
                        src={cancelImg} style={{ cursor: 'pointer', width: '1rem', height: '1rem' }} alt='cancel' />
                </Center>

            </Box>

        </Box>
    )
}

export default Todo