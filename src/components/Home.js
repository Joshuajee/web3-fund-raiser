import home from "./../styles/home.module.css";
import Money from "./Money";
import general from "./../styles/general.module.css";
import Button from "./Button";
import campaign from "../img/amazon-tree.png";

const Home = () => {

    return (
        <section className={home.content}>

            <div className={home.one}>

                <h1>Save the Amazon</h1>

                <progress className={general.progressBar} value={50} max={100}></progress>

                <Money amount={"ETH 500.9090889"} description={"Goal"} />

                <Money amount={"ETH 250.86756787"} description={"Plegde"} />

                <div className={home.actions}>

                    <Button text={" ❤️ Donate"} />
                    <Button text={"Create Campaige"} />

                </div>

                <p> A new way for requesting decentralize funding from the public, to make the world a better place.. </p>

            </div>

            <div className={home.two}>

                <img src={campaign} alt={"Campaign Image"} className={home.campaignImg} />
            </div>


            
        </section>)
}

export default Home;