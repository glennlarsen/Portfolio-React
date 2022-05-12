import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Tabs() {
  return (
    <div className="tabs">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="education-tab"
            data-bs-toggle="tab"
            data-bs-target="#education"
            type="button"
            role="tab"
            aria-controls="education"
            aria-selected="true"
          >
            <FontAwesomeIcon icon={faUserGraduate} />Education
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="experience-tab"
            data-bs-toggle="tab"
            data-bs-target="#experience"
            type="button"
            role="tab"
            aria-controls="experience"
            aria-selected="false"
          >
            <FontAwesomeIcon icon={faBriefcase} />Experience
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="skills-tab"
            data-bs-toggle="tab"
            data-bs-target="#skills"
            type="button"
            role="tab"
            aria-controls="skills"
            aria-selected="false"
          >
            <FontAwesomeIcon icon={faCode} />My Skills
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="education"
          role="tabpanel"
          aria-labelledby="education-tab"
        >
          <ul>
            <li>
              Noroff School of Technology and digital Media - Frontend
              developer<br /><span>2020 - 2022 (Current)</span>
            </li>
            <li>
              CLS Language school Bangkok - Thai Language and culture<br />
              <span>2015
                - 2017</span>
            </li>
            <li>
              BI Norwegian Business school - Bachelor in economics<br />
              <span>2009
                - 2012</span>
            </li>
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="experience"
          role="tabpanel"
          aria-labelledby="experience-tab"
        >
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
        <div
          className="tab-pane fade"
          id="skills"
          role="tabpanel"
          aria-labelledby="skills-tab"
        >
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
  )
}

export default Tabs;