import './ModalTest.scss';

const ModalTest = ({handleCancel}) => {
  return (
    <div className="modal">
        <div className="modal__content">
            Modal Test
            <div className="modal__cancel" onClick={handleCancel}>
                X
            </div>
        </div>
    </div>
  )
}

export default ModalTest