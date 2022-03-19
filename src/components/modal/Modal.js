import modal from "./../../styles/modal.module.css";
import CreateCampaign from "./CreateCampaign";

const Modal = (props) => {

    const { closeModal } = props

    return (
        <div className={modal.background}>

            <div>

                <b onClick={closeModal} className={modal.close}>&times;</b>

                <h1>Create Campaign</h1>

                <p>Fill the form below to start a Campaign </p>

                <CreateCampaign />

            </div>

        </div>
    )
}


export default Modal;