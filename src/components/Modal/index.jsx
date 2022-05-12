
const Modal = ({ data, closeModal }) => {
    const { title, type, image, git, deployed, about, tools} = data;

    let toolList = [];
    tools.forEach((tool) => {
        toolList.push(<li key={tool}>{tool}</li>);
    });


    return (
        <>
            <div className="overlay" onClick={closeModal}>
                <div className='modal-dialog modal-dialog-scrollable'>
                    <div className='project-modal'>
                        <div className="modal-content " onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h4 className="modal-title" id="modalLabel">{title}</h4>
                                <span className="modal-title" id="modalLabel">{type}</span>
                                <div className="project-links">
                                    <a href={git}>GIThub Link</a>
                                    <a href={deployed}>Deployed Site Link</a>
                                </div>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div><a href={deployed}><img src={image} alt={title}></img></a></div>
                                <div className="project-info">
                                    <div>
                                        <h5>About this Project</h5>
                                        <p>{about}</p>
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