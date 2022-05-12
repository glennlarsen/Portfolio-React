import profilePic from "../../images/profile.png";
import Header from "../Header";

function Intro() {

  return (
    <section className="intro content">
      <Header>My name is Glenn Larsen, I am a Frontend Developer</Header>
      <div>
        <img src={profilePic} alt="Portrait of me" />
        <div className="quotes-right">“Failure is an option here. If things are not failing, you are not innovating enough.”</div>
        <div className="quotes-left">“I could either watch it happen or be a part of it.”</div>
      </div>
    </section>
  )
}

export default Intro;