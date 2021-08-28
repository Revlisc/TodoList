import React from 'react';

export const Todo = ({task}) => {
    return (
        <div>
            <button>Edit</button>
            <button>X</button>
            <li>{task}</li>
        </div>
    )
}