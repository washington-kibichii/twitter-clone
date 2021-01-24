import React from 'react';
import "./Trends.css";

function Trends() {
    return (
        <div className="trends">
            <div className="trends__header">
                <h2>Trending</h2>
            </div>
            <div className="trends__body">

                <ol>
                    <li>Politics &middot; Trending</li>
                    <div>
                    <h3>Uhuru</h3>
                    <span>128K Tweets</span>
                    </div>

                    <li>Premier League &middot; Trending</li>
                    <div>
                    <h3>Chelsea</h3>
                    <span>128K Tweets</span>
                    </div>

                    <li>Elections &middot; Trending</li>
                    <div>
                    <h3>Biden</h3>
                    <span>128K Tweets</span>
                    </div>

                    <li>Sports &middot; Trending</li>
                    <div>
                    <h3>Hockey</h3>
                    <span>128K Tweets</span>
                    </div>

                    <li>Politics &middot; Trending</li>
                    <div>
                    <h3>M7</h3>
                    <span>128K Tweets</span>
                    </div>
                </ol>

            </div>
            <div className="trends__footer">
                <h5>Show more</h5>
            </div>

        </div>
    )
}

export default Trends
