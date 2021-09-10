import React from "react";
// import svg1 from '../svg'
export default function Workout() {
  return (
    <div id="workout">
      <div class="col2">
       <div className="year">
       <span class="b-hero">2008</span> -
        <span className="b-hero"> ------------- </span>-
        <span class="b-hero">2011</span>
       </div>
        <h1 class="h-primary">
          We Are A Digital Design
          <br /> Agency That Creates and Embraces Change.
        </h1>
        <div className="explore">
          <span className="btn ">
            <span></span>
            <a  href=" ">Learn more </a>
          </span>
          <span class="span">
            <span class="arrow">► </span>
            <span class="fs"> Featured project </span>
            <span class="fs">LTN Global</span>
          </span>
        </div>
       
      </div>

      <div class="col2">
        <img
          src="https://s3.amazonaws.com/paper-tiger-website/uploads/c-art-image-1306.jpg"
          srcset="https://s3.amazonaws.com/paper-tiger-website/uploads/c-art-image-500.jpg 500w, https://s3.amazonaws.com/paper-tiger-website/uploads/c-art-image-1080.jpg 800w, https://s3.amazonaws.com/paper-tiger-website/uploads/c-art-image-1080.jpg 1080w, https://s3.amazonaws.com/paper-tiger-website/uploads/c-art-image-1306.jpg 1306w"
          sizes="(max-width: 479px) 88vw, (max-width: 991px) 79vw, 59vw"
          alt=" "
          class="c-art__img"
        />
        <img src="" alt="" />
      </div>
      <div>
        <a href="#craft" class="scroll ">
           <div class="span"> Scroll</div>
         <div class=" ">___________</div>
        </a>
        </div>
    </div>
  );
}
