import Headings from "../../../Components/Headings/Headings";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import useMenu from "../../../Hooks/useMenu";


const Popular = () => {
    const [menus] = useMenu();

    const popularItem = menus.filter(item => item.category === 'popular')



    return (
        <div className="text-center">
            <div>
                <Headings
                    subHeading={'Check it out'}
                    heading={'From our menu'}></Headings>
            </div>
            <div className="grid my-10 md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    popularItem.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 mb-10 border-b-4">View Full Menu</button>
            <div className="md:text-3xl text-white p-20 text-center md:max-w-[1320px] mx-auto bg-black">
                <h1>Call Us: +88 0192345678910</h1>
            </div>
        </div>
    );
};

export default Popular;