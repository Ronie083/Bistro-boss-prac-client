

const Headings = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-4">
            <p className="text-[#D99904] mb-2">--- {subHeading} ---</p>
            <h2 className="text-3xl uppercase border-y-4 py-3">{heading}</h2>
        </div>
    );
};

export default Headings;