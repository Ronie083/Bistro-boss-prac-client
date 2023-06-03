import MenuCard from "../../../Components/MenuCard/MenuCard";
import TitleBanner from "../../../Components/TitleBanner/TitleBanner";
import bannerImg2 from "../../../assets/menu/dessert-bg.jpeg"


const Dessert = ({ menus }) => {
    const desserts = menus.filter(dessert => dessert.category === 'dessert')
    return (
        <div className='text-center'>
            <TitleBanner
                image={bannerImg2}
                title={'dessert'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </TitleBanner>
            <div className="grid md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    desserts.map(item => <MenuCard key={item._id}
                        item={item}></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 mb-10 border-b-4">Order Your Favorite Food</button>
        </div>
    );
};

export default Dessert;