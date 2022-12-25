import react from "react"

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

export function Modal({children, title, onClose}: ModalProps) {
    return (
        <>
            <div className="modal-bg" onClick={onClose}></div>
            <div className="modal-content">
                <h1 className="modal-title">{ title }</h1>
                { children }
            </div>
        </>
    )
}