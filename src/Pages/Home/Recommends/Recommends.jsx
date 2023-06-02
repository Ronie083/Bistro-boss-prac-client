import { useEffect, useState } from "react";
import Headings from "../../../Components/Headings/Headings";
import ItemCards from "../../../Components/ItemCards/ItemCards";


const Recommends = () => {
    const [recommended, setRecommended] = useState([]);


    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setRecommended(popularItem)
            })
    }, [])

    return (
        <div className="container mx-auto">
            <Headings
                subHeading={'Should try'}
                heading={'Chef Recommends'}></Headings>
            <div className="grid md:grid-cols-3 gap-14 md:max-w-[1320px] mx-auto">
                {
                    recommended.map(recommend => <ItemCards key={recommend._id}
                        name={recommend.name}
                        image={recommend.image}
                        recipe={recommend.recipe}></ItemCards>)
                }
            </div>
        </div>
    );
};

export default Recommends;