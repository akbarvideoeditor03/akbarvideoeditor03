import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";


function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.jikan.moe/v4/anime');
            const result = await response.json();
            setData(result.data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Owh...',
                text: 'Gagal mengambil data'
            })
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <h1><i className="bi-film"></i> Anime Series List</h1>
            {loading ? <div className="flex-container col-f-container load-container center"><div className="custom-loader"></div></div>
                : <div className="container grid-4-col grid-3-col grid-2-col grid-1-col">
                    {data.map((item) => {
                        return (
                            <Link to={`/details/${item.mal_id}`} key={item.mal_id} className="card-home-link">
                                <div className="flex-container card-home">
                                    <div className="img-card-home-container">
                                        <img src={item.images.jpg.image_url} alt="" className="img-card-home" />
                                    </div>
                                    <p className="main-title">{item.title}</p>
                                    <p>{item.title_japanese}</p>
                                    <div className="flex-container row-f-container">
                                        <p>Rank : {item.rank}</p>
                                        <StarRatings
                                            rating={(item.score || 0) / 2}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            starDimension="1.5rem"
                                            starSpacing="0.05rem"
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default Home