import MenuCard from "../../../Components/MenuCard/MenuCard";
import TitleBanner from "../../../Components/TitleBanner/TitleBanner";
import bannerImg3 from "../../../assets/menu/pizza-bg.jpg"


const Pizza = ({menus}) => {

    const pizzas = menus.filter(pizza => pizza.category === 'pizza')
    return (
        <div className='text-center'>
            <TitleBanner
                image={bannerImg3}
                title={'pizza'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </TitleBanner>
            <div className="grid md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    pizzas.map(item => <MenuCard key={item._id}
                        item={item}></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 mb-10 border-b-4">Order Your Favorite Food</button>
        </div>
    );
};

export default Pizza;