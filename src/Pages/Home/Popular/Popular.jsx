import { useEffect, useState } from "react";
import Headings from "../../../Components/Headings/Headings";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const Popular = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <div className="text-center">
            <div>
                <Headings
                    subHeading={'Check it out'}
                    heading={'From our menu'}></Headings>
            </div>
            <div className="grid my-10 md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    menu.map(item => <MenuCard
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