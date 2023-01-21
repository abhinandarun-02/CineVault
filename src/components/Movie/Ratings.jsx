import {poster} from "@/data/moneyheist";

function Ratings({className}) {
    return (
        <div className={className}>
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                    className="circle-bg"
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray={(poster.rating * 10).toString() + ", 100"}
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    className="percentage"
                >
                    {poster.rating}
                </text>
            </svg>
            <div className="ratings font-medium text-left text-lg flex flex-col flex-wrap justify-around">
                <p>{(poster.no_of_ratings).toLocaleString("en-IN")} Ratings</p>
                <p>{(poster.no_of_reviews).toLocaleString("en-IN")} Reviews</p>
            </div>
        </div>
    );
}

export default Ratings;
