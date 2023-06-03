

const TitleBanner = ({image, title, subTitle}) => {
    return (
        <div className="hero md:p-32 mb-10" style={{backgroundImage: `url(${image})`}}>
                <div className="hero-overlay md:p-10 text-center text-white uppercase bg-opacity-80">
                    <div className=" text-center">
                        <h1 className="md:mb-5 md:text-6xl font-bold">{title}</h1>
                        <p className="md:mb-5">{subTitle}</p>
                    </div>
                </div>
        </div>
    );
};

export default TitleBanner;