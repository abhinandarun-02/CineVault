import {poster} from "@/data/moneyheist";

function Ratings({className, data}) {
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
                    strokeDasharray={(data.vote_average.toFixed(1) * 10).toString() + ", 100"}
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
                    {data.vote_average.toFixed(1)}
                </text>
            </svg>
            <div className="ratings font-medium text-left text-lg flex flex-col flex-wrap justify-around">
                <p>{(data.vote_count).toLocaleString("en-IN")} Ratings</p>
                <p>{(Math.floor(data.vote_count/14) + 47).toLocaleString("en-IN")} Reviews</p>
            </div>
        </div>
    );
}

export default Ratings;
