

const ItemCards = ({name, recipe, image}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2 mb-10">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline uppercase text-yellow-600 border-0 border-yellow-600 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCards;