import React from 'react'
import { milify } from "../../utils/helpers/helper"
import { useNavigate } from 'react-router';

const VideoCard = ({ data, type }) => {
    const navigate = useNavigate()

    return (
        <div className={`card video ${type === "row" ? "mb-0" : "mb-4"}`} onClick={() => navigate(`/watch/${data?.videoId}`)}>
            <img src={data?.thumbnail[0].url}
                className={`rounded ${type === "row" ? "d-none" : ""} `} alt="..." />
            <div className="card-body px-0 d-flex">
                <div className={`rounded ${type === "row" ? "d-block me-3" : "d-none"} `} >
                    <img src={data?.thumbnail[0].url}
                        className="rounded" alt="..." />
                </div>
                <div className={`${type === "row" ? "d-none" : ""} `}>
                    <img src={data?.channelThumbnail[0].url} className="channel-img rounded-pill" alt="..." />
                </div>
                <div style={type === "row" ? { fontSize: ".9rem" } : {}}>
                    <p className={`card-title ${type === "row" ? "small" : "h6"}`}>{data?.title}</p>
                    <p className="small text-secondary mb-0">{data?.channelTitle}</p>
                    <small className='text-secondary'>{milify(data?.viewCount)} görüntüleme  <span className='dot'>•</span> {data?.publishedTimeText}</small>
                </div>
            </div>
        </div>
    )
}

export default VideoCard