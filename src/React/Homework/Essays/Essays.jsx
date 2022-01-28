import React from 'react' ;
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return ( 
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?'>
                <ul>
                    <li>Git: Git is a code hosting platform for version control and collaboration. It lets you work as a team with others from anywhere in the world. In other words, it’s a software for tracking changes in any set of files, usually for coordinating work with programmers developing source code during software development. Hosted on a local system rather than the cloud. </li>
                    <li>Github: Github is a provider of internet hosting for software development and version control. It offers source code management functionality of Git plus its own features. With Github there is a need to purchase a separate server to host web apps. Ultimately well-known for contribution and collaboration.</li>
                    <li>Heroku: Heroku is a cloud platform service supporting several programming languages. Supports Java, Node.js, Scala, Clojure, Python, PHP and Go. Rather than having to purchase a separate server to host, Heroku comes with it’s own server so you can purchase hosting plans and deploy web apps easily. Heroku is mainly used to deploy (within GIT), manage and scale apps. Heroku gives developers freedom to focus on their core product without the distraction of maintaining servers, hardware or infrastructure like the others. </li>
                </ul>
            </Essay >
            <Essay q='S3. Explain the difference between HTML, CSS and JS.'>
                <ul>
                    <li>HTML: HTML is code that is used to structure a web page / application and its content. It instructs the browser on how to display text and images in a web page. Is used to define the structure of a webpage.</li>
                    <li>CSS: CSS is a language used for describing the presentation of a document written in a markup language such as HTML. Used to style and layout web pages / applications. (Font color, size, etc./) Works alongside HTML and Javascript.</li>
                    <li>JavaScript: JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.</li>
                </ul>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <ul>
                    <li>Single Page Apps + Multi-page Apps: Single Page Applications are the choice to make if someone is planning to build a seamless experience for its users. A single-page application that doesn’t need to reload the page during its use and works within a browser. Some examples of these include Facebook, Netflix and Google maps. 
Single page applications use a JavaScript framework for distributing application functionality over the web. With this, the biggest advantage of an SPA is the speed with how quickly information is provided. Information is initially transmitted when the site/app is launched or being refreshed in the background so you can use it without load time unlike multi-page Web Sites which require the exact opposite. 
With single page applications only having one page to load, it almost serves as a disadvantage for site rankings on search engines as those metrics are based on the number of pages a website has. But at the same time it really is a seamless user experience as only the content changes within the page and not the actual page itself.
Another difference between Single Page apps and traditional multi-page web sites would be an issue of security within SPAs. SPAs are more prone to cross-site scripting attacks, data exposure via API or even session tracking and authentication. Hackers can easily introduce client-side scripts resulting in exposure of sensitive data.
Multi-page applications are exactly what they are called; multiple pages. These multiple pages load new functions when certain links are clicked and the load time is dependent on how quickly data is transmitted due to the site essentially having to start from scratch each time a new page is clicked.
Overall, Single Page Applications seem to be the way to go to ensure the best experience for users along with the quickest load times.
</li>
                </ul>
            </Essay>
            <Essay q='What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <ul>
                    <li>Web Designer: </li>
                    <li>Front End Developer: </li>
                    <li>Back End Developer: </li>
                </ul>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;