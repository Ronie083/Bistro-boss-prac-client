

const MenuCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex p-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] h-[105px]" src={image} alt="" />
            <div>
                <h3 className="text-xl">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuCard;