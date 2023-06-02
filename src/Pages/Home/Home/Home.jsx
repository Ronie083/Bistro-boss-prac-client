import Banner from "../Banner/Banner";
import Bio from "../Bio/Bio";
import Popular from "../Popular/Popular";
import Recommends from "../Recommends/Recommends";
import SlidCat from "../SlidCat/SlidCat";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SlidCat></SlidCat>
            <Bio></Bio>
            <Popular></Popular>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;