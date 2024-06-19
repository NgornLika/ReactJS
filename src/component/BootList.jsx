import React from 'react';
import './BootList.scss';

export default function BootList() {
    return (
        <>
            <section className="projects ">
                <div className="container">
                    <div className="project">
                        <h1>List Students</h1>
                        <div className="row bg-white has-shadow">
                            <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                                <div className="project-title d-flex align-items-center">
                                    <div className="image has-shadow">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="text">
                                        <h3 className="h4">Ngorn Sreyneth</h3>
                                        <small>Lorem Ipsum Dolor</small>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <span className="hidden-sm-down">Today at 4:24 AM</span>
                                </div>
                            </div>
                            <div className="right-col col-lg-6 d-flex align-items-center">
                                <div className="time"><i className="fa fa-clock-o"></i> 12:00 PM </div>
                                <div className="comments"><i className="fa fa-comment-o"></i> 20</div>
                                <div className="project-progress">
                                    <div className="progress">
                                        <div role="progressbar" style={{ width: '45%', height: '6px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-red"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="row bg-white has-shadow">
                            <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                                <div className="project-title d-flex align-items-center">
                                    <div className="image has-shadow">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="text">
                                        <h3 className="h4">Ngorn Lika</h3>
                                        <small>Lorem Ipsum Dolor</small>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <span className="hidden-sm-down">Today at 4:24 AM</span>
                                </div>
                            </div>
                            <div className="right-col col-lg-6 d-flex align-items-center">
                                <div className="time"><i className="fa fa-clock-o"></i> 12:00 PM </div>
                                <div className="comments"><i className="fa fa-comment-o"></i> 20</div>
                                <div className="project-progress">
                                    <div className="progress">
                                        <div role="progressbar" style={{ width: '60%', height: '6px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-green"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="row bg-white has-shadow">
                            <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                                <div className="project-title d-flex align-items-center">
                                    <div className="image has-shadow">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="text">
                                        <h3 className="h4">Chhom Botomvottey</h3>
                                        <small>Lorem Ipsum Dolor</small>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <span className="hidden-sm-down">Today at 4:24 AM</span>
                                </div>
                            </div>
                            <div className="right-col col-lg-6 d-flex align-items-center">
                                <div className="time"><i className="fa fa-clock-o"></i> 12:00 PM </div>
                                <div className="comments"><i className="fa fa-comment-o"></i> 20</div>
                                <div className="project-progress">
                                    <div className="progress">
                                        <div role="progressbar" style={{ width: '50%', height: '6px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-violet"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
