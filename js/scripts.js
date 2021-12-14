function placeTexts(idcode) {
	if(idcode == "1-1") {
		document.getElementById('projectTitle').innerHTML = "ProKarma ITP";
		document.getElementById('projectDetails').innerHTML = `<b>(March 2020 - August 2020): </b>
			I became part of ProKarma's Intensive Training Program where I was taught many of the 
			basics of using Java oriented to databases. We developed CRUDs based on a given theme 
			using Maven, Spring MVC and Spring Boot and applying the topics of filters, exceptions and HATEOAS.`;
		document.getElementById('projectMedia').innerHTML = `<img width="200" height="200" src="resources/pkglobal.png" 
			alt="pkglobal">`;
	}
	else if(idcode == "1-2") {
		document.getElementById('projectTitle').innerHTML = "Angular 8 PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(June 2020 - August 2020): </b>
			I was assigned by ProKarma to be part of a Bootcamp in which I learned the basics of 
			creating web applications with Angular 8. The first task was to create a To-Do List 
			and the final project consisted in creating (with the other trainees) an application 
			that stored the updated worldwide information about COVID-19.`;
		document.getElementById('projectMedia').innerHTML = `<img class="visualimg" src="resources/covidangular.JPG" 
			alt="CovidAngular">`;
	}
	else if(idcode == "1-3") {
		document.getElementById('projectTitle').innerHTML = "React Native PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(September 2020 - November 2020): </b>
			I was assigned by ProKarma to be part of another bootcamp that aimed to teach the trainees 
			the basic tools for building mobile applications for the Android operating system using React 
			Native. The final result of the project was an application that collected important worldwide 
			data regarding the COVID-19 pandemic from a web API with extra functions like login and calendars.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/_fBGG_WrItg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-4") {
		document.getElementById('projectTitle').innerHTML = "Android PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(December 2020 - January 2021): </b>
			I became part of an Android Bootcamp offered by mentors of ProKarma in order to learn a more 
			in-depth usage of the Android interface and Kotlin programming language. Though the bootcamp 
			was cancelled nearly at the end, I was able to complete the assigned project for the end of 
			the bootcamp: an app that consisted in an online shop were people could buy products with 
			daily sales and their requests were saved in a Cloud Firestore collection.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/tpdpM8Rggh8" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-5") {
		document.getElementById('projectTitle').innerHTML = "iRAP Desktop Application";
		document.getElementById('projectDetails').innerHTML = `<b>(February 2021 - May 2021): </b>
			This was a project made in collaboration with 'Instituto Mexicano del Transporte', a company 
			incharge of doing investigation to enhance security in streets. The application provides an 
			alternative for displaying images of the road to be evaluated and coding certain parameters 
			that will be stored on a CSV file and sent to the iRAP evaluation, which will eventually give 
			a conclusion about a road's security with a 5-star rating.`;
		document.getElementById('projectMedia').innerHTML = `<img class="visualimg" src="resources/TEFCoderApp.PNG" 
			alt="TEFCoderApp">`;
	}
	else if(idcode == "1-6") {
		document.getElementById('projectTitle').innerHTML = "Urbank Exchange Velta Web Application";
		document.getElementById('projectDetails').innerHTML = `<b>(June 2021 - August 2021): </b>
			I worked as a softwared developer in the company Velta where I was assigned to help develop the
			page that manages investor's crypto coins exchange matters, as well as developing the page's
			proper navigation, database for user registration and authentication protocol. The application
			was developed using the frameworks Django for the Back End and Bootstrap for the Front End.
			Large amounts of research were required since this was my first project using Django.`;
		document.getElementById('projectMedia').innerHTML = `<img class="visualimg" src="resources/urbhome.PNG" 
			alt="UrbankHome">`;
	}
	else if(idcode == "2-1") {
		document.getElementById('projectTitle').innerHTML = "Ultrasonic Pong Game";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2017): </b>
			This project consisted in building the classical Pong videogame on a computer 
			screen; however, the game was being processed by a Nexys 3 FPGA and depicted 
			on a screen by a VGA port. Both paddles were controlled by two different ultrasonic 
			sensors, the paddles' height depended on the sensors readings and the scores were 
			shown on the FPGA's displays.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/fwJMlncWvzc" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-2") {
		document.getElementById('projectTitle').innerHTML = "Microcontroller Christmas Ornament";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2018): </b>
			This project aims to cover most of the topics regarding microcontrollers seen throughout the
			semester. The project consists of a christmas ornament made up of RGB lights that change colors 
			by covering ultrasonic sensors to turn colors off or automatically with adjustable speed. The 
			microcontroller plays the Jingle Bells music and displays a sign that says 'Merry Christmas and 
			a Happy New Year!'.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200"
			src="https://www.youtube.com/embed/7NAt_utkXAo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-3") {
		document.getElementById('projectTitle').innerHTML = "AES Rijndael Algorithm";
		document.getElementById('projectDetails').innerHTML = `<b>(May 2019 & June 2020): </b> 
			This project consisted in implementing the AES Rijndael ciphering algorithm on a microcontroller 
			(2019) which allowed to cipher and decipher any kind of file with the help of a key. A simpler 
			version of this project was then repeated on a Basys 3 FPGA for shorter messages entered through 
			a software called Docklight (2020).`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/MBkR7mzTEqo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-4") {
		document.getElementById('projectTitle').innerHTML = "Capacitive Bat Racer Game";
		document.getElementById('projectDetails').innerHTML = `<b>(May 2019): </b>
			This porject consisted in building a videogame in which you had to evade obstacles 
			and rack up points as the game carried on. The game was displayed in a Nokia screen 
			and the bat was controlled by moving it up and down by touching a pair of metal 
			slates that worked as capacitive sensors while the microcontroller played our version 
			of the original Tetris theme.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/TDtBzA5wqBY" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-5") {
		document.getElementById('projectTitle').innerHTML = "CVI Car Cluster";
		document.getElementById('projectDetails').innerHTML = `<b>(October 2019): </b>
			This porject consisted in building a cluster using LabWindows CVI that could 
			report the actual information about a vehicle while it is connected to the 
			computer through an OBD cable. Some information that was displayed was speed, 
			RPMs, coolant temperature, throttle position, fuel pressure, time elapsed 
			since ignition, malfunction report and many more.`;
		document.getElementById('projectMedia').innerHTML = `<img class="visualimg" src="resources/cluster.JPG" 
			alt="CarCluster">`;
	}
	else if(idcode == "2-6") {
		document.getElementById('projectTitle').innerHTML = "Smart Surveillance Camera";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2020): </b>
			This project consisted in creating a camera using Python and OpenCV that was 
			able to take pictures and record videos manually by pressing certain commands 
			on the computer's keyboard, and automatically by recording when movement is 
			detected and taking pictures when a human front face or profile face was detected 
			on the captured frame. All images and videos recorded were saved on a separate folder.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/V8WIRvl7tSg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-7") {
		document.getElementById('projectTitle').innerHTML = "Inventorizer Web App";
		document.getElementById('projectDetails').innerHTML = `<b>(May 2021 - June 2021): </b>
			The main purpose of this project was to implement a web application in which users could 
			register and authenticate themselves in order to store items, categories and stashes that 
			help them manage their personal inventories. This application communicates with a database 
			and performs its tasks with various PHP programs and SQL queries following the MVC pattern 
			to properly opperate CRUD (Create, Read, Update, Delete) functions over anything stored in 
			the database.`;
		document.getElementById('projectMedia').innerHTML = `<img class="visualimg" src="resources/InventorizerDemo.PNG" 
			alt="InventorizerDemo">`;
	}
	else if(idocde == "2-8") {
		document.getElementById('projectTitle').innerHTML = "'Gary.exe' Robotics Project";
		document.getElementById('projectDetails').innerHTML = `<b>(October - November 2021): </b>
			This project aimed to create an Agribot that has the ability of depositing seeds on the ground
			while it can be moved in manual mode through a joystick controller or in ROS mode using a remote
			computer and a local network to communicate. It is able to follow nearby objects and move semi-autonomously
			avoiding obstacles. It notifies to the remote computer when its tank runs out of seeds, requesting
			a refill and that it must return to its base to get more seeds to the tank.`;
		document.getElementById('projectMedia').innerHTML = `<iframe width="350" height="200" 
			src="https://www.youtube.com/embed/8QQ5aAXFx5M" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
}