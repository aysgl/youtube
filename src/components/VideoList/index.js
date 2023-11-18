import React, { useContext } from 'react'
import VideoCard from '../VideoCard'
import Loading from '../Loading'
import { YoutubeContext } from '../../context/youtubeContext'

const VideoList = () => {
    const { videos } = useContext(YoutubeContext)

    return (
        <div className='row'>
            {!videos ? <Loading type={"videos"} /> : videos.map((item) => item.type === "video" &&
                <div className='col-xl-3 col-lg-4 col-md-6' key={item.videoId}>
                    <VideoCard data={item} />
                </div>
            )}
        </div>
    )
}

export default VideoList