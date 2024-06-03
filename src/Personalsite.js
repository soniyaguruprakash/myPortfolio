import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css'
// import guru from './Images/Guruprakash1.jpg'
import scllogo from './Images/scllogo.jpg';
import soniyaB from "./Images/soniya B.jpeg"
import profile from "./Images/soniya B.jpeg"
import clglogo from './Images/clglogo.jpg';
import restaurant from './Images/restaurant_app.png'
import themepark from './Images/themepark.png';
import admin from './Images/admin.png';
import userui from './Images/userui.png';
import todolist from './Images/todolist.png';
import notes from './Images/notes_app.png'

function Personalsite() {

    const handleClick=()=>{
          
    }
    return(
    <>
       {/* mobile nav toggle button */}
        <input type="checkbox" id='check' className="check" />
        <label for='check'>
            <i class="bi bi-list barbutton d-xl-none" onClick={handleClick}></i>
       </label>
    {/* header Start */}
    <header id='header' className='d-flex flex-column'>   
        {/* profile creating */}
        <div className="profile">
                <img src={soniyaB}  width={150} height={150} alt='Header_profile'/>
                <h4>Soniya Guruprakash</h4>
                <div className="social-media mt-3 text-center">
                <a href="https://in.linkedin.com/" rel="noreferrer" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>       
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://login.live.com/" rel="noreferrer" target="_blank" class="google-plus"><i class="bi bi-skype"></i></a>                
                <a href="https://github.com/" rel="noreferrer" target="_blank" class="twitter"><i class="bi bi-github"></i></a>
                </div>

        </div>
        {/* nav bar links */}
        <nav id='navbar' className="nav">
            <ul style={{listStyle:'none'}}>
                <li><a className="nav-link active" href="#home"><i class="bi bi-house-door-fill"></i><span>Home</span></a></li>
                <li><a className="nav-link" href="#about"><i class="bi bi-person-fill"></i><span>About</span></a></li>
                <li><a className="nav-link" href="#education"><span><i class="bi bi-book"></i>Education</span></a></li>
                <li><a className="nav-link" href="#experience"><span><i class="bi bi-briefcase"></i>Experience</span></a></li>
                <li><a className="nav-link" href="#projects"><i class="bi bi-projector-fill"></i><span>Projects</span></a></li>
                <li><a className="nav-link" href="#skills"><span><i class="bi bi-gear"></i>Skills</span></a></li>
            </ul>
        </nav>
    </header>
    {/* header end */}
     {/* ____________hero section___________ */}
        
    <section id='hero' className="d-flex flex-column">
        <div className="hero-container">
            <h1>Hi, I'm Soniya</h1>
            <p><span className="typed" data-typed-items='Web developer,Stock market Advisor,Sales Executive'>Full-Stack Web Developer</span></p>
            
        </div> 
    {/* ___________end hero section____________ */}

    </section>  
    <main id='main'>
        {/*________ about Section____________ */}

        <section id='about' className="about">
            <div className="container">
                <div className='section-title'>
                    <h3>About</h3>
                    <p style={{textIndent:'70px'}}>
                    Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies. Proven track record in improving website traffic, performance, and functionality through the implementation of front-end coding standards and troubleshooting.
                    
                    </p>
                </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <img src={profile} width={250} height={300}  alt="profile"/>
                        </div>
                        <div className="col-lg-8 content">
                                <h3>Front-End Developer</h3>
                                <p></p>
                            <div className="row">
                                <div className="col-lg-6">
                                <ul> 
                                    <li><i class="bi bi-star-fill"></i><strong>Birthday:</strong><span>08-06-1996</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>Degree : </strong><span>BSC(CS)</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>phone# :</strong><span>787-196-3965</span></li>
                                   
                                    
                                </ul> 
                                </div>
                                <div className="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i><strong>Age:</strong><span>27</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>Address :</strong><span>Salem</span></li>
                                    
                                </ul>
                                </div>
                                    
                                <p style={{textIndent:'70px' , lineBreak:'12px'}}> Over 4+ Years experience of successfully performing a number of data entry tasks. Skilled in planning and organizing with the ability to complete tasks on deadline.An independent worker who successfully meets the challenges of a fast-paced environment providing data entry and administrative support A proven track record of efficiency and accuracy in managing multiple functions, solving problems,maintaining confidentiality.</p>
                            </div>

                        </div>
                    </div>
            </div>

        </section>
    {/*__ Education Details__     */}

        <section id="education" className='education'>
            <div className="container">
            <div className="section-title">
                <h3>Education</h3>
                </div>
                <div className="row edu-details">
                    <div className="col-lg-6 college">
                        <div className="card-body p-3 bbox">
                            <img src={clglogo} width={70} height={70} alt="College logo" />
                        
                            <h5 >Sri Sarada college for women(A),Salem,TamilNadu </h5> 
                            
                            <span >2013-2016 (79%)</span>
                        </div>
                    </div>
                    <div className="col-lg-6 polytechnic">
                        <div className="card-body p-3 bbox">
                            <img  src={scllogo} width={70} height={70} alt="School logo" />
                                    <h5>Municipal Girls Hr Sec School,Salem TamilNadu.</h5>
                                    <span >2011-2013 (86%)</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        {/* ____________Work experience section___________ */}
    
    <section id='experience' className="experience">
        <div className="container">
            <div className="section-title">
                <h3>Work Experience</h3>
            </div>
            <div className="row work-experience">
                <div className="col-lg-6 indecomm">
                    <div className="card bbox p-2">
                        <h5 className="card-title">Indecomm Business Services</h5>
                        <cite className="card-subtitle ms-3 ">- Lead Associate</cite>
                         <p className="card-body" >
                            Ensure and monitor the backup and restore activity and Responsible for managing Auditors request and Responsible for Audit management and readiness. Trains incoming new Operators. Generated final reports for management review
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 mahima">
                    <div className="card bbox p-2">
                        <h5 className="card-title">Mahima Technology</h5>
                        <cite className="card-card-subtitle ms-3"> - Associate</cite>
                        <p className="card-body">
                             Reviewed incoming forms and records to validate and verify recorded data. Monitoring updates to company DB. Support management team with Special projects when asked upon. Assists team leader to maintain quality on process.
                         </p>
                    </div>
                </div>
            </div>
        </div>

    </section>

        {/* ______________projects details____________     */}


        <section id='projects' className="projects">
            <div className="container">
                <div className="section-title">
                    <h3>Projects</h3>
                </div>
                <div className="row">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- HTML-CSS Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML%20-%20CSS%20/Resturant%20App/restaurant" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={restaurant} width={500} height={300} alt="Restarant app" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Restaurant App</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML%20-%20CSS%20/Theme%20Park%20App/html/home" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={themepark} width={500} height={300} alt="themepark" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Theme Park</h5>
                                </div>  
                         </div>
                </div>
                <div className="row mt-4">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- React Js Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://gspshop-admin.netlify.app" rel='noreferrer' target="_blank">
                                    <img className="card-img-top" src={admin} width={500} height={300} alt="E-commerce adminside" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">E-commerce AdminSide</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://gspshop.netlify.app" rel='noreferrer' target="_blank"> 
                                    <img className="card-img-top" src={userui} width={500} height={300} alt="E-commerce userui" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">E-commerce Userui</h5>
                                </div>  
                        </div>
                </div>
                <div className="row mt-4">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- JavaScript Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/To-Do-List/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={todolist} width={500} height={300} alt="todolist" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">To-do-list</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Book%20Add%20App/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={notes} width={500} height={300} alt="notes_app" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Notes App</h5>
                                </div>  
                        </div>                    
                       
                    </div>
                    
            </div>

        </section>

         {/* ____________Tools and Technologies__________ */}

        <section id="skills">
        <div className="container">
            <div className="section-title">
                <h3>Tools & Technologies</h3>
            </div>
            <div className="row">
                <div className="col">
                            <h5 style={{fontStyle:'italic',fontWeight:'400'}}>Front-End</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>HTML</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>CSS</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>JavaScript</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>ReactJS</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>Bootstrap</button>                            
                                </div>
                                <hr />
                                <h5 style={{fontStyle:'italic',fontWeight:'400'}}>Back-End</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>NodeJS</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>ExpressJS</button>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>MongoDB</button>
                                </div>
                                <hr />
                                <h5 style={{fontStyle:'italic',fontWeight:'400'}}>Database</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}}>MongoDB</button>
                                </div>
                                <hr />
                                <h5 style={{fontStyle:'italic',fontWeight:'400'}}>Platforms</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1 ' style={{backgroundColor:'#FEAE6F'}}>Windows</button>
                                </div>
                                <hr />
                                <h5 style={{fontStyle:'italic',fontWeight:'400'}}>IDEs/Text Editors</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1' style={{backgroundColor:'#FEAE6F'}} >Visual Studio Code</button>
                                </div>
                                <hr />
                                <h5 style={{fontStyle:'italic',fontWeight:'400'}}>Version Control</h5>
                                <div className='btn-group'>
                                    <button className='btn ms-1 ' style={{backgroundColor:'#FEAE6F'}}>Git</button>
                                    <button className='btn ms-1 ' style={{backgroundColor:'#FEAE6F'}}>GitHub</button>                               
                                </div>                 
                                <hr />  
                </div>
            </div>
        </div>

        </section>
                           
                   
    </main>

    </>
    )
}

export default Personalsite;
