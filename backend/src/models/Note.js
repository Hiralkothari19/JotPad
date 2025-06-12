import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true // This is correct!
});

// Add this line: Create the model and assign it to the 'Note' variable
const Note = mongoose.model('Note', noteSchema);

// Now, 'Note' is defined and can be exported
export default Note;