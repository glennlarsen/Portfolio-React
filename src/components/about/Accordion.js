import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Accordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <FontAwesomeIcon icon={faUserGraduate} />Education
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                Noroff School of Technology and digital Media - Frontend
                developer<br /><span>2020 - 2022 (Current)</span>
              </li>
              <li>
                CLS Language school Bangkok - Thai Language and culture<br /><span>2015
                  - 2017</span>
              </li>
              <li>
                BI Norwegian Business school - Bachelor in economics<br /><span>2009
                  - 2012</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <FontAwesomeIcon icon={faBriefcase} />Experience
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                Sixt Car Rental - Rental agent<br />
                <span>2010 - 2013 / 2017 - Current</span>
              </li>
              <li>
                Hjemferd.no - Chief Operating Officer<br />
                <span>2021 - Current</span>
              </li>
              <li>
                Sixt Car Rental - Branch Manager<br />
                <span>2013 - 2015</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <FontAwesomeIcon icon={faCode} />My Skills
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul>
              <li>HTML/CSS/SASS</li>
              <li>Javascript/Typescript/React</li>
              <li>Bootstrap</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Rest API/Strapi API</li>
              <li>Wordpress CMS</li>
              <li>GIT/GIThub/GITlab</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;