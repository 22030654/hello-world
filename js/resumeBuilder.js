var bio = {
    "name": "Victor Thoma",
    "role": "Digital Consultant",
    "contacts": {
        "mobile": "+491726123649",
        "email": "victor@mrundmrsthoma.de",
        "github": "22030654",
        "location": "Berlin"
    },
    "welcomeMessage": "Digital entrepreneur and project manager with various skills in the field of sales, business development, UX & CRM.",
    "biopic": "images/Profilbild2.jpeg",
    "skills": ["HTML", "CSS", "Python", "Javascript"],
    "skills2": ["Adobe Photoshop", "Wordpress", "Salesforce", "MS Office"],
    "skills3": ["Business Development", "Sales", "Project Management", "Customer Relations"]
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var bioPreHeader = formattedRole + formattedName;
    var bioAppHeader = formattedMsg + formattedBiopic;
    $("#header").prepend(bioPreHeader);
    $("#header").append(bioAppHeader);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", 'www.linkedin.com/in/victorthoma');
    var Contacts = formattedEmail + formattedMobile + formattedGithub + formattedLocation + formattedLinkedin;
    $("#topContacts").append(Contacts);
    $("#footerContacts").append(Contacts);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skills = 0; skills < bio.skills.length; skills++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
            if (skills === 0) {
                formattedSkills = formattedSkill;
            } else {
                formattedSkills += formattedSkill;
            }
        }
    }
    $("#skills").append(formattedSkills);
    if (bio.skills2.length > 0) {
        $("#header").append(HTMLskillsStart2);
        for (skills2 = 0; skills2 < bio.skills2.length; skills2++) {
            var formattedSkill2 = HTMLskills2.replace("%data%", bio.skills2[skills2]);
            if (skills2 === 0) {
                formattedSkills2 = formattedSkill2;
            } else {
                formattedSkills2 += formattedSkill2;
            }
        }
    }
    $("#skills2").append(formattedSkills2);
    if (bio.skills3.length > 0) {
        $("#header").append(HTMLskillsStart3);
        for (skills3 = 0; skills3 < bio.skills3.length; skills3++) {
            var formattedSkill3 = HTMLskills3.replace("%data%", bio.skills3[skills3]);
            if (skills3 === 0) {
                formattedSkills3 = formattedSkill3;
            } else {
                formattedSkills3 += formattedSkill3;
            }
        }
    }
    $("#skills3").append(formattedSkills3);
};
bio.display();
var work = {
    "jobs": [{
        "employer": "ERGO",
        "title": "Project Manager",
        "location": "Berlin",
        "dates": "Apr. 2016 - now",
        "description": "The ERGO Digital Lab deals with the question what digitalization means for an insurance company and the everyday life of an insured person. Thereby, the ERGO Digital Lab helps the corporations ERGO and ERGO Direkt to digitalize. Moreover, the ERGO Digital Lab operates as the corporate's own laboratory and is keen to identify and establish new digital business models. Responsibilities: Conceptual design of upcoming projects - Project strategy development - Business model definition - Market and target group analysis - Conception of marketing, go-to-market & sales"
    }, {
        "employer": "Karosso GmbH",
        "title": "Co-Founder & CPO",
        "location": "Berlin",
        "dates": "Jan. 2015 - Feb. 2016",
        "description": "Karosso takes all the hassle of buying and selling used cars out of the system. Rather than getting ripped off by a dealership or having to deal with the hassle of selling via existing online marketplaces, Karosso helps sellers make more money by listing their cars on its marketplace and taking a little cut of the sale. Meanwhile buyers get peace of mind due to the extensive inspection process for all vehicles before they are listed. Responsibilities: Business development - Strategic planning and orientation - Coordination and organization of the IT department - Sales management - Disposition of logistics - Business partner acquisition - Consultation with mentors and investors."
    }, {
        "employer": "Miebach Consulting GmbH",
        "title": "Supply Chain Management Intern",
        "location": "Frankfurt am Main",
        "dates": "May 2014 - Aug. 2014",
        "description": "Miebach is a leading international supply chain consulting firm, which aids clients in engineering supply chains that lower costs and maximize service levels.  our strength is to provide tailor made solutions that are not only strategic and conceptual in nature, but often collaborating with our clients through detail planning, project implementation, and start-up support."
    }]
};
work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var workAttributes = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(workAttributes);
    }
};
work.display();
var projects = {
    "projects": [{
        "title": "Customer Service Chatbot",
        "dates": "Jun. 2016 - Dez. 2016",
        "description": "Development of a customer service chatbot for a German Insurance company",
        "images": ["images/Chatbot.jpeg", "images/Chatbot.jpeg"]
    }, {
        "title": "Mobile Natural Hazard Analysis",
        "dates": "Jul. 2016 - Sep. 2016",
        "description": "Development of a webapp to request a natural hazard analysis via mobile",
        "images": ["images/Karl.jpeg"]
    }]
};
projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedImages = 0;
        if (projects.projects[i].images.length > 0) {
            for (image = 0; image < projects.projects[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                if (image === 0) {
                    formattedImages = formattedImage;
                } else {
                    formattedImages += formattedImage;
                }
            }
        }
        var projectAttributes = formattedTitle + formattedDates + formattedDescription + formattedImages;
        $(".project-entry:last").append(projectAttributes);
    }
};
projects.display();
var education = {
    "schools": [{
        "name": "European Business School",
        "location": "Oestrich-Winkel",
        "degree": "B.Sc. General Management",
        "majors": ["Strategy Consulting, Tax Avoidance, International Taxation"],
        "dates": "Aug. 2012 - Jul. 2015",
        "url": "https://www.ebs.edu/de"
    }, {
        "name": "Singapore Management University",
        "location": "Singapore",
        "degree": "Semester Abroad",
        "majors": ["Investment Banking, Strategy Consulting, Family Businesses"],
        "dates": "Dez. 2013 - May 2014",
        "url": "http://www.smu.edu.sg/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "Jul. 2016 - Dez. 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};
education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var educationAttributes = formattedName + formattedDegree + formattedLocation + formattedDates + formattedMajors;
        $(".education-entry:last").append(educationAttributes);
    }
    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedTime = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var coursesAttributes = formattedTitle + formattedSchool + formattedTime + formattedUrl;
        $(".education-entry:last").append(coursesAttributes);
    }
};
education.display();
$("#mapDiv").append(googleMap);
