import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateTextArea from "./CreateTextArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
        return [...prevNotes, newNote];
        });
    }
    
    return (
        <div>
            <Header />
            <CreateTextArea 
                onAdd={addNote} 
            />
            <Note
                key = {1}
                title="Note title" 
                content="Note content"
            />
            <Footer />
        </div>
    )
}

export default App