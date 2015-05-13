// --- CONSTANTS --- 

// These will replace some contact info sections by adding some links where needed
var EMAIL_LINK = '<a href="mailto:%data%?subject=CV Contact" class="contact-link white-text" target="_blank">%data%</a>';
var TWITTER_LINK = '<a href="https://twitter.com/%data%" target="_blank" class="contact-link white-text">@%data%</a>';
var GITHUB_LINK = '<a href="https://github.com/%data%" target="_blank" class="contact-link white-text">%data%</a>';

var BULLET = "&bull;";
var BR_BULLET = "<br>" + BULLET;

var SCHOOL_NAME_LINK = '<a href="%url%" target="_blank">%data%';
var ONLINE_COURSE_NAME_LINK = '<a href="%url%" target="_blank">%data%';
var ONLINE_COURSE_LINK = '<br><a href="%data%" target="_blank">%data%</a>';

// --- DATA OBJECTS ---

// Bio JSON definition
var bio = {
    name: "Victor Hernandez",
    role: "Software Developer",
    contacts: {
        mobile: "(415) 562-8456",
        email: "vikhhr@gmail.com",
        github: "vikhhr",
        twitter: "@civicsunrise",
        location: "Boulder, Co"
    },
    welcomeMessage: "Welcome to my online resume.",
    skills: [
        "Analytical.", "Problem Solving.", "Team player.", "Flexibility.", "Adaptability.", "Creativity."
    ],
    bioPic: "images/vhLogo.gif"
};

// Work JSON definition
var work = {
    jobs: [{
        employer: "ExploreLearning",
        title: "Senior Software Developer",
        location: "Charlottesville, Va",
        dates: "November 2011 - Present",
        description: [
            "Refactored existing game libraries into a single global game library.",
            "Collaborated in the redesign and migration of Reflex Web Application to run on the iPad.",
            "Developed two math fluency games for ReflexMath.",
            "Implemented spanish and french localization of the Reflex Math Student Application.",
            "Collaborated in the optimization of the Reflex Math Teacher Application and creation of new reports and views for parents and districts.",
            "Optimized Extractor Tool for generation of fluency data to track student progress.",
            "Ongoing design, and optimizations of Flash Gizmos and Gizmos 2.0."
        ]
    }, {
        employer: "E*trade",
        title: "Flash Developer",
        location: "Menlo Park, Ca",
        dates: "April 2011 - October 2011",
        description: [
            "Collaborated in the refactoring of Flex Graphic Tools for the Online Advisor component within E*trade website.",
            "Redesigned Etrade Community Investment Flex Widgets."
        ]
    }, {
        employer: "Google Inc.",
        title: "Software Engineer",
        location: "Mountain View, Ca",
        dates: "January 2011 - March 2011",
        description: [
            "Collaborated in the development of an ActionScript 3 framework for Flash website developers providing an easier interaction and navigation with Google TV.",
            "Developed sample ActionScript 3 templates demonstrating the framework library usage, as well as showing best practices for bringing flash content to Google TV."
        ]
    }, {
        employer: "Dreamworks Animation LLC",
        title: "Software Engineer",
        location: "Van Nuys, Ca",
        dates: "August 2009 - December 2010",
        description: [
            "Collaborated in the development and implementation of a proprietary game engine including Java back-end web services and ActionScript 3 front-end components for Kung Fu Panda World MMO (Massive Multiplayer Online) game.",
            "Participated in the development and maintenance of different game modules including vendors, newspaper, tutorials, clothing, mini games and player rooms.",
            "Created a tool to test swf assets to be used within the game from an external desktop application to reduce the Design Team testing time.",
            "Collaborated in the optimization of the afore mentioned game engine to create a battle turn based MMO for How To Train Your Dragon movie."
        ]
    }, {
        employer: "GAP Inc.",
        title: "Software Engineer",
        location: "San Francisco, Ca",
        dates: "September 2008 - July 2009",
        description: [
            "Collaborated in the re platforming and redesign of the GAP ecommerce platform removing dependencies on IBM proprietary implementations and replacing them with open source frameworks."
        ]
    }, {
        employer: "Motive Inc.",
        title: "Professional Services Consultant",
        location: "Austin, Tx",
        dates: "June 2007 - September 2008",
        description: [
            "Customized Java Struts web flows for DSL modem configuration and service activation for TELUS and Bell Canada.",
            "Refactored HTML – Javascript client applications to work with proprietary Windows Vista ActiveX Controls.",
            "Created a Wireless Connection Manager application for WiFi and EVDO Connections.",
            "Customized a Windows Connection troubleshooter application for TELUS Canada.",
            "Created Windows Installer programs for the afore mentioned applications."
        ]
    }, {
        employer: "Bancomer",
        title: "Software Engineer",
        location: "Mexico City, Mexico",
        dates: "July 2004 - May 2007",
        description: [
            "Worked in the full life cycle of Java based intranet applications (since the gathering of requirements until the deployment of the solution and further maintenance) for controlling, monitoring and service level measurement of host and distributed platform processes (Mexico and Latin America).",
            "Collaborated in database design and stored procedures implementation",
            "Implemented monitoring services for Unix and Linux servers."
        ]
    }]
};

