import React from 'react'
import './MyNotes.css'
import notes, { } from '../../data/notes'

function MyNotes() {

    const deleteHandler = (id) => {
        if (window.confirm("are you sure?")) {

        }
    };

    return (
        <>
            <div className="newnote">
                <button>Create New Note</button>
            </div>
            {
                notes.map(note => (
                    <div className="eachnote">
                        
                        <div className="content">
                        <h2>{note.title}</h2>
                            <p>{note.content}</p>
                        </div>
                        <div className="changebuttons">
                            <button href={`/notes/${note._id}`} className="editbtn">Edit</button>
                            <button onClick={() => deleteHandler(note._id)} className="deletebtn">Delete</button>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default MyNotes