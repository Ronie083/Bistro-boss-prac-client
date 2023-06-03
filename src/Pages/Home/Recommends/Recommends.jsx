import Headings from "../../../Components/Headings/Headings";
import ItemCards from "../../../Components/ItemCards/ItemCards";
import useMenu from "../../../Hooks/useMenu";


const Recommends = () => {
    const [menus] = useMenu();

    const recommended = menus.filter(item => item.category === 'popular')

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