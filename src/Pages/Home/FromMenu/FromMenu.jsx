import Headings from "../../../Components/Headings/Headings";
import bgImg from "../../../assets/home/featured.jpg"

const FromMenu = () => {
    return (
        <div className="hero min-h-fit mb-10 bg-fixed" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center text-neutral-content p-20">
                <Headings
                    subHeading={'Check it out'}
                    heading={'from our menu'}></Headings>
                <div className="md:hero-content">
                    <img className="md:w-[650px] md:h-[400px]" src={bgImg} alt="" />
                    <div className="text-start">
                        <h1 className="mb-5 text-xl">March 20, 2023 <br />
                            WHERE CAN I GET SOME?</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white border-white">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FromMenu;