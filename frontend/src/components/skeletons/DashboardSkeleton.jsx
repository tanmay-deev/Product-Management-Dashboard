
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DashboardSkeleton() {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[...Array(4)].map((_, index) => (

                <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                >

                    <Skeleton height={20} width={120} />

                    <Skeleton
                        height={40}
                        width={80}
                        className="mt-4"
                    />

                </div>

            ))}

        </div>

    );
}

export default DashboardSkeleton;
