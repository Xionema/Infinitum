import React from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';  // Import styles

class Editor extends React.Component {
    componentDidMount() {
        this.quill = new Quill('#editor', {
            theme: 'snow'
        });
    }

    render() {
        return (
            <div id="editor" style={{ height: '400px' }}></div>
        );
    }
}

export default Editor;
