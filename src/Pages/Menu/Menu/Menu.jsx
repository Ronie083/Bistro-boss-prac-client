import { Helmet } from 'react-helmet-async';
import TitleBanner from '../../../Components/TitleBanner/TitleBanner';
import bannerImg from '../../../assets/menu/banner3.jpg'
import Headings from '../../../Components/Headings/Headings';
import MenuCard from '../../../Components/MenuCard/MenuCard';
import Dessert from '../Dessert/Dessert';
import Pizza from '../Pizza/Pizza';
import useMenu from '../../../Hooks/useMenu';
import Salad from '../Salad/Salad';
import Soup from '../Soup/Soup';
import { Link } from 'react-router-dom';


const Menu = () => {
    const [menus] = useMenu();

    const offered = menus.filter(menu => menu.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>

            {/* Menus top Item- Todays's offer */}

            <div className='text-center'>
                <TitleBanner
                    image={bannerImg}
                    title={'our menu'}
                    subTitle={'would you like to try a dish'}>
                </TitleBanner>
                <Headings
                    subHeading={"Don't miss"}
                    heading={"today's offer"}>
                </Headings>
                <div className="grid md:grid-cols-2 gap-14 md:max-w-[1320px] mx-auto">
                    {
                        offered.map(item => <MenuCard key={item._id}
                            item={item}></MenuCard>)
                    }
                </div>
                <Link to='/shop' className="btn btn-outline border-0 mb-10 border-b-4">Order Your Favorite Food</Link>
            </div>

            {/* Section Category: Dessert  */}

            <Dessert menus={menus}></Dessert>

            {/* Section Category: Pizza */}

            <Pizza menus={menus}></Pizza>
            
            {/* Section Category: Salad */}

            <Salad></Salad>

            {/* Section Category: Soup */}

            <Soup></Soup>
        </div>
    );
};

export default Menu;