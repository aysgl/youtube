import React from 'react'

const Loading = ({ type }) => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    switch (type) {
        case "videos":
            return (
                <div className='row mx-0 px-0' >
                    {items.map((index) =>
                        <div className='col-md-4' key={index}>
                            <div className="card video mb-4" aria-hidden="true">
                                <svg className="bd-placeholder-img rounded" width="100%" height="27vh" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6F7172"></rect></svg>
                                <div className="card-body px-0 d-flex placeholder-glow">
                                    <div>
                                        <svg className="bd-placeholder-img rounded-pill" width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6F7172"></rect></svg>
                                    </div>
                                    <p className="card-text placeholder-glow w-100 ms-2">

                                        <span className="placeholder col-8"></span>
                                        <span className="placeholder col-11"></span>
                                        <span className="placeholder col-3"></span>
                                        <span className="placeholder col-1"></span>
                                        <span className="placeholder col-3"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        case "detail":
            return (
                <div className="card video" aria-hidden="true">
                    <svg className="bd-placeholder-img rounded" width="90vw" height="40vh" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6F7172"></rect></svg>
                    <div className="card-body px-0 d-flex placeholder-glow">
                        <div>
                            <svg className="bd-placeholder-img rounded-pill" width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6F7172"></rect></svg>
                        </div>
                        <p className="card-text placeholder-glow w-100 ms-2">

                            <span className="placeholder col-8"></span>
                            <span className="placeholder col-11"></span>
                            <span className="placeholder col-3"></span>
                            <span className="placeholder col-1"></span>
                            <span className="placeholder col-3"></span>
                        </p>
                    </div>
                </div>
            )

        default:
            return (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
    }

}

export default Loading