import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import VideoInfo from '../../components/VideoInfo';
import { getData } from '../../utils/helpers/helper';
import Loading from '../../components/Loading';
import VideoCard from '../../components/VideoCard';

const VideoDetail = () => {
    const { id } = useParams();
    const [related, setRelated] = useState([]);
    const [data, setData] = useState(null);
    const [comment, setComment] = useState(null)

    useEffect(() => {
        setRelated(null);
        getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
        getData(`/video/info?id=${id}`).then(res => setData(res.data))
        getData(`/comments?id=${id}`).then(res => setComment(res.data.data))
    }, [id]);

    if (!data) {
        return <Loading type="detail" />;
    }

    return (
        <div className="container-fluid mt-3 ps-10">
            <div className="row">
                <div className="col-lg-8">
                    <div className="iframe ratio ratio-16x9">
                        <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="100%" />
                        <img src={data?.thumbnail[2].url} />
                    </div>
                    <VideoInfo />

                    <div className='card mt-3'>
                        {comment?.map(item => (
                            <div className='d-flex small mb-4' key={item?.commentId}>
                                <div className='me-2'>
                                    <img className='user-img' src={item?.authorThumbnail[0].url} alt="Author Thumbnail" />
                                </div>
                                <div>
                                    <p className='mb-1 fw-bold'>{item?.authorText} <span className='text-secondary'>{item?.publishedTimeText}</span></p>

                                    <p>{item?.textDisplay}</p>
                                    <div>
                                        <i className="bi bi-hand-thumbs-up h6 me-2"></i>259  <i className="bi bi-hand-thumbs-down h6 ms-2 me-4"></i>
                                        <span>Yanıtla</span>
                                    </div>

                                    {/* <a href='#'>{item?.replyCount}</a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-lg-4">
                    {related?.map((item, index) => {
                        const videoItem = { ...item, type: 'video' };
                        return <VideoCard type="row" key={index} data={videoItem} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
