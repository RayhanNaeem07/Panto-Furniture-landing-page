import { MdOutlineStarOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const Rating = ({rating}) => {
    const totalStars = 5;
    return (
        <div className="flex space-x-1">
            {
               Array.from({length: totalStars},(_,index)=>{
                const starIndex = index +1;
                return starIndex <= rating ? (<FaStar key={index} className="text-yellow-500"/>) : (<MdOutlineStarOutline key={index} className="text-gray-400"/>)
               })
            }
        </div>
    );
};

export default Rating;