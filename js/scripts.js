function placeTexts(idcode) {
	//English translation
	if(idcode == "1-1-eng") {
		document.getElementById('projectTitle').innerHTML = "ProKarma ITP";
		document.getElementById('projectDetails').innerHTML = `<b>(March 2020 - August 2020): </b>
			I became part of ProKarma's "Intensive Training Program" where I was taught many of the 
			basics of using Java oriented to databases. We developed CRUDs based on a given theme 
			using Maven, Spring MVC and Spring Boot, also applying the topics of filters, exceptions and HATEOAS.`;
		document.getElementById('projectMedia').innerHTML = `<img width="200" height="200" src="resources/pkglobal.png" 
			alt="pkglobal">`;
	}
	else if(idcode == "1-2-eng") {
		document.getElementById('projectTitle').innerHTML = "Angular 8 PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(June 2020 - August 2020): </b>
			I was assigned by ProKarma to be part of a Bootcamp in which I learned the basics of 
			creating web applications with Angular 8. The first task was to create a To-Do List 
			and the final project consisted in creating (with the other trainees) an application 
			that depicted the updated worldwide information about COVID-19.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/covidangular.JPG" 
			alt="CovidAngular">`;
	}
	else if(idcode == "1-3-eng") {
		document.getElementById('projectTitle').innerHTML = "React Native PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(September 2020 - November 2020): </b>
			I was assigned by ProKarma to be part of another bootcamp that aimed to teach the trainees 
			the basic tools for building mobile applications for the Android operating system using React 
			Native. The final result of the project was an application with functions like login and calendars
			that was able to collect important worldwide data regarding the COVID-19 pandemic from a web API.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/_fBGG_WrItg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-4-eng") {
		document.getElementById('projectTitle').innerHTML = "Android PK Bootcamp";
		document.getElementById('projectDetails').innerHTML = `<b>(December 2020 - January 2021): </b>
			I became part of an Android Bootcamp offered by mentors of ProKarma in order to learn a more 
			in-depth usage of the Android Studio interface and Kotlin programming language. Though the bootcamp 
			was cancelled nearly at the end, I was able to complete the assigned project by myself with 
			tutorials: an app that consisted in a simulated online shop were people could buy products with 
			daily sales and their requests were saved in a Cloud Firestore collection.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/tpdpM8Rggh8" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-5-eng") {
		document.getElementById('projectTitle').innerHTML = "iRAP Desktop Application";
		document.getElementById('projectDetails').innerHTML = `<b>(February 2021 - May 2021): </b>
			This was a project made in collaboration with 'Mexican Institute of Transportation', a company 
			incharge of doing investigation to enhance security in streets. The application provides an 
			alternative for displaying images of the road to be evaluated and coding certain parameters 
			that will be stored on a CSV file and sent to the iRAP evaluation, which will eventually give 
			a conclusion about the road's security with a 5-star rating.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/TEFCoderApp.PNG" 
			alt="TEFCoderApp">`;
	}
	else if(idcode == "1-6-eng") {
		document.getElementById('projectTitle').innerHTML = "Urbank Exchange Velta Web Application";
		document.getElementById('projectDetails').innerHTML = `<b>(June 2021 - August 2021): </b>
			I worked as a software developer in the company Velta where I was assigned to help develop the
			page that manages investor's crypto coins exchange matters, as well as help develop the page's
			proper navigation, database for user registration and authentication protocol. The application
			was developed using the frameworks Django for the Back End and Bootstrap for the Front End.
			Large amounts of research were required since this was my first project using Django.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/urbhome.PNG" 
			alt="UrbankHome">`;
	}
	else if(idcode == "2-1-eng") {
		document.getElementById('projectTitle').innerHTML = "Ultrasonic 'Pong' Game";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2017): </b>
			This project consisted in building the classical Pong videogame on a computer 
			screen; however, the game was being processed by a Nexys 3 FPGA and depicted 
			on a screen by a VGA port. Both paddles were controlled by two different ultrasonic 
			sensors, the paddles' position depended on the sensors' readings and the scores were 
			shown on the FPGA's displays.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/fwJMlncWvzc" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-2-eng") {
		document.getElementById('projectTitle').innerHTML = "Microcontroller Christmas Ornament";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2018): </b>
			This project aimed to cover most of the topics regarding microcontrollers seen throughout the
			semester. The project consisted of a christmas ornament made up of RGB lights that change colors 
			automatically with adjustable speed or by covering ultrasonic sensors to turn colors off. The 
			microcontroller played the Jingle Bells song and displayed a sign that says 'Merry Christmas and 
			a Happy New Year!'.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo"
			src="https://www.youtube.com/embed/7NAt_utkXAo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-3-eng") {
		document.getElementById('projectTitle').innerHTML = "AES Rijndael Cipher Algorithm";
		document.getElementById('projectDetails').innerHTML = `<b>(May 2019 & June 2020): </b> 
			This project consisted in implementing the AES Rijndael ciphering algorithm on a microcontroller 
			(2019) which allowed to cipher and decipher any kind of file with the help of a key. A simpler 
			version of this project was then repeated on a Basys 3 FPGA for shorter messages entered through 
			a software called Docklight (2020).`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/MBkR7mzTEqo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-4-eng") {
		document.getElementById('projectTitle').innerHTML = "Capacitive 'Bat Racer' Game";
		document.getElementById('projectDetails').innerHTML = `<b>(May 2019): </b>
			This project consisted in building a videogame in which you had to evade obstacles 
			and rack up points as the game carried on. The game was displayed in a Nokia screen 
			and the bat was controlled by moving it up and down by touching a pair of metal 
			slates that worked as capacitive sensors while the microcontroller played our version 
			of the original Tetris main theme.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/TDtBzA5wqBY" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-5-eng") {
		document.getElementById('projectTitle').innerHTML = "CVI Car Cluster";
		document.getElementById('projectDetails').innerHTML = `<b>(October 2019): </b>
			This project consisted in building a cluster using LabWindows CVI that could 
			report the actual information about a vehicle while it is connected to the 
			computer through an OBD cable. Some information that was displayed was speed, 
			RPMs, coolant temperature, throttle position, fuel pressure, time elapsed 
			since ignition, malfunction report and many more.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/cluster.JPG" 
			alt="CarCluster">`;
	}
	else if(idcode == "2-6-eng") {
		document.getElementById('projectTitle').innerHTML = "Smart Surveillance Camera";
		document.getElementById('projectDetails').innerHTML = `<b>(November 2020): </b>
			This project consisted in creating a camera using Python and OpenCV that was 
			able to take pictures and record videos manually by pressing certain commands 
			on the computer's keyboard. It worked automatically by recording when movement is 
			detected and taking pictures when a human front face or profile face was detected 
			on the captured frame. All images and videos recorded were saved on a separate folder.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/V8WIRvl7tSg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-7-eng") {
		document.getElementById('projectTitle').innerHTML = "'Inventorizer' Web App";
		document.getElementById('projectDetails').innerHTML = `<b>(May - June 2021): </b>
			The main purpose of this project was to implement a web application in which users could 
			register and authenticate themselves in order to store items, categories and stashes that 
			help them manage their personal inventories. This application communicates with a database 
			and performs its tasks with various PHP programs and SQL queries following the MVC pattern 
			to properly operate CRUD (Create, Read, Update, Delete) functions over anything stored in 
			the database.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/InventorizerDemo.PNG" 
			alt="InventorizerDemo">`;
	}
	else if(idcode == "2-8-eng") {
		document.getElementById('projectTitle').innerHTML = "'Gary.exe' Robotics Project";
		document.getElementById('projectDetails').innerHTML = `<b>(October - November 2021): </b>
			This project aimed to create an Agribot that has the ability of depositing seeds on the ground
			while it can be moved in manual mode through a joystick controller or in ROS mode using a remote
			computer and a local network for communications. It is able to follow nearby objects and move semi-autonomously
			avoiding obstacles. It notifies to the remote computer when its tank runs out of seeds, requesting
			a refill and that it must return to its base to get more seeds for the tank.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/8QQ5aAXFx5M" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	//Traducción español
	else if(idcode == "1-1-esp") {
		document.getElementById('projectTitle').innerHTML = "ProKarma ITP";
		document.getElementById('projectDetails').innerHTML = `<b>(Marzo 2020 - Agosto 2020): </b>
			Formé parte del "Intensive Training Program" de ProKarma donde aprendí muchas bases del uso de Java
			orientado a bases de datos. Se desarrollaron CRUDs basados en distintas temáticas utilizando 
			Maven, Spring MVC y Spring Boot, también aplicando los temas de filtros, excepciones y HATEOAS.`;
		document.getElementById('projectMedia').innerHTML = `<img width="200" height="200" src="resources/pkglobal.png" 
			alt="pkglobal">`;
	}
	else if(idcode == "1-2-esp") {
		document.getElementById('projectTitle').innerHTML = "Entrenamiento PK Angular 8";
		document.getElementById('projectDetails').innerHTML = `<b>(Junio 2020 - Agosto 2020): </b>
			Fui asignado por ProKarma para formar parte de un entrenamiento en el que aprendí las bases 
			de crear aplicaciones web con Angular 8. El primer trabajo fue crear una lista de quehaceres 
			y el proyecto final consistió en crear (con otros aprendices) una aplicación que mostrara
			información global acerca del COVID-19.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/covidangular.JPG" 
			alt="CovidAngular">`;
	}
	else if(idcode == "1-3-esp") {
		document.getElementById('projectTitle').innerHTML = "Entrenamiento PK React Native";
		document.getElementById('projectDetails').innerHTML = `<b>(Septiembre 2020 - Noviembre 2020): </b>
			Fui asignado por ProKarma para formar parte de otro entrenamiento que buscó enseñar a los aprendices 
			las herramientas básicas para construir aplicaciones móviles para el sistema operarivo de Android 
			usando React Native. El resultado final del entrenamiento fue una aplicación con funciones de inicio de 
			sesión y calendarios y que recolecta datos globales relevantes respecto a la pandemia de COVID-19 de una API.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/_fBGG_WrItg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-4-esp") {
		document.getElementById('projectTitle').innerHTML = "Entrenamiento PK Android";
		document.getElementById('projectDetails').innerHTML = `<b>(Diciembre 2020 - Enero 2021): </b>
			Formé parte de un entrenamiento de Android ofrecido por los mentores de ProKarma para aprender más 
			a fondo el uso de la interfaz de Android Studio y el lenguaje de programación Kotlin. Aunque el programa 
			fue cancelado poco antes de terminar, fui capaz de completar el proyecto asignado por mi cuenta con ayuda 
			de tutoriales: una aplicación que consistió en simular una tienda en línea donde la gente podía comprar 
			productos con promociones diarias y sus peticiones eran salvadas en una colección de Cloud Firestore.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/tpdpM8Rggh8" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "1-5-esp") {
		document.getElementById('projectTitle').innerHTML = "Aplicación iRAP de Escritorio";
		document.getElementById('projectDetails').innerHTML = `<b>(Febrero 2021 - Mayo 2021): </b>
			Este proyecto se hizo en colaboración con el 'Instituto Mexicano del Transporte', una compañía 
			encargada de investigar para mejorar la seguridad vial. La aplicación provee una 
			alternativa para desplegar imágenes de un camino para ser evaluado y codificar ciertos parámetros 
			que se guardan en un archivo CSV y enviados a la evaluación iRAP, la cual dará eventualmente 
			una conclusión acerca de la seguridad del camino con una evaluación de hasta 5 estrellas.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/TEFCoderApp.PNG" 
			alt="TEFCoderApp">`;
	}
	else if(idcode == "1-6-esp") {
		document.getElementById('projectTitle').innerHTML = "Aplicación Web Urbank Exchange Velta";
		document.getElementById('projectDetails').innerHTML = `<b>(Junio 2021 - Agosto 2021): </b>
			Trabajé como desarrollador de software en la compañía Velta donde ayudé en el desarrollo de una 
			página que administra cuestiones respecto al intercambio de crypto monedas de inversionistas, así 
			como ayudar en el desarrollo de la navegación adecuada de la página, la base de datos para el registro 
			de usuarios y el protocolo de autenticación. La aplicación fue desarrollada usando los frameworks Django
			para el Back End y Bootstrap para el Front End. Largos tiempos de investigación fueron requeridos ya que
			este fue mi primer proyecto utilizando Django.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/urbhome.PNG" 
			alt="UrbankHome">`;
	}
	else if(idcode == "2-1-esp") {
		document.getElementById('projectTitle').innerHTML = "Juego 'Pong' Ultrasónico";
		document.getElementById('projectDetails').innerHTML = `<b>(Noviembre 2017): </b>
			Este proyecto consistió en recrear el clásico videojuego Pong en una pantalla de
			computadora; sin embargo, el juego fue procesado con una FPGA Nexys 3 y desplegado 
			en pantalla por un puerto VGA. Ambas raquetas eran controladas por dos sensores ultrasónicos 
			diferentes, la posición de las raquetas dependía de las lecturas de los sensores y los
			puntajes eran mostrados en los indicadores de la FPGA.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/fwJMlncWvzc" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-2-esp") {
		document.getElementById('projectTitle').innerHTML = "Adorno Navideño con Microcontrolador";
		document.getElementById('projectDetails').innerHTML = `<b>(Noviembre 2018): </b>
			Este proyecto buscó cubrir la mayoría de los temas respecto a microcontroladores vistos a lo largo
			del semestre. El proyecto consistió en un adorno navideño hecho con luces RGB que cambian colores 
			automáticamente con velocidad ajustable o al cubrir sensores ultrasónicos para apagar colores. El 
			microcontrolador ponía la canción de Jingle Bells y desplegaba un letrero en inglés que dice '¡Feliz 
			Navidad y Próspero Año Nuevo!'.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo"
			src="https://www.youtube.com/embed/7NAt_utkXAo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-3-esp") {
		document.getElementById('projectTitle').innerHTML = "Algoritmo Cifrador AES Rijndael";
		document.getElementById('projectDetails').innerHTML = `<b>(Mayo 2019 & Junio 2020): </b> 
			Este proyecto consistió en implementar el algoritmo AES Rijndael en un microcontrolador 
			(2019) que permite cifrar y decifrar cualquier tipo de archivo con ayuda de una llave. Una versión 
			más sencilla de este proyecto fue repetida en una FPGA Basys 3 para mensajes más cortos  
			introducidos a través de un software llamado Docklight (2020).`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/MBkR7mzTEqo" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-4-esp") {
		document.getElementById('projectTitle').innerHTML = "Juego 'Bat Racer' Capacitivo";
		document.getElementById('projectDetails').innerHTML = `<b>(Mayo 2019): </b>
			Este proyecto consistió en crear un videojuego en el que uno debe evadir obstáculos 
			y acumular puntos conforme el juego avanza. El juego era desplegado en una pantalla de Nokia 
			y el murciélago era controlado moviéndolo hacia arriba y abajo al tocar un par de placas de 
			metal que funcionaban como sensores capacitivos mientras que el microcontrolador ponía una versión 
			propia del tema principal del juego original Tetris.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/TDtBzA5wqBY" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-5-esp") {
		document.getElementById('projectTitle').innerHTML = "Clúster de Coche CVI";
		document.getElementById('projectDetails').innerHTML = `<b>(Octubre 2019): </b>
			Este proyecto consistió en crear un clúster usando LabWindows CVI que podía 
			reportar información real acerca de un vehículo mientras está conectado a una 
			computadora con un cable OBD. La información desplegada era velocidad, 
			RPMs, temperatura de refrigerante, posición de acelerador, presión del tanque,  
			tiempo transcurrido desde encendido, reporte de problemas y muchas más.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/cluster.JPG" 
			alt="CarCluster">`;
	}
	else if(idcode == "2-6-esp") {
		document.getElementById('projectTitle').innerHTML = "Cámara de Vigilancia Inteligente";
		document.getElementById('projectDetails').innerHTML = `<b>(Noviembre 2020): </b>
			Este proyecto consistió en crear una cámara usando Python y OpenCV que pudiera 
			tomar fotografías y grabar videos manualmente al presionar ciertos comandos 
			en el teclado de la computadora. Operaba automáticamente al grabar cuando se detecte 
			movimiento y tomar fotografías cuando se encontraba una cara humana de frente o perfil 
			en el cuadro capturado. Las imágenes y videos grabados eran salvados en una carpeta separada.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/V8WIRvl7tSg" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
	else if(idcode == "2-7-esp") {
		document.getElementById('projectTitle').innerHTML = "Aplicación Web 'Inventorizer'";
		document.getElementById('projectDetails').innerHTML = `<b>(Mayo - Junio 2021): </b>
			El propósito principal de este proyecto era implementar una aplicación web en la que usuarios 
			pudieran registrarse y autenticarse para archivar objetos, categorías y almacenes que ayudaran 
			a administrar inventarios personales. Esta aplicación se comunica con una base de datos 
			y realiza sus funciones con varios programas de PHP y consultas de SQL siguiendo estructuras MVC 
			para operar adecuadamente las funciones de CRUD (Acrónimo en inglés de Crear, Leer, Actualizar, 
			Borrar) sobre cualquier dato guardado en la base de datos.`;
		document.getElementById('projectMedia').innerHTML = `<img class="modalimg" src="resources/InventorizerDemo.PNG" 
			alt="InventorizerDemo">`;
	}
	else if(idcode == "2-8-esp") {
		document.getElementById('projectTitle').innerHTML = "Proyecto de Robótica 'Gary.exe'";
		document.getElementById('projectDetails').innerHTML = `<b>(Octubre - Noviembre 2021): </b>
			Este proyecto buscó construir un Agribot que depositara semillas en el suelo mientras pudiera 
			moverse en modo manual con un controlador joystick o mediante modo ROS utilizando una computadora
			remota y una red local para comunicaciones. El robot es capaz de seguir objetos cercanos y moverse de 
			forma semi-autónoma evitando obstáculos. Además, notifica a la computadora remota cuando el tanque se  
			queda sin semillas, pidiendo un relleno y que debe regresar a su base para obtener más semillas para el tanque.`;
		document.getElementById('projectMedia').innerHTML = `<iframe class="modalvideo" 
			src="https://www.youtube.com/embed/8QQ5aAXFx5M" frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>`;
	}
}