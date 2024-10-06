let projects_div = document.getElementById(`list_sec`);
let left = 0;
let right = -300;
document.getElementById(`scroll`).onclick = function () {
    if(right === 0 && left === -300){
        left = 0; right = -300;
        projects_div.style.right = `${right}%`;
        projects_div.style.left = `${left}%`
        return
    }
    projects_div.style.right = `${right += 100}%`
    projects_div.style.left = `${left -= 100}%`
}

let project_arr =  [{project_name:'Restaurants or Cafés',project_discraption: 'This project involves creating an online presence for a restaurant or café. The goal is to highlight the menu, provide reservation options, and showcase the ambiance. With enticing visuals of food and a user-friendly layout, the website aims to enhance the dining experience even before customers visit the establishment. Features like online ordering or reservation systems can add to the convenience, while a map integration makes it easier for users to find the location.'},
                    {project_name:'Salons or Spas',project_discraption: 'For salons or spas, the project focuses on providing a serene and luxurious online experience, reflecting the relaxation and pampering the business offers. The website emphasizes services such as hair styling, skincare, and massage treatments, often accompanied by booking features for appointments. High-quality images, service descriptions, and client testimonials help to create trust and appeal. The overall aesthetic is designed to be calming and inviting, matching the spa or salon’s atmosphere.'},
                    {project_name:'E-commerce Stores',project_discraption: 'For salons or spas, the project focuses on providing a serene and luxurious online experience, reflecting the relaxation and pampering the business offers. The website emphasizes services such as hair styling, skincare, and massage treatments, often accompanied by booking features for appointments. High-quality images, service descriptions, and client testimonials help to create trust and appeal. The overall aesthetic is designed to be calming and inviting, matching the spa or salon’s atmosphere.'},
                    {project_name:'Fitness Centers or Gyms',project_discraption: 'This project involves designing a website for fitness centers or gyms, focusing on promoting health and wellness. The site highlights membership plans, class schedules (yoga, pilates, HIIT, etc.), and trainer profiles. It often includes integration with a scheduling system for booking classes or training sessions. Testimonials, success stories, and videos showcasing workouts or the gym’s equipment are added to inspire potential clients. A motivational tone is used throughout the site to engage users looking for a fitness community.'},
                    {project_name:'Education Centers Tutors',project_discraption: ' For education centers or tutoring services, the website\'\s primary goal is to promote learning opportunities. This project focuses on showcasing courses, tutoring services, or educational resources in a clear, organized manner. It often includes scheduling systems for lessons, virtual classroom options, and course catalogs. Testimonials, success stories, and qualification details about tutors are highlighted to build trust and credibility. The site appeals to both students and parents by emphasizing the quality of education and the personalized learning experience offered.'}]

let projectList = document.createElement('ul')
    
    
    project_arr.forEach(element => {
        let project_li = document.createElement('li')
        let project_h1 = document.createElement('h1')
        let project_p = document.createElement('p')
        let span_a = document.createElement('span')
        let project_a = document.createElement('a')
        
        project_h1.textContent = element.project_name;
        project_p.textContent = element.project_discraption;
        span_a.textContent = element.project_name;
        project_a.appendChild(span_a)
        project_a.href = "#";
        project_li.appendChild(project_h1)
        project_li.appendChild(project_p)
        project_li.appendChild(project_a)
        projectList.appendChild(project_li)
        });


projects_div.appendChild(projectList)