// Projects JSON definition
var projects = {
    projects: [{
        title: "Front-End Web Developer Project 2",
        dates: "May 2015",
        description: "Creating online resume.",
        images: []
    }, {
        title: "Front-End Web Developer Project 1",
        dates: "April 2015",
        description: "Creating online portfolio.",
        images: []
    }, {
        title: "iOS Developer Project 1",
        dates: "April 2015",
        description: "Voice recorder app.",
        images: []
    }, {
        title: "Online Map with D.C. School demographics.",
        dates: "September 2014",
        description: "Interactive online map with demographics for the different districts in Washington D.C.",
        images: []
    }, {
        title: "UVA Coach Tool",
        dates: "October 2013",
        description: "Developed an online coaching tool for Coaches in the Prince William District to keep track of their interactions with teachers and facilitate research.",
        images: []
    }, {
        title: "Thomas B. Fordham Institute Online Quiz",
        dates: "August 2013",
        description: "Developed an online quiz for a research project titled What Parents Want: Education Preferences and Trade-offs.",
        images: []
    }]
};

// Education JSON definition
var education = {
    schools: [{
        name: "Georgia Tech College of Computing",
        location: "Atlanta, Ga",
        degree: "Online Masters of Science in Computer Science",
        majors: ["Masters"],
        dates: 2014,
        url: "http://www.omscs.gatech.edu/"
    }, {
        name: "Tecnologico de Monterrey",
        location: "Mexico City, Mexico",
        degree: "BS Software Engineering",
        majors: ["BS"],
        dates: 2004,
        url: "http://www.ccm.itesm.mx"
    }],
    onlineCourses: [{
        title: "Front-End Web Developer Nanodegree",
        school: "Udacity",
        date: 2015,
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        title: "iOS Developer Nanodegree",
        school: "Udacity",
        date: 2015,
        url: "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
    }, {
        title: "Mobile Cloud Computing with Android",
        school: "Coursera: University of Maryland, College Park & Vanderbilt University",
        date: 2014,
        url: "https://www.coursera.org/specialization/mobilecloudcomputing2/36"
    }]
};

var map = {
    title: "Google Map"
};

// --- DISPLAY FUNCTIONS ---

// Function to build and display bio items.
bio.display = function() {
    "use strict";

    // Creating name and role items from template and prepending them to the header
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var header = $("#header");
    header.prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    header.prepend(formattedName);

    // Creating reference to avoid object property lookup repetition.
    var contactInfo = bio.contacts;
    var contactInfoUL = $("#topContacts");
    var footerContactsUL = $("#footerContacts");

    // Creating contacts and let's connect div from template and adding it to the topContacts element
    var formattedMobile = HTMLmobile.replace("%data%", contactInfo.mobile);
    contactInfoUL.append(formattedMobile);
    footerContactsUL.append(formattedMobile);

    // Since some contact info items can be linked I will add that to the elements.
    var linkFormattedEmail = EMAIL_LINK.replace(/%data%/g, contactInfo.email);
    var formattedEmail = HTMLemail.replace("%data%", linkFormattedEmail);
    contactInfoUL.append(formattedEmail);
    footerContactsUL.append(formattedEmail);

    var linkFormattedGithub = GITHUB_LINK.replace(/%data%/g, contactInfo.github);
    var formattedGithub = HTMLgithub.replace("%data%", linkFormattedGithub);
    contactInfoUL.append(formattedGithub);
    footerContactsUL.append(formattedGithub);

    var linkFormattedTwitter = TWITTER_LINK.replace(/%data%/g, contactInfo.twitter.replace("@", ""));
    var formattedTwitter = HTMLtwitter.replace("%data%", linkFormattedTwitter);
    contactInfoUL.append(formattedTwitter);
    footerContactsUL.append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", contactInfo.location);
    contactInfoUL.append(formattedLocation);
    footerContactsUL.append(formattedLocation);

    // Adding picture
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    header.append(formattedBiopic);

    // Adding welcome message and skills
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    header.append(formattedWelcomeMessage);

    header.append(HTMLskillsStart);

    var skillsUL = $("#skills");
    var mySkills = bio.skills;

    for (var skill in mySkills) {
        if (mySkills.hasOwnProperty(skill)) {
            var mySkill = mySkills[skill];

            var formattedSkill = HTMLskills.replace("%data%", mySkill);
            skillsUL.append(formattedSkill);
        }
    }

    // Since the mockup shows the skills as a list instead of side by side I will change the display css property.
    skillsUL.css("display", "block");
};

