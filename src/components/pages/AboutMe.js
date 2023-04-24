import React from 'react';
import Image from 'react-bootstrap/Image';

export default function AboutMe() {
  return (
    <div className="sectionContainer">
      <div className="aboutContainer d-flex flex-column align-items-center">
        <Image className="aboutMePic m-5" src="./porfolio-pic2.jpg" alt="Brenn Voyles" rounded />
        <h1 className="mt-5 ">About me</h1>
        <p className="aboutText pb-5 px-5 m-4 text-center">
          Brenn is a dental hygienist who has been working in
          the industry for over a decade.
          She enjoyed working with her patients and helping them maintain
          their oral health, but over time, she began to feel unfulfilled
          in her career. She found herself yearning for a creative outlet
          and a more challenging profession that would allow her to work
          remotely.

          Brenn had always been interested in technology, and she began to teach
          herself how to code in her free time. She started with simple HTML and
          CSS, then moved on to JavaScript and other programming languages.
          She was fascinated by the endless possibilities of web development
          and how it could allow her to create beautiful and functional websites.

          Eventually, Brenn made the difficult decision to leave her career in
          dental hygiene and pursue web development full-time. She enrolled in a bootcamp program to hone her skills and gain
          experience working on real-world projects. She spent countless hours
          learning and practicing

          Following one's passions and taking a leap of faith can lead to a
          fulfilling and rewarding career. It's not always easy to make a career
          change, especially after years of working in a particular field, but
          Brenn's determination and willingness to learn has driven her in this pursuit.

          Web development is a growing field, and there is a high demand for

          skilled professionals who can create engaging and user-friendly websites.
          With her experience in dental hygiene, Brenn can to bring a
          unique perspective and approach to her work in web development,
          which sets her apart from others in the industry.


        </p>
      </div>
    </div>
  );
}
