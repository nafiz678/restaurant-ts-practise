import { cardProps } from "@/lib/type";


const FoodCard: React.FC<cardProps> = ({item}) => {

    const { image, price, recipe, name } = item
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-black text-white text-sm font-medium px-2 py-1 rounded">
                   {price}$
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-1 h-16 overflow-auto">
                    {recipe}
                </p>
                <button
                    className="mt-4 px-4 py-2 w-full bg-gray-100 text-[#BB8506] text-sm font-semibold rounded hover:bg-[#111827]
                    border-b-4 border-yellow-500 transition-all duration-150 ease-in active:scale-95"
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
