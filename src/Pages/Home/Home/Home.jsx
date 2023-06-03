import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Bio from "../Bio/Bio";
import FromMenu from "../FromMenu/FromMenu";
import Popular from "../Popular/Popular";
import Recommends from "../Recommends/Recommends";
import SlidCat from "../SlidCat/SlidCat";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <SlidCat></SlidCat>
            <Bio></Bio>
            <Popular></Popular>
            <Recommends></Recommends>
            <FromMenu></FromMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;