<h1>My Portfolio Website</h1>

<h2>Overview</h2>
<p>
    This is the personal portfolio website of <strong>Moustafa: Me</strong>, a front-end developer. The site showcases Moustafa's expertise in front-end development, 
    with projects spanning industries such as Restaurants, E-commerce, Fitness, Education, and more. 
    The website features a modern, responsive design with a clean and intuitive interface, built using HTML, CSS, and JavaScript.
</p>

<h2>Features</h2>
<ul>
    <li><strong>Responsive Design:</strong> The website adjusts seamlessly to different screen sizes, ensuring an optimal user experience on both mobile and desktop devices.</li>
    <li><strong>Interactive Project Section:</strong> A dynamic projects section where users can scroll through Moustafa's projects and view detailed descriptions.</li>
    <li><strong>Contact Information:</strong> Easy access to direct contact information, including email and phone number, as well as social media links like LinkedIn, Upwork, and GitHub.</li>
    <li><strong>Smooth Animations:</strong> Interactive elements and smooth scrolling between sections for a polished user experience.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>HTML5</strong>: For structuring the web pages.</li>
    <li><strong>CSS3</strong>: Used to style the website, utilizing flexbox for layout, custom fonts, and media queries for responsiveness.</li>
    <li><strong>JavaScript (ES6+)</strong>: For creating interactivity, such as the project slider.</li>
    <li><strong>Google Material Icons</strong>: For iconography used throughout the site.</li>
    <li><strong>Google Fonts</strong>: Custom typography with "Poppins" and "Dancing Script" fonts.</li>
</ul>

<h2>Sections</h2>
<ol>
    <li><strong>Header Bar</strong>: Displays the name and navigation links to different sections: Services, Projects, and Contact.</li>
    <li><strong>About Me Section</strong>: A brief introduction to Moustafa as a front-end developer, outlining his skills and the types of businesses he caters to.</li>
    <li><strong>Services Section</strong>: Details about how Moustafa can assist businesses in going online, with focus areas such as Restaurants, E-commerce, Salons, and more.</li>
    <li><strong>Projects Section</strong>: A scrolling section showcasing multiple projects. Each project includes a description and key features.</li>
    <li><strong>Contact Section</strong>: Displays contact options, including links to social media platforms like LinkedIn, Upwork, and GitHub, along with direct contact information.</li>
</ol>

<h2>Project Slider Functionality</h2>
<p>
    The project section features a scrolling mechanism built with JavaScript:
</p>
<pre>
<code>
document.getElementById('scroll').onclick = function () {
    if (right === 0 && left === -300) {
        left = 0; right = -300;
        projects_div.style.right = `${right}%`;
        projects_div.style.left = `${left}%`;
        return;
    }
    projects_div.style.right = `${right += 100}%`;
    projects_div.style.left = `${left -= 100}%`;
};
</code>
</pre>
<p>
    This ensures smooth scrolling through the various project categories.
</p>

