
function Ratings({className, data}) {
    var rating = data.vote_average
    if (rating === undefined) 
        rating=0
    else 
        rating = data.vote_average
        
    var votes = data.vote_count
    if (votes === undefined) 
        votes =0
    else 
        votes = data.vote_count

    var vote_count = data.vote_count
    if (vote_count === undefined) 
        vote_count =0
    else 
        vote_count = data.vote_count

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
                    strokeDasharray={(rating.toFixed(1) * 10).toString() + ", 100"}
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
                    {rating.toFixed(1)}
                </text>
            </svg>
            <div className="ratings font-medium text-left text-lg flex flex-col flex-wrap justify-around">
                <p>{(votes).toLocaleString("en-IN")} Ratings</p>
                <p>{(Math.floor(vote_count/14) + 47).toLocaleString("en-IN")} Reviews</p>
            </div>
        </div>
    );
}

export default Ratings;
