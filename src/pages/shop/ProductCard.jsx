import Rating from "../../components/Rating";
import { getImgUrl } from "../../utils/getImageURL";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white  shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="flex justify-between items-center mt-5">
          <p className="text-black/80 font-bold text-lg">
            <sup>$</sup> <span>{product.price}</span>
          </p>
          <button className="text-white bg-[#0D1B39] p-2 rounded-full hover:bg-black/60 hover:text-black">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
