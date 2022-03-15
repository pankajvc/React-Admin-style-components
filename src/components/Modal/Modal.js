import { useEffect } from 'react'
import ReactDOM from "react-dom"
const modalId = document.getElementById('admin-modal');

const element = document.createElement('div');
element.setAttribute("role", "presentation");
element.className = "admin-modal";
export default function Modal({ children }) {
    useEffect(() => {
        modalId.appendChild(element);
        return () => {
            modalId.removeChild(element)
        }
    }, [])
    return ReactDOM.createPortal(
        children,
        element,
    );
}
