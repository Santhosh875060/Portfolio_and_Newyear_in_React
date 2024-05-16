import style from "C:\\Users\\SANTHOSH\\Desktop\\New folder (2)\\My ReactProject\\portfolio\\src\\app.module.css"
const Folio=()=>{
    return(
        <div>
            <header className={style.header}>
    <nav className={style.nav.bd_grid}>
        <div>
            <a href="#" className={style.nav_logo} onclick="a()">SANTHOSH KUMAR</a>
        </div>
        <div className={style.nav_toggle} id={style.nav_toggle}>
            <i class='bx bx-menu-alt-right'></i>
        </div>
        <div className={style.nav_menu} id={style.nav_menu}>
            <ul className={style.nav_list}>
                <li className={style.nav_items}><a className={style.nav_link.active} href="#home"> home</a></li>
                <li className={style.nav_items}><a className={style.nav_link.active} href="#about">about</a></li>
                <li className={style.nav_items}><a className={style.nav_link.active} href="#skills">skills</a></li>
                <li className={style.nav_items}><a className={style.nav_link.active} href="#work">work</a></li>
                <li className={style.nav_items}><a className={style.nav_link.active} href="#contact">contacts</a></li>
            </ul>
        </div>
        
    </nav>
</header>
<main class="main">
{/* <!-- HOME PAGE --> */}
<section className={style.home.bd_grid} id="home">

    <div data-aos="fade-up">

        <h1 className={style.home_title}>
            hi <br/>I'm <span className={style.home_title_color}>Santhosh Kumar</span> 
        </h1>
        <a href="#contact" className={style.button}>Lastpage..</a>
    </div>
    <div className={style.home_social}>
    <a href="https://www.linkedin.com/in/santhosh87/" className={style.home_sociale_icon} data-aos="fade-up"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANpJREFUSEvtldENwjAMBV83oZvAJjBJ2QQ2gU0ok4BOipFJGyLFSr+wFFVVYl/87CSDOtvQOb42B9wk7YNZzZJGi5Fn8AoGX8T9BbhLYjfHBugnbglwlXRKgVtkqwLY/SEBLg1ZVAFIA+QpaeohEQAGtksDoP3ztTXM551XzcDXwCQyJwtmQGDnLNMQYE0xsni4iTDAOotOI1vMd1sIgEQEw0rtHAJw8KhLDvDt/AfEJbKTjM4UlTa0bvEHa20dPtUaNNwOXy5FQMvFlm/GX5TbP5lRaRb+3R/9NwReTBmWBSIqAAAAAElFTkSuQmCC"/></a>
    <a href="https://github.com/Santhosh875060" className={style.home_sociale_icon} data-aos="fade-left"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWBJREFUSEu1lY1NxTAMhP02gUmATWASYBJgEmAS2AT6Vbno8temT6qlqmpi+3yX2L3EyXY5OX/MANxHBM9dev9GBM/38v2VnmGdWwA3EfGWkm4RBewhgTZ+I4CXiHg+IB8gH4s/cYX1AB5T5QfyZ9fXGqQGQJaf5I6+Twt1AMWGSjH8MBLixz7nxD4xrK1WA3ya5u/JWQmVvPftkuJ32wOopXGAPbm4DMTLOPSVhTOoAbLTXvYkmaSVdOuBO4BXUdCcAMDF5aV6CiwAqECHlx0mk+PWLdAZOMA1DDw+F+8ATvEagD9jmy+IA9Tde+QWDWMdgEaBhVvTmdU+Z+aNuHlNdRMIohsBpEM1PVnzZnNJHbe4IKNRoQmpEaCx4Ynq5mqq740K1qTnnjy9iQtLzi7b3riWPIziItAKUbIm+YiBAvyH02MjBs0EnWHgPupuP2D2R+vFRZv5Jx+YFq3r6QD/Wc9YGdHIjH4AAAAASUVORK5CYII="/></a>
    <a href=""className={style.home_sociale_icon} data-aos="fade-down">< img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvlldERgjAQRJdOtBK1ErUStRK1ErUS7UR5TM4J4RLIB1/cDIOS3O1ldzkazRzNzPW1XICtpJOkVaD43t7P4f8h/O6WUooeko6SPgVtKHB11skBkPybracA31DcOvJw2JMLQJ6SyOfeOwHo7yjzEjqJT5PrPgbcWfEcRfBrQXEuOjIKPHpsP9RA0T9SiugwFq/2NSkCpBTVFmd/T+ApFNWCrFMHphRxCqxq/q4FGEwGb1Qg8r7tBD1qYkCPRxHPplgxBcZh0DOI3LDjtcdNU6Pn/ZJN4zV0MNuWgFxqLME7gQnMCcZ0yHbuAdQ4iDkzNhQ7DM+muGgTrBrbFSFfznwq6rTcL9pU+87/0f8B2ZYyGenGE+gAAAAASUVORK5CYII="/></a>
    </div>
    <div className={style.home_img}>
    </div>
</section>
{/* <!-- ABOUT SECTION --> */}
   
 <section  className={style.section} id="about">
    <h2 class="section-title" ata-aos="flip-up">about</h2>
    <div className={style.about_container} >
        <div className={style.about_img} data-aos="fade-left">
         </div>
     <div>
        <h2 className={style.about_subtitle} data-aos="fade-right">i'm santhoshkumar</h2>
        <p className={style.about_text} data-aos="fade-up">
            Passionate Learner: Eager to continuously grow personally and <br />
            professionally, enthusiastic about exploring new <br />
            technologies and refining existing skills.  <br />
            Team Player and Contributor: Committed to 
            contributing positively <br /> 
            to team success, driven by a strong work ethic <br />
            and dedication to delivering high-quality results.</p>
     </div>
    </div>
 </section>
 {/* <!--ABOUT SKILLS --> */}
 <section className={style.skills_section} id="skills">
    <h2 className={style.section_title} data-aos="fade-up">Skills</h2>
    <div className={style.skills_container.bd_grid} >
        <div>
            <h2 className={style.skills_subtitle} data-aos="fade-left"> Professional skills</h2>
            <p className={style.skills_text} data-aos="fade-right">without sharpen your weapon standing on the battlefield would not
                increase your chance of winning
            </p>
            {/* <!--Skills Java  --> */}
            <div className={style.skills_data} data-aos="fade-left">
                <div className={style.skill_name}>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATBJREFUSEu1lNGNwjAQRCd/VwD/XCcHlQCV3HUCVAJUAkgUQp6UQSuTxPHhWIqixM7M7sxsGs28mpnx9QnBStI5V+B/Cb4lbVvwv7kIAKb6WTpAml9J61z17JdKhCybDhyZuG7d1ctXQoAsPx24ta/mQZRl35Jc2uoPNSWiUqQA9CppN8XgEg/oAO0BPnWVVzcZgx1LuoCgekw9vXQRO3Ca3mwZS5GnNR0ox5P3MarMxjHtaowASQBYttrfQ2k8kyL2MB3zWTEIr+NT5gCiGEmAvQzOO+L7ZnyOwDIxYCkwXVA1vribIg98eNDAWoPm/48NNS4mZ2ehTyLL4smNnaTap3v2ZNRkCIhcXDFFfco4BJMIIoBl4b6Q9JD0FQwH0ObHyBbFdIqXg2dyMf0InI+fmiM6GUY9gTwAAAAASUVORK5CYII="/>
                   <span className={style.skills_name}>Java</span>
                </div> 
                <div><span className={style.skill_percentage}>70%</span></div>
                <div className={style.skill_bar } id={style.skill_java}></div>
            </div>
            {/* <!--Skills HTML  --> */}
            <div className={style.skills_data} data-aos="fade-right">
                <div className={style.skill_name}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASBJREFUSEvVldGNwjAQRIdOjkqASoBKgEqASoBKoBPgSRm0kr2JEwmh28/I3ueZ8TozfblmX+6vnwDukv4mKntImse9NQUXScuJgKuk1RDgKGkzEXCStB0DOLxhyO4r7Nx1C1i/HwJwelRQ+NkCIDdqNAA/8ZVTLRIZKPClwB5s+lQtZAImaMobWnPxgUYDgGZXdx1uXROARqmnFZuwzyEXmWWT/OwaEXAW8rnzO9pX9MsAnmaakwMW+ZQWYTs8mMUUs3AI4MmMwRtgOyYBsk0OG7Cts9rimehTEH3Fotgw5hyHsngmWgFuCITi5LVrW0xxHyBevWSAi8+jAMwC8nke4lNQg2HNLbOx9Y+GJZ5YgDRlDmxbqrIV0GpTse7/A14igkcZCy+5LQAAAABJRU5ErkJggg=="/>
                    <span class="skills_name" >HTML5</span>
                </div>
                
                <div><span className={style.skill_percentage}>70%</span></div>
                <div className={style.skill_bar} id={style.skill_html}></div>
            </div>
           {/* <!--Skills CSS  --> */}
           <div className={style.skills_data} data-aos="fade-left">
             <div className={style.skill_name}>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATBJREFUSEvFlWESATEMRrM34SQ4CU6Ck+AkOAlOwr6ZxqTdtptlOvrLaJsv30vS7aTx6hrHl78IHEVk+aWzq4hs7d2cAwQ2PwisWgqcPA72IrILWRx6N48RN7PkPPc/K4cIPGBizZ0Cd5PQJAGKVnLw7IMSjIa4BAEKDKaqA3uhRkd5W8cUmKSqAjBVy3qQS+dEDWf8b2s2QFoatFcSjEBR+5l9KzCI5xUgXmQ9OAKTnRu3AIhABQZadZEZPuVNgakbZ0EUrZIDFVA0ucKrgE3GLZDLChFcKS5tX61Xtk4lB5YrnOkgAtqZoD0tusEzQSYeActUB8+60X1qFU1xTcAOT23Y7N4kAVgrAn4r+5wYaG7pE6EHvV80kKxDOyJWDTr2VHiRuM55HbiC5Q41F3gDy6lJGev1mqMAAAAASUVORK5CYII="/>                <span className={style.skills_name}>CSS3</span>
             </div>
            
             <div><span className={style.skill_percentage}>80%</span></div>
             <div className={style.skill_bar} id={style.skill_css}></div>
            </div>
            {/* <!--Skills JS  --> */}
           <div className={style.skills_data}>
            <div className={style.skill_name}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAM5JREFUSEvtld0NgjAUhQ+byCTqJOIk6iTKJI6iTqL9knsM8aWWFPSBJqTJTTl/91IaTbyaifE1O8GzkqO38E8HC4ETXiLKztr/RrQP7efYT5Iu6VlJosbOGu2gDZBrAEMI6F3SRhL1agSAo56PEwKrr0YAuB0cEkk3aH2ViMCjB8cArh6RBRNPH0Q0GidFDlDJ2iUgmgwAQMN4HBduiOtrAtRto4lWzKTQUI+o69RuY6bIEfDuOsbRoChnPUL57y+77CVTemD2f3KpwOz5F6WpNRlCNHD+AAAAAElFTkSuQmCC"/>               <span class="skills_name">Java Script</span>
            </div>
           
            <div><span className={style.skill_percentage}>70%</span></div>
            <div className={style.skill_bar} id={style.skill_javascript}></div>
           </div>
            {/* <!--Skills React JS  --> */}
            <div className={style.skills_data}>
                <div className={style.skill_name}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfNJREFUSEvFlTFLXFEQhb8FC4sUlhEEY22TIoVgRP0JKSRJpcGQVqwkhZhUwSq9JCTWaU2toiCBlBYWgoYIEWwtUlj4vmXucvfl7WOXdePAsnvfuzNnzsyZ2QYDtsaA41MH8AjYAH4Be/HJ85kDFuP9V+C8Ktk6gC/AfjgKZID38b0bwTybyGwB9KoXAJ0MMpE5vQMmgTHgbYnRWZHMfBWLTgwEkIFOuf0BLoFnpWAmI4N/ylRXIp1yAM+WLJmMkpXvtl7UAfwG1qO+U8AIcBKeMtS2I+sPwGi3PTAz1fEA+A4cAyvATCnAEbBagL4ApoHrAMyZtcnUrGyWyvCSMkzqsTRKcS1ANuOOx/GMyVIk12p4XiKD2yg1n+wb8CTU9AlYjhefgdeRkInlcdoEUgbIZWmsg1DNQvx+GgCHUTJZOQNlP5NtPssBLIt084HxoiZlmWzF+Q3wM2ZFxmkAU/aWtNmLsop8aEZJjjbOZmttzYuzwQ36HPgR9VdZrbtVMtXBBiu9G+AUUKY7oRTBHgKPgb/AUNyThSVrs7o5aNUxpKiCVI/2EXiZCSK/2xVA1apIEhyu2EU9r4pOu+iqkOfFXe2ifEOmobPOmgOYL7eeS5RUo2wNrlpURxrCxNDt6fvKBlfJtCyCvs/3+p/cd/b/pUS3Wxl0GZnEeQYAAAAASUVORK5CYII="/>
                   <span className={style.skills_name}>React JS</span>
                </div>
                <div><span className={style.skill_percentage}>70%</span></div>
                <div className={style.skill_bar} id={style.skill_react}></div>
               </div>
               
        </div>
    </div>
 </section>
 
 {/* <!--WORK SCTIONE --> */}
  <section className={style.work_section} id="work">
  <h2 className={style.section_title} data-aos="fade-up">Work</h2>
    <div className={style.work_container.bd_grid}>
        <div className={style.work_img}>
            {/* img job */}
        </div>
        <h3 data-aos="fade-right" > "Currently seeking employment <span> opportunities after completing my degree </span>and a Full Stack course at Jspider. 
        Equipped with comprehensive skills in Full Stack development, including Java, HTML, CSS, JavaScript, React, Hibernate, and Spring. 
        Eager to leverage my education and training to contribute effectively to a dynamic team."</h3>
    </div>
  </section>
  {/* <!-- CONTECT SECTION --> */}
   <section className={style.section_contect} id="contact">
   <h2 className={style.section_title} data-aos="fade-down">Contact</h2>
    <div className={style.section_container .bd_grid}>
        <form action="#" className={style.contact_form}>
        <input type="text" placeholder="Name"className={style.controle_input}/>
        <input type="text" placeholder="Email" className={style.controle_input}/>
        <textarea name="" id="" cols="0" rows="10" className={style.controle_input}></textarea>

        <div className={style.gap}></div>
            <input type="button" value="Send" className={style.control_button }/>
            <div className={style.gap}></div>
        </form>
    </div>
   </section>
   {/* <!-- footer section --> */}
   <footer className={style.footer}>
    <p className={style.footer_title}>Santhosh Kumar</p>
    <div className={style.footer_sociale}>
        <a href="" className={style.footer_icon}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANpJREFUSEvtldENwjAMBV83oZvAJjBJ2QQ2gU0ok4BOipFJGyLFSr+wFFVVYl/87CSDOtvQOb42B9wk7YNZzZJGi5Fn8AoGX8T9BbhLYjfHBugnbglwlXRKgVtkqwLY/SEBLg1ZVAFIA+QpaeohEQAGtksDoP3ztTXM551XzcDXwCQyJwtmQGDnLNMQYE0xsni4iTDAOotOI1vMd1sIgEQEw0rtHAJw8KhLDvDt/AfEJbKTjM4UlTa0bvEHa20dPtUaNNwOXy5FQMvFlm/GX5TbP5lRaRb+3R/9NwReTBmWBSIqAAAAAElFTkSuQmCC"/></a>
        <a href="" className={style.footer_icon}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWBJREFUSEu1lY1NxTAMhP02gUmATWASYBJgEmAS2AT6Vbno8temT6qlqmpi+3yX2L3EyXY5OX/MANxHBM9dev9GBM/38v2VnmGdWwA3EfGWkm4RBewhgTZ+I4CXiHg+IB8gH4s/cYX1AB5T5QfyZ9fXGqQGQJaf5I6+Twt1AMWGSjH8MBLixz7nxD4xrK1WA3ya5u/JWQmVvPftkuJ32wOopXGAPbm4DMTLOPSVhTOoAbLTXvYkmaSVdOuBO4BXUdCcAMDF5aV6CiwAqECHlx0mk+PWLdAZOMA1DDw+F+8ATvEagD9jmy+IA9Tde+QWDWMdgEaBhVvTmdU+Z+aNuHlNdRMIohsBpEM1PVnzZnNJHbe4IKNRoQmpEaCx4Ynq5mqq740K1qTnnjy9iQtLzi7b3riWPIziItAKUbIm+YiBAvyH02MjBs0EnWHgPupuP2D2R+vFRZv5Jx+YFq3r6QD/Wc9YGdHIjH4AAAAASUVORK5CYII="/></a>
        <a href="" className={style.footer_icon} >< img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvlldERgjAQRJdOtBK1ErUStRK1ErUS7UR5TM4J4RLIB1/cDIOS3O1ldzkazRzNzPW1XICtpJOkVaD43t7P4f8h/O6WUooeko6SPgVtKHB11skBkPybracA31DcOvJw2JMLQJ6SyOfeOwHo7yjzEjqJT5PrPgbcWfEcRfBrQXEuOjIKPHpsP9RA0T9SiugwFq/2NSkCpBTVFmd/T+ApFNWCrFMHphRxCqxq/q4FGEwGb1Qg8r7tBD1qYkCPRxHPplgxBcZh0DOI3LDjtcdNU6Pn/ZJN4zV0MNuWgFxqLME7gQnMCcZ0yHbuAdQ4iDkzNhQ7DM+muGgTrBrbFSFfznwq6rTcL9pU+87/0f8B2ZYyGenGE+gAAAAASUVORK5CYII="/></a>
    </div>
    <p>&#169;2023 copyright all right reserved</p>
   </footer>
</main>
        </div>
    )
}
export default Folio