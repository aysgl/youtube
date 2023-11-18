import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../../utils/helpers/helper';
import VideoCard from '../../components/VideoCard';
import Loading from '../../components/Loading';

const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [result, setResult] = useState()
    const query = searchParams.get("search_query");

    useEffect(() => {
        getData(`/search?query=${query}`).then(res => setResult(res.data.data))
    }, [query])

    return (
        <div className='container-fluid mt-3 ps-10'>
            <div className='row'>
                {!result ? <Loading type={"videos"} /> : result.map((item) => item.type === "video" &&
                    <div className='col-xl-3 col-lg-4 col-md-6' key={item.videoId}>
                        <VideoCard data={item} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Results