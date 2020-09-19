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

    var Employ = function (id, imgUrl, name, designation, des) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.designation = designation;
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
                    "Sustainability",
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
                    "We, the Greengineers are on a mission to help people build and manage their buildings competently and comfortably by engineering the architecture and building services using suitable engines which create a foundation for energy efficient,ecological,economical & safe building design,construction and management."
                ),
                new AboutUs(
                    "fas fa-glasses",
                    "Vision",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi, excepturi,quaerat alias minus exercitationem accusantium sit similique aperiam maxime nulla."
                ),
            ]
            return about;
        },
        getAboutSlides: function () {
            var aboutSlides = [
                new AboutSlide(
                    "Heading",
                    "Our first priority is to solve the problem of the project and work towards fulfilling the needs and desires of the client.",
                    "fas fa-rocket",
                    true
                ),
                new AboutSlide(
                    "Heading",
                    "We are a team of green engineers and architects with adequate experience of handling national & international projects.",
                    "fas fa-rocket",
                    false
                ),
                new AboutSlide(
                    "Heading",
                    "We use our skill, knowledge & imagination to see how much more value we can give/ add for every ₹ spent.",
                    "fas fa-rocket",
                    false
                ),
                new AboutSlide(
                    "Heading",
                    "Guaranteed quality work on time.",
                    "fas fa-rocket",
                    false
                ),
                new AboutSlide(
                    "Heading",
                    "Detailed Presentation of accomplished work for full clarity and satisfaction of client.",
                    "fas fa-rocket",
                    false
                ),
                new AboutSlide(
                    "Heading",
                    "Streamlined process of document collection and client coordination for smooth project delivery.",
                    "fas fa-rocket",
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
                    "wall4.jpg",
                    "name 1",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
                ),
                new Employ(
                    "emp1",
                    "wall4.jpg",
                    "name 2",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
                ),
                new Employ(
                    "emp2",
                    "wall4.jpg",
                    "name 3",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
                ),
                new Employ(
                    "emp3",
                    "wall4.jpg",
                    "name 4",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
                ),
                new Employ(
                    "emp4",
                    "wall4.jpg",
                    "name5",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
                ),
                new Employ(
                    "emp5",
                    "wall4.jpg",
                    "name6",
                    "designation",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis architecto laborum consequuntur nobis excepturi quos, aut fugiat ducimus odio necessitatibus molestiae repellendus cupiditate hic. Facilis vitae excepturi voluptates similique."
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
                case "employs": markup = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"><div class="emp-card" id="%id%" data-toggle="modal" data-target="#emp-detail"><div class="emp-img"><img src="/assets/images/%imgUrl%" alt="%name%"></div><h5>%name%</h5><h6>%designation%</h6><p>%des%</p><span class="info-icon"><i class="fas fa-info"></i></span></div></div>';
                    data.forEach(function (val) {
                        newMarkup = markup.replace("%imgUrl%", val.imgUrl);
                        newMarkup = newMarkup.replaceAll("%name%", val.name);
                        newMarkup = newMarkup.replace("%designation%", val.designation);
                        newMarkup = newMarkup.replace("%des%", val.des);
                        newMarkup = newMarkup.replace("%id%", val.id);
                        elements.employs.insertAdjacentHTML('beforeend', newMarkup);
                    });
                    break;
                case "empDetails": markup = '<div class="emp-img"><img src="./assets/images/%imgUrl%" alt="%name%"></div><h5>%name%</h5><h6>%designation%</h6><p>%des%</p>';
                    newMarkup = markup.replace("%imgUrl%", data.imgUrl);
                    newMarkup = newMarkup.replaceAll("%name%", data.name);
                    newMarkup = newMarkup.replace("%designation%", data.designation);
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