import bannerImg from "../../../assets/home/chef-service.jpg";

const Bio = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-content bg-white p-36 text-center text-black">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
