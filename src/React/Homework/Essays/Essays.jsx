import React from 'react' ;
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return ( 
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?'>
                <ul>
                    <li><b>Git:</b> Git is a code hosting platform for version control and collaboration. It lets you work as a team with others from anywhere in the world. In other words, it’s a software for tracking changes in any set of files, usually for coordinating work with programmers developing source code during software development. Hosted on a local system rather than the cloud. </li>
                    <li><b>Github:</b> Github is a provider of internet hosting for software development and version control. It offers source code management functionality of Git plus its own features. With Github there is a need to purchase a separate server to host web apps. Ultimately well-known for contribution and collaboration.</li>
                    <li><b>Heroku:</b> Heroku is a cloud platform service supporting several programming languages. Supports Java, Node.js, Scala, Clojure, Python, PHP and Go. Rather than having to purchase a separate server to host, Heroku comes with it’s own server so you can purchase hosting plans and deploy web apps easily. Heroku is mainly used to deploy (within GIT), manage and scale apps. Heroku gives developers freedom to focus on their core product without the distraction of maintaining servers, hardware or infrastructure like the others. </li>
                </ul>
            </Essay >
            <Essay q='S3. Explain the difference between HTML, CSS and JS.'>
                <ul>
                    <li><b>HTML:</b> HTML is code that is used to structure a web page / application and its content. It instructs the browser on how to display text and images in a web page. Is used to define the structure of a webpage.</li>
                    <li><b>CSS:</b> CSS is a language used for describing the presentation of a document written in a markup language such as HTML. Used to style and layout web pages / applications. (Font color, size, etc./) Works alongside HTML and Javascript.</li>
                    <li><b>JavaScript:</b> JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.</li>
                </ul>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <ul>
                    <li><b>Single Page Apps + Multi-page Apps:</b> Single Page Applications are the choice to make if someone is planning to build a seamless experience for its users. A single-page application that doesn’t need to reload the page during its use and works within a browser. Some examples of these include Facebook, Netflix and Google maps. 
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
                    <li><b>Web Designer / UX Designer:</b> Web designers build or redesign websites. They understand what it takes to make a website functional and easy to use in addition to making it aesthetically pleasing to the user. Aesthetics are extremely important when selecting the appropriate colors, font, layout and images, it creates the personality for the website. In addition to considering aesthetic aspects, the usability of the website has to be priority as they need to be easily used. </li>
                    <li><b>Front End Developer:</b> A Front End Developer generally has one responsibility and that is to ensure that website visitors can easily interact with the page. This is done through a combination of design, technology and programming to code appearance. Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. Some responsibilities of a Front End Developer are prioritizing user experience, bringing a concept to life with HTML, CSS and JavaScript, implementing design for mobile sites and production/maintenance of websites and web application user interfaces just to name a few. </li>
                    <li><b>Back End Developer:</b> A Back End Developer is someone who builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist. The back end code adds utility to everything the Front End Developer creates. They're responsible for maintaining, testing, and debugging the entire back end. This includes the core application logic, databases, data and application integration, API and other back end processes.</li>
                </ul>
            </Essay>
            <Essay q= 'Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                <ul>
                        <li><b>Site Relative:</b> Site root-relative paths provide the path from the site's root folder to a document. Begins with a leading forward slash, which stands for the site root folder. Often provides the best way to specify links in a website in which you need to frequently move HTML files from one folder to another. </li>
                        <li><b>Document Relative:</b> Document-relative paths are used for local links in most websites. They're useful when the current document and the linked document are in the same folder and are likely to remain together. Although you could use a document-relative path to link to a document in another folder by specifying the path through the folder hierarchy from the current document to the linked document.</li>
                        <li><b>Absolute Paths:</b> Absolute paths provide the complete URL of a linked document to locate a file or folder, starting from the root element and ending with other subdirectories. Could also be known as the "full path." Servers systems are required to know the absolute path for every file that it has access to in order to locate it. </li>
                </ul>
            </Essay>
            <Essay q= 'What is the difference between jpg, gif, png and SVG images?'>
                <ul>
                        <li><b>JPEG:</b> A digital image format which contains compressed image data. With a 10:1 compression ratio, JPG images are very compact. Most popular format for sharing photos and other images on the internet between mobile and desktop users.</li>
                        <li><b>GIF:</b> In the easiest form,a GIF is just an animated image. Like the JPG and PNG file formats, GIF format can be used to make still images but the best feature of them is to create animated images. Less of a video and more of a flipbook.</li>
                        <li><b>PNG:</b> A raster-graphics file format that supports lossless data compression. This lossless data compression format was created to replace the GIF. PNG file format is an open format with no copyright limitations. </li>
                        <li><b>SVG:</b> An XML-based vector image format for two-dimensional graphics with support for interactivity and animation without losing any resolution. Images can scale up to any resolution. </li>
                </ul>
            </Essay>
            <Essay q= 'Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
                <ul>
                        <li><b>Project Manager:</b> A person who leads the work of a team to achieve all project goals within the given constraints. Responsible for day-to-day maintenance along with planning, procurement and execution of a project. </li>
                        <li><b>Business Analyst:</b> A person who analyzes and documents the market environment, process, or systems of businesses. Evaluate past and current business data with the primary goal of improving decision-making processes within organizations.</li>
                        <li><b>Scrum Master:</b> The scrum master helps to facilitate scrum to the larger team by ensuring the scrum framework is followed. They are committed to the scrum values and practices, but should also remain flexible and open to opportunities for the team to improve their workflow. Scrum is a framework for project management that emphasizes toward a well-defined goal. The framework begins with a simple premise: Start with what can be seen or known. After that, track the progress and tweak, as necessary.</li>
                        <li><b>UX Designer:</b> A UX designer makes a product or service usable, enjoyable, and accessible. They work to optimize the interaction between humans and products. Uses research, data analysis, and test results rather than aesthetic preferences and opinions. </li>
                        <li><b>Web Developer/Engineer:</b> A web developer is a programmer or a coder who specializes in, or is specifically engaged in, the development of applications using a client-server model. A web engineer is skilled in the development of applications and software tools for the internet. They normally design application functionality, develop network communication systems, build user-friendly interfaces, and develop company websites.</li>
                        <li><b>Quality Assurance Tester:</b> Quality assurance testers deliver high quality, perfectly-functioning software and web applications to customers. They test and evaluate new and existing programs to identify and help remove bugs, glitches, and other user experience issues. </li>
                        <li><b>DevOps:</b> A set of practices that combines software development and IT operations. Aims to shorten the systems development life cycle and provide continuous delivery with high software quality. </li>
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