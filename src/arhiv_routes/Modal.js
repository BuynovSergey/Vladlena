function Modal({modal, setModal, children}){
    let clModal = ['box-modal'];
    if(modal){
        clModal.push('modal-active');
    }

    return (
        <div className={clModal.join(' ')} onClick={() => setModal(!modal)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;