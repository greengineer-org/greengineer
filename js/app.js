var modelController = (function () {
    var NavMenu = function (name, icon, href) {
        this.name = name;
        this.icon = icon;
        this.href = href;
    };

    var HomeSlide = function (title, des, imgUrl, isActive) {
        this.title = title;
        this.des = des;
        this.imgUrl = imgUrl;
        this.isActive = isActive;
    };

    var AboutUs = function (icon, title, des) {
        this.icon = icon;
        this.title = title;
        this.des = des;
    };

    var AboutSlide = function (title, des, icon, isActive) {
        this.title = title;
        this.des = des;
        this.icon = icon;
        this.isActive = isActive;
    };

    var Service = function (imgUrl, title, des) {
        this.imgUrl = imgUrl;
        this.title = title;
        this.des = des;
    };

    var Employ = function (id, imgUrl, name, edu, des) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.edu = edu;
        this.des = des;
    };

    return {
        getNavItems: function () {
            var navItems = [
                new NavMenu("Home", "fas fa-home", "sec-home"),
                new NavMenu("About", "fas fa-paper-plane", "sec-about"),
                new NavMenu("Services", "fas fa-layer-group", "sec-services"),
                new NavMenu("Team", "fas fa-users", "sec-team"),
                new NavMenu("Contact", "fas fa-comments", "sec-contact"),
            ];
            return navItems;
        },
        getHomeSlides: function () {
            var homeSlides = [
                new HomeSlide(
                    "green campus",
                    "",
                    "greenCampus.jpg",
                    true
                ),
                new HomeSlide(
                    "green city",
                    "A green city can influence millions of people to think and live sustainable.",
                    "greenCity.jpg",
                    false
                ),
                new HomeSlide(
                    "sustainability",
                    "Sustainability is not a choice; it is the one &amp; only way of existence.",
                    "sustainability.jpg",
                    false
                ),
                new HomeSlide(
                    "efficient facade",
                    "Energy efficiency in a building starts with its envelop &amp; then other equipment.",
                    "efficientFacade.jpg",
                    false
                ),
                new HomeSlide(
                    "green interior",
                    "A green interior not only provide energy efficiency but also thermal, visual &amp; acoustic comfort along with other health benefits.",
                    "greenInterior.jpg",
                    false
                ),
                new HomeSlide(
                    "green technology",
                    "Green development is also a platform of opportunities for innovation for any kind of resource security.",
                    "greenTechnology.jpg",
                    false
                ),
            ];
            return homeSlides;
        },
        getAboutUs: function () {
            var about = [
                new AboutUs(
                    "fas fa-lightbulb",
                    "Why us ?",
                    "Greengineer provides hassle free and timely project delivery with quality of international standards at best cost."
                ),
                new AboutUs(
                    "fas fa-rocket",
                    "Mission",
                    "We, the <strong><em>Greengineers</em></strong> are on a mission to help people <strong><em> build and manage </em></strong> their buildings competently and comfortably by <strong><em> engineering the architecture </em></strong> and building services using suitable <strong><em>engines</em></strong> which create a foundation for <strong><em>energy efficient, ecological, economical &amp; safe</em></strong> building design, construction and management."
                ),
                new AboutUs(
                    "fas fa-glasses",
                    "Vision",
                    "To <strong><em> engineer and run a system </em></strong> in which energy efficiency &amp; green compliance in buildings are creative, innovative, educative, economic and simplified."
                ),
            ]
            return about;
        },
        getAboutSlides: function () {
            var aboutSlides = [
                new AboutSlide(
                    "Our priority",
                    "Our first priority is to <strong><em>solve the problem </em></strong> of the project and work towards fulfilling the needs and desires of the client.",
                    "fas fa-clipboard-check",
                    true
                ),
                new AboutSlide(
                    "Our Expertise",
                    "We are a team of <strong><em> green engineers and architects </em></strong> with adequate experience of handling national &amp; international projects.",
                    "fas fa-user-shield",
                    false
                ),
                new AboutSlide(
                    "Value for money",
                    "We use our skill, knowledge &amp; imagination to see <strong><em>how much more value</em></strong> we can give/ add for every ₹ spent.",
                    "fas fa-hand-holding-usd",
                    false
                ),
                new AboutSlide(
                    "Work Quality",
                    "Guaranteed quality <strong><em>work on time</em></strong> at best cost.",
                    "far fa-file-alt",
                    false
                ),
                new AboutSlide(
                    "Client satisfaction",
                    "Detailed Presentation of accomplished work for <strong><em>full clarity and satisfaction</em></strong> of client.",
                    "fas fa-user-tie",
                    false
                ),
                new AboutSlide(
                    "Execution Process",
                    "Streamlined process of document collection and client coordination for <strong><em>hassle free project delivery.</strong>",
                    "fas fa-cogs",
                    false
                ),
            ];
            return aboutSlides;
        },
        getServices: function () {
            var services = [
                new Service(
                    "fas fa-layer-group",
                    "Simulation",
                    "Building energy simulation & lighting analysis for design improvement & validation."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Compliance modeling",
                    "Compliance modeling for ECBC, ASHRAE, LEED, IGBC, GRIHA, EC."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "ASHRAE level 1, 2 & 3 energy audits, green audits & third party commissioning."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "Computational Fluid Dynamics (CFD analysis) and Fire Dynamics Simulation (FDS)."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "Research & policy work."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "Tool development for different green compliances."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "Training of energy simulation & code compliances."
                ),
                new Service(
                    "fas fa-layer-group",
                    "Service name",
                    "Green Building certification & compliance for different disciplines."
                ),
            ]
            return services
        },
        getEmploys: function () {
            var employs = [
                new Employ(
                    "emp0",
                    "Ankit-Shukla.gif",
                    "Ankit Shukla, <span class='emp-deg'>Director</span>",
                    "M.Tech [Energy] | B.Tech [Mechanical], SGVU, Jaipur LEED© AP BD+C | IGBC© AP | GRIHA ©CP",
                    'Ankit is expert in the area of energy efficiency, energy auditing and green building design solution and certification. Prior to founding Greengineer Private Limited, Ankit worked with Kalpakrit Sustainable Environments Private Limited where he led the team to successful execution of many state of the art projects like IIT Gandhinagar, IIM Kozhikode, Tata Chemicals Limited Babrala, Headquarter of Sleepwell (Sheela Group) NOIDA and many more.\r He has carried out research in the area of energy efficiency and thermal comfort of buildings and published research papers in international journals like IBPSA.He is a LEED Accredited Professional,IGBC Accredited Professional and GRIHA Certified Professional.He was also involved with the demonstration projects of BEE-UNDP-GEF for ECBC compliance in commercial buildings in various states of India.He has worked on softwares like eQUEST, Design Buildier, Ecotect and EcoNirman. He is actively involved in building energy simulation, facilitation for LEED, IGBC and GRIHA projects, third party commissioning of building, research and education. He was also involved in preparing and presenting the customized presentations to client to educate them about advantages of sustainable development through 3P model (People Planet and Profit), Best among various options of rating system for their project as per their needs and desires.'
                ),
                new Employ(
                    "emp1",
                    "Vikash-Sharma.png",
                    "Vikash Sharma, <span class='emp-deg'>Sr. Associate: CFD &amp; FDS</span>",
                    "M.Tech [Energy], MNIT Jaipur | B.Tech [Mechanical], RTU, Jaipur",
                    "Vikas Sharma completed Bachelors in Mechanical Engineering from RTU, Jaipur in the year 2007. In the year 2010, he completed Masters in Energy Engineering from MNIT, Jaipur. He has more than 10 years of work experience in the field of computational fluid dynamics (CFD). He has given training of CFD to students and professionals of various organizations. Later, he started to work on the open source software like Open FOAM, FDS, etc. and entered the field of commercial consultancy of the CFD and FDS (Fire Dynamics Simulation) in the buildings."
                ),
                new Employ(
                    "emp2",
                    "Manish-Dadhich.png",
                    "Manish Dadhich, <span class='emp-deg'>Sr. Associate: CFD &amp; FDS</span>",
                    "M.Tech [Thermal], RTU Jaipur | B.Tech [Mechanical], RTU, Jaipur",
                    "Manish Dadhich completed Bachelors in Mechanical Engineering and masters in Thermal engineering from the RTU, Kota in 2010 &amp; 2013. Currently, he is pursuing Ph.D. from RTU, Kota in the field of Flow boiling. He started his career in GROBDESIGN (P) LTD, Jaipur and was involved in the training programs for CFD analysis. Presently he deals with the academic projects as well as the projects related to CFD in the buildings using open-source software."
                ),
                new Employ(
                    "emp3",
                    "Abhijit-Singh.png",
                    "Abhijit Singh, <span class='emp-deg'>Associate: Passive design and site management</span>",
                    "B.Arch, IPS, Indore",
                    "Abhijit is an architect and has completed B.Arch. from IPS Indore in 2014. He is expert in providing green building design solution and on site implementation. At Greengeener Pvt. Ltd., his role is to provide the design inputs and visit site for ensuring actual sustainable site development and construction management."
                ),
                new Employ(
                    "emp4",
                    "Mukesh-Singh.png",
                    "Mukesh Singh, <span class='emp-deg'>Director: Accounts &amp; Finance</span>",
                    "MA (Economics), Rajasthan University, Jaipur",
                    "Mukesh is heading accounts and finance function of Greengineer Pvt. Ltd and is one of the active directors of the company. He is expert in strategizing the financial aspect of business development. He was also involved in the project “Strengthening of the Local Government Bodies” undertaken by NITI Ayog Chair in collaboration with Rajasthan State Finance Commission, Jaipur. He also helps the team to give solutions on ecology and economy of the green building projects."
                ),
                new Employ(
                    "emp5",
                    "Neha-Bisht.jpg",
                    "Neha Bisht, <span class='emp-deg'>Associate: Green Building Design</span>",
                    "B.Arch, Jamia Millia Islamia, Delhi | IGBC© AP",
                    "Neha is an Architect and her expertise includes providing green building architectural design solutions, BIM Modeling and carrying out daylighting and artificial lighting analysis. She is IGBC Accredited Professional. She started her career from Kalpakrit Sustainable Environments Private limited, New Delhi and worked as a sustainable design assistant for 2 years."
                ),
                new Employ(
                    "emp6",
                    "Shubhangi-Goel.jpg",
                    "Shubhangi Goel, <span class='emp-deg'>Associate: Green Building Design</span>",
                    "B.Arch, Jamia Millia Islamia, Delhi | IGBC© AP",
                    "Shubhangi is an Architect and pursuing Masters in Architectural science with specializations in high performance buildings and Illumination designing. Her field of expertise includes building economics, intelligent building control systems, indoor environmental quality, sustainable construction technologies, water sensitive design, illumination designing which offers strong technical education in human visual perception, methods for quantifying light, lighting techniques and interaction of optics, psychology and physiology."
                ),
                new Employ(
                    "emp7",
                    "Gyanesh-Gupta.png",
                    "Gyanesh Gupta, <span class='emp-deg'>Associate: Energy Management</span>",
                    "M.Tech [Energy] | B.Tech [Mechanical], SGVU, Jaipur",
                    "Gyanesh is an Energy Engineer and pursuing Ph.D. in residential building benchmarking of India (Energy) from MNIT, Jaipur. He is expert in research, energy and environmental benchmarking and energy management."
                ),
                new Employ(
                    "emp8",
                    "Naveen-Sharma.jpg",
                    "Naveen Sharma, <span class='emp-deg'>Associate: Energy Modelling &amp; HVAC</span>",
                    "B.Tech [Mechanical], RTU, Jaipur",
                    "Naveen is a mechanical Engineer. He is expert in providing efficient HVAC solution for different kind of projects. He is also efficient in energy modeling work to propose various energy efficient measures for code and green building rating compliances."
                ),
            ];
            return employs;
        }
    };
})();

