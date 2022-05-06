import React from 'react';

const Modal = ({ data, closeModal }) => {
    const project = data;

    let toolList = [];
    data.tools.forEach(function (tool) {
        toolList.push(<li>{tool}</li>);
    });


    return (
        <>
            <div className="overlay" onClick={closeModal}>
                <div className='modal-dialog modal-dialog-scrollable'>
                    <div className='project-modal'>
                        <div className="modal-content " onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h4 className="modal-title" id="modalLabel">{project.title}</h4>
                                <span className="modal-title" id="modalLabel">{project.type}</span>
                                <div className="project-links">
                                    <a href={project.git}>GIThub Link</a>
                                    <a href={project.deployed}>Deployed Site Link</a>
                                </div>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div><a href={project.deployed}><img src={project.image} alt={project.title}></img></a></div>
                                <div className="project-info">
                                    <div>
                                        <h5>About this Project</h5>
                                        <p>{project.about}</p>
                                    </div>
                                    <div>
                                        <h5>Tools Used</h5>
                                        <ul>
                                            {toolList}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Modal;