import React from 'react';

/**
 * About
 * -------------------------------
 * About page.
 * 
 * @returns {JSX.Element}
 */
function About() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>About page</h2>
      <img src="./images/image.png" alt="samtube logo" style={{ justify: 'center' }} />
      <p>
        The SAMtube project was an arduous one to say the least. To clone an app created by the minds at Google, with hundreds of developers working on it, innumerable updates to finesse all its parts, and input from the public, all in an effort to create a user-friendly, easily accessible, world-accepted app should have stopped us dead in our tracks, but we forged on into the depths of coding, vowing only to return with something we know people will appreciate, that is, SAMtube. Its quick reaction to user inputs and API queries is bar none, except for YouTube, and its potential for growth even surpasses YouTube itself.

        <br />
        <br />

        Our group consisted of Sung Yi, coder extraordinaire, Mikal Wazeerud-din, stylist to star-like coders, and Addis Jackson, an everyman coder. Our task, now before us since August 23rd, 2023, promised to be one that would take us into Google's vast network of APIs, where without a unique key that needed to be renewed weekly, all could be lost. We had only the Gods, Tim McKiernan and his cohort, Gigi Scarborough, as our guide through this treacherous terrain, and our knowledge and experience, as was given to us through life.

        <br />
        <br />
        Sung Yi, an avid coder, with a quiet but stern and demanding presence, is a recent graduate with a Bachelor's degree from the University of Missouri - St. Louis. He graduated from the Department of Computer Sciences with a good base using the C programming language. He was undaunted in his effort to be a FULL-STACK web developer, which led him to Pursuit, where he is now a fellow blazing his path toward that goal. He dazzled in the coding for SAMtube and always ensured that at the end of the day, a working deployable design of the app was pushed to GitHub, which was a good progressive starting point for those of us who were mistake-prone. SAMtube, now in his past, serves as a reminder that all other code challenges should cower at his name and prowess with the keys of a MacBook. They should know that there is no other choice to be made than to concede to his great skill.

        <br />
        <br />
        Mikal Wazeerud-din, a graduate of Boston University, with a Bachelor of Science degree in Cinematography and Film/Video Production, has an eye for design that we all should be lucky to see in person. His methods, detail, silhouettes, and flair all in combination describe him as having, cliche as it may seem, je ne sais quoi. He has now joined the future leaders in code here at Pursuit, and applying his design to code will no doubt leave us in breathtaking anticipation for his future work. SAMtube was no different when applying this style; he so modestly wielded, and he has taken it to a level that all other groups now envy.

        <br />
        <br />
        Addis Jackson, a former graduate of the University of Massachusetts, with emphases on chemistry and chemical engineering, now joined Pursuit with a determination to apply coding to abstract subjects in education. To make visible those things not readily seen and therefore not understood by most students, such as the atom, forces, and even wave and particle dynamics. SAMtube served as a hurdle that he, relying on his other group members, worked diligently to subdue this monster of a project, and we are happy to say, succeeded in our task. He helped with some code and the cohesiveness of everyone's code during merges, as well as trying to ensure we all adhere to the architecture we had agreed on in the beginning.
      </p>

      <br />
      <p><i>During the break, our intent is to meet on:</i></p>

      <br />
      <br />
      <p>
        Slack is the medium of choice for quick memos, questions, and inserts, but whenever we can work together at the same time, <a href="https://zoom.us/">Zoom</a>, <a href="https://trello.com/b/Cqz4B0Oq/pursuit-youtube-cloning-project">Trello</a>, and <a href="https://github.com/">GitHub</a> are the resources we will use.
      </p>

      Our Ptroject Architecture:

      <img src="./images/ScreenshotRoadmap.png" alt="architecture" style={{ width: "100%", height: "100%" }} />

      <br />
      <strong>Github Repository: <a href="https://github.com/addisjackson/SAMtube-Project">SAMtube Github Repo</a></strong>
      <br />
      <p>
        Sung Yi <a href="https://github.com/dreamseekerfromn/"><img src="src/assets/GitHub-Mark.png" style={{ width: "80px", height: "80px" }} alt="GitHub Logo" /></a>
        Mikal Wazeerud-din <a href="#"><img src="src/assets/GitHub-Mark.png" style={{ width: "80px", height: "80px" }} alt="GitHub Logo" /></a>
        Addis Jackson <a href="https://github.com/addisjackson"><img src="src/assets/GitHub-Mark.png" style={{ width: "80px", height: "80px" }} alt="GitHub Logo" /></a>
      </p>
    </div>
  );
}

export default About;