var viewController = (function () {
    var elements = {
        navMenu: document.querySelector('[rel="js-nav-items"]'),
        homeSlides: document.querySelector('[rel="js-home-slides"]'),
        homeSlidesIndicators: document.querySelector('[rel="js-home-slides-Indicators"]'),
        aboutCards: document.querySelector('[rel="js-about-cards"]'),
        aboutSlides: document.querySelector('[rel="js-about-slides"]'),
        aboutSlidesIndicators: document.querySelector('[rel="js-about-slides-Indicators"]'),
        services: document.querySelector('[rel="js-services"]'),
        employs: document.querySelector('[rel="js-employs"]'),
        empDetails: document.querySelector('[rel="js-emp-details"]'),
    };

    return {
        DOMElements: elements,

        renderMarkup: function (id, data) {
            var markup, newMarkup;

            switch (id) {
                case "navMenu": markup = '<li class="nav-item"><a class="nav-link" href="#%href%"><i class="%icon%"></i>%name%</a></li>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%href%", val.href);
                        newMarkup = newMarkup.replace("%icon%", val.icon);
                        newMarkup = newMarkup.replace("%name%", val.name);

                        elements.navMenu.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "homeSlides": markup = '<div class="carousel-item %isActive%"><img class="home-slide-img" src="/assets/images/homeSlides/%imgUrl%" alt="%title%"><div class="carousel-caption d-none d-md-block"><h5 class="home-slide-text %transparent%">%des%</h5></div></div>';
                    data.forEach(function (val, index) {
                        newMarkup = markup.replace("%imgUrl%", val.imgUrl);
                        newMarkup = newMarkup.replaceAll("%title%", val.title);
                        newMarkup = newMarkup.replace("%des%", val.des);

                        if (val.isActive) {
                            newMarkup = newMarkup.replace("%isActive%", "active");
                        } else {
                            newMarkup = newMarkup.replace("%isActive%", '');
                        };

                        if (index === 0) {
                            newMarkup = newMarkup.replace("%transparent%", "bg-transparent");
                        } else {
                            newMarkup = newMarkup.replace("%transparent%", '');
                        }

                        elements.homeSlides.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "homeSlidesIndicators": markup = '<li data-target="#homeSlides" data-slide-to="%slideTo%" class="%isActive%"></li>';
                    data.forEach(function (val, index) {
                        newMarkup = markup.replace("%slideTo%", index);

                        if (val.isActive) {
                            newMarkup = newMarkup.replace("%isActive%", "active");
                        } else {
                            newMarkup = newMarkup.replace("%isActive%", '');
                        };

                        elements.homeSlidesIndicators.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "aboutCards": markup = '<div class="about-card"><i class="%icon% icon"></i><h5>%title%</h5><p>%des%</p></div>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%icon%", val.icon);
                        newMarkup = newMarkup.replace("%title%", val.title);
                        newMarkup = newMarkup.replace("%des%", val.des);
                        elements.aboutCards.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "aboutSlides": markup = '<div class="carousel-item %isActive%"><div class="slide-content"><i class="%icon%"></i><h6>%title%</h6><p>%des%</p></div></div>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%icon%", val.icon);
                        newMarkup = newMarkup.replace("%title%", val.title);
                        newMarkup = newMarkup.replace("%des%", val.des);

                        if (val.isActive) {
                            newMarkup = newMarkup.replace("%isActive%", "active");
                        } else {
                            newMarkup = newMarkup.replace("%isActive%", '');
                        };
                        elements.aboutSlides.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "aboutSlidesIndicators": markup = '<li data-target="#about-slide-detail" data-slide-to="%slideTo%"><i class="%icon%"></i></li>';
                    data.forEach(function (val, index) {
                        newMarkup = markup.replace("%slideTo%", index);
                        newMarkup = markup.replace("%icon%", val.icon);
                        if (val.isActive) {
                            newMarkup = newMarkup.replace("%isActive%", "active");
                        } else {
                            newMarkup = newMarkup.replace("%isActive%", '');
                        };
                        elements.aboutSlidesIndicators.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "services": markup = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"><div class="service-card"><div class="front"><span class="icon"><i class="%imgUrl%"></i></span><h6>%title%</h6><p>%des%</p><i class="fas fa-arrow-circle-right info"></i></div><div class="right"><p>%des%</p></div></div></div>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%imgUrl%", val.imgUrl);
                        newMarkup = newMarkup.replace("%title%", val.title);
                        newMarkup = newMarkup.replaceAll("%des%", val.des);

                        elements.services.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "employs": markup = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"><div class="emp-card" id="%id%" data-toggle="modal" data-target="#emp-detail"><div class="emp-img"><img src="/assets/images/team/%imgUrl%" alt="%name%"></div><div class="card-highlight"><h6>%name%</h6><p class="edu">%edu%</p></div><p class="short-detail">%des%</p><span class="info-icon"><i class="fas fa-info"></i></span></div></div>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%imgUrl%", val.imgUrl);
                        newMarkup = newMarkup.replaceAll("%name%", val.name);
                        newMarkup = newMarkup.replace("%edu%", val.edu);
                        newMarkup = newMarkup.replace("%des%", val.des);
                        newMarkup = newMarkup.replace("%id%", val.id);
                        elements.employs.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "empDetails": markup = '<div class="emp-img"><img src="./assets/images/team/%imgUrl%" alt="%name%"></div><h5>%name%</h5><h6>%edu%</h6><p>%des%</p>';
                    newMarkup = markup.replace("%imgUrl%", data.imgUrl);
                    newMarkup = newMarkup.replaceAll("%name%", data.name);
                    newMarkup = newMarkup.replace("%edu%", data.edu);
                    newMarkup = newMarkup.replace("%des%", data.des);
                    elements.empDetails.innerHTML = newMarkup;
                    break;
            };
        },
    };
})();

var appController = (function (model, ui) {

    function navItems() {
        var items = model.getNavItems();
        ui.renderMarkup("navMenu", items);
    };

    function homeSlides() {
        var slides = model.getHomeSlides();
        ui.renderMarkup("homeSlides", slides);
        ui.renderMarkup("homeSlidesIndicators", slides);
    };

    function aboutUs() {
        var about = model.getAboutUs();
        ui.renderMarkup("aboutCards", about);
        var aboutSlides = model.getAboutSlides();
        ui.renderMarkup("aboutSlides", aboutSlides);
        ui.renderMarkup("aboutSlidesIndicators", aboutSlides);
    };

    function services() {
        var services = model.getServices();
        ui.renderMarkup("services", services);
    };

    function employs() {
        var emp = model.getEmploys();
        ui.renderMarkup("employs", emp)
    };

    function getEmployDetail() {
        ui.DOMElements.employs.addEventListener('click', function (event) {
            var id, empArray, empIndex;
            id = event.target.closest('.emp-card').id;
            empArray = model.getEmploys();
            empIndex = empArray.findIndex(function (el) {
                return el.id === id;
            });
            empInfo = empArray[empIndex];
            ui.renderMarkup("empDetails", empInfo);
        });
    };

    return {
        appInit: function () {
            navItems();
            homeSlides();
            aboutUs();
            services();
            employs();
            getEmployDetail();
        }
    };

})(modelController, viewController);

appController.appInit();