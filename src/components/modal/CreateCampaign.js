import modal from "./../../styles/modal.module.css";
import Button from "../Button";

const CreateCampaign = () => {

    return(
        <form className={modal.form}>

            <input type={"text"} placeholder="Enter your name" />

            <input type={"text"} placeholder="Enter campaign title" />

            <input type={"number"} placeholder="Amount" />

            <textarea> </textarea>

            <label>Upload Campaign photo </label>

            <input type={"file"} />

            <Button className={modal.submit} onClick={ (e) => e.preventDefault()} text={"submit"} />

        </form>
    )
}


export default CreateCampaign;