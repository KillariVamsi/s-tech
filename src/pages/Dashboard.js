import React from 'react';

const Home = () => {
    return (
        <>
            <div>
                <h4 className='ms-3'>Home</h4>
            </div>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-12 mb-1 ms-5 bg-dark-subtle me-5 text-center p-3 border border-dark rounded-4'>
                        <div className='row'>
                            <div className='col-10'>
                                <h5>PUBLISHED GUIDES</h5>
                            </div>
                            <div className='col-2'>
                                <h5>20</h5>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-12 mb-1 ms-5 bg-dark-subtle me-5 text-center p-3  border border-dark rounded-4'>
                        <div className='row'>
                            <div className='col-10'>
                                <h5>UNPUBLISHED GUIDES</h5>
                            </div>
                            <div className='col-2'>
                                <h5>20</h5>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-12 mb-1 ms-5 bg-dark-subtle me-5 text-center p-3   border border-dark rounded-4'>
                        <div className='row'>
                            <div className='col-10'>
                                <h5>COMPLETED GUIDES</h5>
                            </div>
                            <div className='col-2'>
                                <h5>20</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
            
            <div className='container-fluid mt-2'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
            <h4 className='mt-4'>Guides Progress</h4>
                        
                        <div className='row'>
                            <div className='col-2'>
                            <p>Completed</p></div>
                            <div className='col-8'>
                            <div className="progress m-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: "20%"}}></div>
                            </div>
                            </div>
                            <div className='col-1'><p>20/100</p>
                            </div>
                            
                            <div className='col-2'>
                            <p>Published</p></div>
                            <div className='col-8'>
                            <div className="progress m-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: "20%"}}></div>
                            </div>
                            </div>
                            <div className='col-1'><p>20/100</p>
                            </div>
                            <div className='col-2'>
                            <p>Yet to Start</p></div>
                            <div className='col-8'>
                            <div className="progress m-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: "20%"}}></div>
                            </div>
                            </div>
                            <div className='col-1'><p>20/100</p>
                            </div>
                        </div>
                        <div className='coniater'>
                <div className='row'>
                    <div style={{height : "350px"}} className='col-12 border border-dark'>
                        <h5> PIE CHART </h5>
                        <img src='https://www.tableau.com/sites/default/files/2021-06/Pie%20Chart%202%20-%20Good%20-%20900x650.png' style={{ width : "500px" , height : "300px" }}  />
                    </div>
                </div>
            </div>
                    </div>
                    
               
            

<div className='col-lg-6 col-sm-12 mt-4'>
                        <h5>Assigned Guides</h5>
                        <div className='container mt-2 p-2' id='over-floww'>
                            <div className='row'>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 1 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 2 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 3 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 4 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 5 </h5>
                                </div>
                                <div className='col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 6 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 7 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 8 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 9 </h5>
                                </div>
                                <div className='row-col'>
                                    <h5 className='border border-dark rounded-3 p-3'> Guide 10 </h5>
                                </div>

                            </div> 
                        </div>
                    </div>
            </div> </div>
            </div>
        </>
    );
};

export default Home;