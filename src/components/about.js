import React from "react";
import me from "../imgs/me.JPEG";


function About(){
  return(
    <div>
      <p className="content is-medium">Up and coming Developer</p>
      <img className="me-pic" src= {me} alt="Bronson Wardle"/>
      <p className="content mt-5">
      Hey, I'm Bronson, a software developer in training with a thirst for adventure and a love for fitness, golf, photography, coffee, and good reads. Let's create something awesome together.
      </p>
      <p className="content">
      
      </p>
    </div>
  );
}

export default About;