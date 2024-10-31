import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Detail() {
    const { mal_id } = useParams();
    const [detailData, setDetailData] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
            const resultJson = await response.json();
            setDetailData(resultJson.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Owh...",
                text: "Gagal mengambil data",
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [mal_id]);

    return (
        <div className="flex-container col-f-container">
            <div className="flex-container row-f-container detail-head">
                <Link to="/">
                    <i className="bi-house-door-fill" style={{ fontSize: "1.5rem", color :  '#FFE1A1FF' }}></i>

                </Link>
                <h1>Details</h1>
            </div>
            <div className="flex-container col-f-container card">
                <section>
                    <h2>{detailData?.title}</h2>
                    <p>{detailData?.title_japanese}</p>
                </section>
                <section className="flex-container row-f-container">
                    <aside className="flex-container col-f-container flex-1">
                        <img
                            src={detailData?.images.jpg.large_image_url}
                            alt=""
                            className="img-detail"
                        />
                        <Link
                            to={detailData?.trailer.url}
                            target="blank"
                            className="btn btn-primary"
                        >
                            {detailData?.trailer.url === null ? (
                                <p>
                                    <i className="bi-x-circle-fill"></i> Trailer not available
                                </p>
                            ) : (
                                <p>
                                    <i className="bi-youtube"></i> Watch Trailer
                                </p>
                            )}
                        </Link>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Year</td>
                                    <td>:</td>
                                    <td>
                                        {detailData?.year === null ? "Unknown" : detailData?.year}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Season</td>
                                    <td>:</td>
                                    <td>
                                        {detailData?.season === null
                                            ? "Unknown"
                                            : detailData?.season}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>:</td>
                                    <td>
                                        {detailData?.type === null ? "Unknown" : detailData?.type}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Episodes</td>
                                    <td>:</td>
                                    <td>
                                        {detailData?.episodes === null
                                            ? "Unknown"
                                            : detailData?.episodes}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>:</td>
                                    <td>
                                        {detailData?.duration === null
                                            ? "Unknown"
                                            : detailData?.duration}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Favorites</td>
                                    <td>:</td>
                                    <td>
                                        <i className="bi-heart-fill"></i>{" "}
                                        {detailData?.favorites === null
                                            ? "Unknown"
                                            : detailData?.favorites}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </aside>
                    <div className="flex-container col-f-container">
                        <h2>Description</h2>
                        <section>
                            <h3>Synopsis</h3>
                            <p className="text-1">
                                {detailData?.synopsis === "" ? (
                                    <i>Backgrond story not available</i>
                                ) : (
                                    detailData?.synopsis
                                )}
                            </p>
                        </section>
                        <section>
                            <h3>Background</h3>
                            <p className="text-1">
                                {detailData?.background === "" ? (
                                    <i>Backgrond story not available</i>
                                ) : (
                                    detailData?.background
                                )}
                            </p>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Detail;
