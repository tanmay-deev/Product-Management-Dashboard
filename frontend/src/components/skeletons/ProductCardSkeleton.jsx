import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
      <Skeleton height={180} />
      
      <div className="mt-4 space-y-2">
        <Skeleton height={25} />
        <Skeleton height={20} width="60%" />
        <Skeleton height={20} width="40%" />
      </div>

      <div className="flex gap-2 mt-4">
        <Skeleton height={40} width={80} />
        <Skeleton height={40} width={80} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;