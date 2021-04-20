import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.styles.css';


const ModalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        ModalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        ModalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }

}


export default Modal;