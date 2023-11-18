import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getData, milify } from '../../utils/helpers/helper'

const VideoInfo = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [channel, setChannel] = useState(null);
    const [expand, setExpand] = useState(false);

    const fetchData = async () => {
        try {
            const videoResponse = await getData(`/video/info?id=${id}`);
            setData(videoResponse.data);

            const channelId = videoResponse.data?.channelId;
            if (channelId) {
                const channelResponse = await getData(`/channel/about?id=${channelId}`);
                setChannel(channelResponse.data);
            }
        } catch (error) {
            console.error('Error fetching video and channel data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const desc = data?.description;
    let truncatedDesc = desc;

    if (desc && desc.length > 200 && !expand) {
        const lastSpaceIndex = desc.lastIndexOf(' ', 200);
        truncatedDesc = lastSpaceIndex > 0 ? desc.slice(0, lastSpaceIndex) + '... daha fazla' : desc.slice(0, 200) + '... daha fazla';
    }

    return (
        <div className='card video mt-3'>
            <p className='h5 mb-0'>{data?.title}</p>

            <div className="card-body px-0 d-md-flex justify-content-between">
                <div className='d-flex'>
                    <div>
                        <img src={channel?.avatar ? channel?.avatar[2].url : null} className="channel-img rounded-pill" alt="..." />
                    </div>
                    <div className='me-3'>
                        <p className="card-title h6 mb-0">{channel?.title}</p>
                        <p className="small text-secondary mb-0">{channel?.channelTitle}</p>
                        <small className='text-secondary'>{milify(channel?.viewCount)} abone</small>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-light rounded-pill p-2 px-3 me-2'>Abone Ol</button>
                    </div>
                </div>
                <div className='d-flex align-items-center mt-md-0 mt-3'>
                    <div>
                        <button className='btn btn-sm btn-dark rounded-pill p-2 px-3 me-2'><i className="bi bi-hand-thumbs-up h6 me-2"></i>{channel?.subscriberCountText} <span className='text-secondary mx-1'>|</span> <i className="bi bi-hand-thumbs-down h6"></i></button>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-dark rounded-pill p-2 px-3 me-2'><i className="bi bi-box-arrow-in-up-right h6 me-2"></i>
                            Paylaş</button>
                    </div>
                    <div>
                        <button style={{ width: "39px" }} className='btn btn-sm btn-dark rounded-pill p-2'><i className="bi bi-three-dots h6"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div onClick={() => setExpand(!expand)} className='card-body bg-dark rounded'>
                {truncatedDesc?.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </div>
        </div>
    )
}


export default VideoInfo