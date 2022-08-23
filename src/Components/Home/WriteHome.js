import React from 'react'
import tickImg from "./../../assets/images/double-tick.png";
import notesImg from "./../../assets/images/notes.png";
import plusImg from "./../../assets/images/plus.png";
import { useState } from 'react';

function WriteHome() {
    const [currentValue, setCurrentValue] = useState('')
    const handleAddNewTodo = (e) => {

        e.preventDefault()
    }
    const handleCompleteAll = () => {

    }
    const handleClearCompleted = () => {

    }
    return (
        <>
            <form onSubmit={handleAddNewTodo}
                style={{ padding: '0.7rem 0.7rem', backgroundColor: '#F5F5F5', borderRadius: '0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <img src={notesImg} style={{ width: '2rem', height: '2rem', marginRight: '0px' }} alt="note" />
                <input
                    style={{ margin: '0.5rem 0.7rem', padding: '0.7rem 1rem', borderRadius: '0.7rem', outline: 'none', border: 'none', color: '#222', backgroundColor: '#F5F5F5', fontSize: '20px', marginLeft: '0px' }}
                    value={currentValue}
                    type="text"
                    placeholder="Type Your Todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    onChange={(e) => setCurrentValue(e.target.value)}
                />
                <button
                    type="submit"
                    style={{ display: 'none' }}
                ></button>
                <img src={plusImg} style={{ width: '2rem', height: '2rem' }} alt="plus" />

            </form>
            <ul style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0rem', listStyle: 'none', color: 'black' }} >
                <li

                    style={{ display: 'flex', cursor: 'pointer', gap: '10px' }}
                    onClick={handleCompleteAll}
                >
                    <img style={{ width: '2rem', height: '2rem' }} src={tickImg} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearCompleted}>
                    Clear completed
                </li>
            </ul>
        </>
    )
}

export default WriteHome