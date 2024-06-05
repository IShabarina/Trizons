import { Dialog, DialogPanel } from "@headlessui/react";

// eslint-disable-next-line react/prop-types
const Modal = ({ status, setStatus, children }) => {

    return (
        <Dialog
            open={status}
            onClose={() => setStatus()}
            className="relative z-50"
        >
            <div className="fixed inset-0 w-screen overflow-y-auto p-4">
                <div className='modal-bg flex min-h-full items-center justify-center'>
                    <DialogPanel className='modal w-[90%] sm:w-[50%] max-h-[90%] max-w-5xl space-y-4 bg-product-card-gradient rounded-[20px] p-5 overflow-hidden'>
                        <button onClick={() => setStatus()}>Закрыть</button>
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal;