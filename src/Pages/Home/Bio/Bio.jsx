import bannerImg from "../../../assets/home/chef-service.jpg";

const Bio = () => {
    return (
        <div className="max-w-[1320px] mx-auto max-h-[572px]">
            <div className="hero min-h-fit my-10 p-[119px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-content p-20 bg-white text-center text-black">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
