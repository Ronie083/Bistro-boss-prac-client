import MenuCard from "../../../Components/MenuCard/MenuCard";
import TitleBanner from "../../../Components/TitleBanner/TitleBanner";
import useMenu from "../../../Hooks/useMenu";
import bannerImg4 from "../../../assets/menu/salad-bg.jpg"


const Salad = () => {
    const [menus] = useMenu();

    const salad = menus.filter(salad => salad.category === 'salad')

    return (
        <div className='text-center'>
            <TitleBanner
                image={bannerImg4}
                title={'salad'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </TitleBanner>
            <div className="grid md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    salad.map(item => <MenuCard key={item._id}
                        item={item}></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 mb-10 border-b-4">Order Your Favorite Food</button>
        </div>
    );
};

export default Salad;