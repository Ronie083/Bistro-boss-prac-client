import { Link } from "react-router-dom";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import TitleBanner from "../../../Components/TitleBanner/TitleBanner";
import useMenu from "../../../Hooks/useMenu";
import bannerImg5 from "../../../assets/menu/soup-bg.jpg"


const Soup = () => {
    const [menus] = useMenu();

    const soups = menus.filter(soup => soup.category === 'soup')

    return (
        <div className='text-center'>
            <TitleBanner
                image={bannerImg5}
                title={'soup'}
                subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </TitleBanner>
            <div className="grid md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                {
                    soups.map(item => <MenuCard key={item._id}
                        item={item}></MenuCard>)
                }
            </div>
            <Link to='/shop' className="btn btn-outline border-0 mb-10 border-b-4">Order Your Favorite Food</Link>
        </div>
    );
};

export default Soup;