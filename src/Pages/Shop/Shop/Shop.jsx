import { Helmet } from "react-helmet-async";
import ItemCards from "../../../Components/ItemCards/ItemCards";
import TitleBanner from "../../../Components/TitleBanner/TitleBanner";
import useMenu from "../../../Hooks/useMenu";
import bgImgShop from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Shop = () => {
    const [menus] = useMenu();

    const categories = [...new Set(menus.map((item) => item.category))];

    const salads = menus.filter(salad => salad.category === "salad")
    const pizzas = menus.filter(pizza => pizza.category === "pizza")
    const soups = menus.filter(soup => soup.category === "soup")
    const populars = menus.filter(popular => popular.category === "popular")
    const drinks = menus.filter(drink => drink.category === "drinks")
    const offered = menus.filter(offer => offer.category === "offered")
    const desserts = menus.filter(dessert => dessert.category === "dessert")


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <TitleBanner
                image={bgImgShop}
                title={'our shop'}
                subTitle={'would you like to try a dish'}></TitleBanner>
            <div>
                <Tabs className="text-center md:max-w-[1320px] mx-auto">
                    <TabList>
                        <div className="uppercase text-yellow-600">
                            {categories.map((category) => (
                                <Tab key={category}>{category}</Tab>
                            ))}
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 mt-4 justify-items-center">
                            {
                                salads.map(salad => <ItemCards key={salad._id}
                                    name={salad.name}
                                    recipe={salad.recipe}
                                    image={salad.image}
                                    price={salad.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                drinks.map(drink => <ItemCards key={drink._id}
                                    name={drink.name}
                                    recipe={drink.recipe}
                                    image={drink.image}
                                    price={drink.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                populars.map(popular => <ItemCards key={popular._id}
                                    name={popular.name}
                                    recipe={popular.recipe}
                                    image={popular.image}
                                    price={popular.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                desserts.map(dessert => <ItemCards key={dessert._id}
                                    name={dessert.name}
                                    recipe={dessert.recipe}
                                    image={dessert.image}
                                    price={dessert.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                pizzas.map(pizza => <ItemCards key={pizza._id}
                                    name={pizza.name}
                                    recipe={pizza.recipe}
                                    image={pizza.image}
                                    price={pizza.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                offered.map(offer => <ItemCards key={offer._id}
                                    name={offer.name}
                                    recipe={offer.recipe}
                                    image={offer.image}
                                    price={offer.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-14 justify-items-center">
                            {
                                soups.map(soup => <ItemCards key={soup._id}
                                    name={soup.name}
                                    recipe={soup.recipe}
                                    image={soup.image}
                                    price={soup.price}></ItemCards>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;