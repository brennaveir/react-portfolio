import React from 'react';
import Image from 'react-bootstrap/Image';

export default function AboutMe() {
  return (
    <div className="sectionContainer">
      <div className="aboutContainer d-flex flex-column align-items-center">
    <Image className="aboutMePic m-5"src="./porfolio-pic2.jpg"  alt="Brenn Voyles" rounded/>
      <h1 className="mt-5 ">About me</h1>
      <p className="aboutText pb-5 px-5 m-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      </div>
    </div>
  );
}