// Function to build and display work items.
work.display = function() {
    "use strict";

    // Creating reference to avoid object property lookup repetition.
    var myJobs = work.jobs;

    for (var job in myJobs) {
        if (myJobs.hasOwnProperty(job)) {
            var myJob = myJobs[job];

            // Creating work experience div from template and adding it to the workExperience element
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", myJob.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", myJob.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);

            var formattedDates = HTMLworkDates.replace("%data%", myJob.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", myJob.location);
            $(".work-entry:last").append(formattedLocation);

            var descriptions = myJob.description;

            /*
            Since I decided to use bullet points for my description (even though I still accept strings), I have to check
            the type of the content to correctly generate the description section for each job.
            */
            var description = descriptions.constructor === Array ? BULLET + descriptions.join(BR_BULLET) : descriptions;
            var formattedDescription = HTMLworkDescription.replace("%data%", description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

// Function to build and display project items.
projects.display = function() {
    "use strict";

    // Creating reference to avoid object property lookup repetition.
    var myProjects = projects.projects;

    for (var project in myProjects) {
        if (myProjects.hasOwnProperty(project)) {
            var myProject = myProjects[project];

            // Creating projects div from template and adding it to the projects element
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", myProject.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", myProject.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", myProject.description);
            $(".project-entry:last").append(formattedDescription);

            if (myProject.images.length > 0) {
                var myProjectImages = myProject.images;

                for (var projectImage in myProjectImages) {
                    if (myProjectImages.hasOwnProperty(projectImage)) {
                        var formattedImage = HTMLprojectImage.replace("%data%", myProjectImages[projectImage]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

// Function to build and display education items.
education.display = function() {
    "use strict";

    // Creating reference to avoid object property lookup repetition.
    var mySchools = education.schools;

    for (var school in mySchools) {
        if (mySchools.hasOwnProperty(school)) {
            var mySchool = mySchools[school];

            // Creating education div from template and adding it to the projects element
            $("#education").append(HTMLschoolStart);

            var linkSchoolName = SCHOOL_NAME_LINK.replace("%url%", mySchool.url).replace("%data%", mySchool.name);
            var formattedSchoolName = HTMLschoolName.replace("%data%", linkSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", mySchool.degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", mySchool.dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", mySchool.location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var majors = mySchool.majors;

            if (majors.length > 0) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", mySchool.majors.join(", "));
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }

    $("#education").append(HTMLonlineClasses);
    var myOnlineCourses = education.onlineCourses;

    for (var onlineCourse in myOnlineCourses) {
        if (myOnlineCourses.hasOwnProperty(onlineCourse)) {
            var myOnlineCourse = myOnlineCourses[onlineCourse];

            // Creating online course div from template and adding it to the projects element
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = ONLINE_COURSE_NAME_LINK.replace("%url%", myOnlineCourse.url).replace("%data%", myOnlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", myOnlineCourse.school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", myOnlineCourse.date);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = ONLINE_COURSE_LINK.replace(/%data%/g, myOnlineCourse.url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

// Function to display map
map.display = function() {
    "use strict";

    // Adding map of locations
    $("#mapDiv").append(googleMap);
};

// --- RENDER DATA ---

// Executing each object's display function to create all the content.
function runDisplay(element, index, array) {
    var displayFunction = element.display;

    console.log(typeof displayFunction);

    if (typeof displayFunction === "function") {
        displayFunction();
    }
}

// Initializing section objects array and executing display function on document ready
[bio, work, projects, education, map].forEach(runDisplay);
