
interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

export function Modal({children, title, onClose}: ModalProps) {
    return (
        <>
            <div className="modal-bg"></div>
            <div className="modal-content">
                <h1 className="modal-title">{ title }</h1>
                { children }
            </div>
        </>
    )
}