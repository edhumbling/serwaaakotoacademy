import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const StemResources = () => {
  // CSS for the flashing gradient links
  const gradientLinkClass = "font-medium text-transparent bg-clip-text bg-gradient-to-r from-school-seaBlue via-school-green to-school-yellow animate-gradient-flash hover:underline";

  // STEM Resources data
  const stemWebsites = [
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Sheppard Software", url: "https://www.sheppardsoftware.com/" },
    { name: "Zooniverse", url: "https://www.zooniverse.org/" },
    { name: "LearnToMod", url: "https://www.learntomod.com/" },
    { name: "Lego Mindstorms", url: "https://www.lego.com/en-us/themes/mindstorms" },
    { name: "Women@NASA", url: "https://women.nasa.gov/" },
    { name: "CanTEEN", url: "https://www.canteengirl.org/" },
    { name: "Engineer Girl!", url: "https://www.engineergirl.org/" },
    { name: "Engineer Your Life", url: "https://www.engineeryourlife.org/" },
    { name: "For Girls in Science", url: "https://www.forgirlsinscience.org/" },
    { name: "Girl Scouts STEM Program", url: "https://www.girlscouts.org/en/about-girl-scouts/girl-scouts-and-stem.html" },
    { name: "Society of Women Engineers (SWE) K-12 Outreach", url: "https://swe.org/k-12-outreach/" },
    { name: "G2O: Generating Girls Opportunities", url: "https://www.cwealf.org/g2o/" },
    { name: "The Big Brain Theory – Discovery Channel", url: "https://www.discovery.com/shows/the-big-brain-theory" },
    { name: "Bill Nye the Science Guy", url: "https://billnye.com/" },
    { name: "SciJinks", url: "https://scijinks.gov/" },
    { name: "MythBusters – Discovery Channel", url: "https://www.discovery.com/shows/mythbusters" },
    { name: "Scratch", url: "https://scratch.mit.edu/" },
    { name: "Funology", url: "https://www.funology.com/" },
    { name: "Helping Your Child Learn Mathematics", url: "https://www2.ed.gov/parents/academic/help/math/index.html" },
    { name: "NASA Kids' Club", url: "https://www.nasa.gov/kidsclub/index.html" },
    { name: "NASA Space Place", url: "https://spaceplace.nasa.gov/" },
    { name: "TechRocket", url: "https://www.techrocket.com/" },
    { name: "Arrick Robotics", url: "http://www.arrickrobotics.com/" },
    { name: "Codeacademy", url: "https://www.codecademy.com/" },
    { name: "DiscoverE", url: "https://www.discovere.org/" },
    { name: "Student Science", url: "https://www.sciencenews.org/student-science" },
    { name: "Code.org", url: "https://code.org/" },
    { name: "Exploratorium", url: "https://www.exploratorium.edu/" },
    { name: "How Stuff Works", url: "https://www.howstuffworks.com/" },
    { name: "NASA Education for Students", url: "https://www.nasa.gov/stem/" },
    { name: "NASA Science, Engineering, Mathematics and Aerospace Academy (SEMAA)", url: "https://www.nasa.gov/offices/education/programs/national/semaa/home/index.html" },
    { name: "NOVA", url: "https://www.pbs.org/wgbh/nova/" },
    { name: "Science Buddies", url: "https://www.sciencebuddies.org/" },
    { name: "Tynker", url: "https://www.tynker.com/" }
  ];

  const governmentInitiatives = [
    { name: "Educate to Innovate", url: "https://obamawhitehouse.archives.gov/issues/education/k-12/educate-innovate" },
    { name: "Women in STEM", url: "https://www.whitehouse.gov/ostp/women-in-stem/" }
  ];

  const scienceGamesApps = [
    { name: "Hopscotch (Make your own games)", url: "https://www.gethopscotch.com/" },
    { name: "Virtual Frog Dissection", url: "https://frogdissection.com/" },
    { name: "Solar System for iPad", url: "https://apps.apple.com/us/app/solar-system-for-ipad/id406795422" },
    { name: "National Geographic Apps", url: "https://www.nationalgeographic.com/apps/" },
    { name: "Algebra Touch App", url: "https://apps.apple.com/us/app/algebra-touch/id384354262" },
    { name: "Auditorium: The Online Experience", url: "https://www.cipherprime.com/games/auditorium/" },
    { name: "Minecraft", url: "https://www.minecraft.net/" },
    { name: "Mathemagics Mental Math Tricks", url: "https://apps.apple.com/us/app/mathemagics-mental-math-tricks/id306586847" },
    { name: "Quantum Conundrum", url: "https://store.steampowered.com/app/200010/Quantum_Conundrum/" },
    { name: "Robots for iPad App", url: "https://apps.apple.com/us/app/robots-for-ipad/id566581917" },
    { name: "You Can Do the Rubik's Cube", url: "https://www.youcandothecube.com/" },
    { name: "Kinectic City", url: "https://www.kineticcity.com/" },
    { name: "Move the Turtle: Programming for Kids App", url: "https://apps.apple.com/us/app/move-the-turtle-programming-for-kids/id509013878" },
    { name: "Robot Turtles", url: "https://www.thinkfun.com/products/robot-turtles/" }
  ];

  const mathGamesApps = [
    { name: "Cool Math Games", url: "https://www.coolmath.com/" },
    { name: "Geometry Quest App", url: "https://apps.apple.com/us/app/geometry-quest/id609252845" },
    { name: "Math Blaster", url: "https://www.mathblaster.com/" },
    { name: "Mystery Math Town", url: "https://apps.apple.com/us/app/mystery-math-town/id619404402" }
  ];

  const stemCamps = [
    { name: "Camp Reach", url: "https://www.wpi.edu/academics/pre-collegiate/summer-programs/camp-reach" },
    { name: "Girls' Adventures in Mathematics, Engineering, and Science (G.A.M.E.S.)", url: "https://games.grainger.illinois.edu/" },
    { name: "Students with Potential and Interest, Considering Engineering (S.P.I.C.E.)", url: "https://eng.umd.edu/k12/spice" },
    { name: "iD Game Design & Development Academy", url: "https://www.idtech.com/courses/game-design-development" },
    { name: "Science and Engineering Apprenticeship Program (SEAP)", url: "https://www.navsea.navy.mil/Home/Warfare-Centers/STEM/SEAP/" },
    { name: "Camp Euclid: A Mathematics Research Camp", url: "https://euclidlab.org/camp-euclid" },
    { name: "Engineering Summer Camps", url: "https://www.engineeringedu.com/store/index.php?route=information/information&information_id=8" },
    { name: "Physics Wonder Girls at Indiana Wesleyan University", url: "https://www.indwes.edu/undergraduate/division-of-natural-sciences/physics-wonder-girls/" },
    { name: "Zero Robotics Middle School Summer Program", url: "https://zerorobotics.mit.edu/" },
    { name: "Camp Invention", url: "https://www.invent.org/programs/camp-invention" },
    { name: "Destination Science Camp", url: "https://destinationscience.org/" },
    { name: "Engineering for Kids", url: "https://www.engineeringforkids.com/" },
    { name: "Science Explorers", url: "https://scienceexplorers.com/" },
    { name: "Youth Digital Summer Camps", url: "https://www.idtech.com/" },
    { name: "CoderDojo", url: "https://coderdojo.com/" }
  ];

  const books = [
    { name: "Learn to Program with Scratch: A Visual Introduction to Programming with Games, Art, Science, and Math", url: "https://www.amazon.com/Learn-Program-Scratch-Introduction-Programming/dp/1593275439/" },
    { name: "JavaScript for Kids (A Playful Introduction to Programming)", url: "https://www.amazon.com/JavaScript-Kids-Playful-Introduction-Programming/dp/1593274084/" },
    { name: "Hello World! (Computer Programming for Kids and Other Beginners)", url: "https://www.amazon.com/Hello-World-Computer-Programming-Beginners/dp/1617290920/" },
    { name: "Bossy (Online Startups for Kids and Teens)", url: "https://www.amazon.com/Bossy-Online-Startups-Kids-Teens/dp/1974078639/" },
    { name: "Python for Kids (A Playful Introduction to Programming)", url: "https://www.amazon.com/Python-Kids-Playful-Introduction-Programming/dp/1593274076/" },
    { name: "Head First Software Development", url: "https://www.amazon.com/Head-First-Software-Development-Learners/dp/0596527357/" }
  ];

  const teachersEducators = [
    { name: "Nano Science & Engineering Outreach Education Classroom Program", url: "https://www.nnci.net/education-outreach" },
    { name: "Lynda", url: "https://www.linkedin.com/learning/" },
    { name: "Code School", url: "https://www.pluralsight.com/codeschool" },
    { name: "Pluralsight", url: "https://www.pluralsight.com/" }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">STEM Resources For Serwaa Akoto Academy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">What is STEM?</h2>
              <p className="leading-relaxed text-gray-800">
                STEM stands for Science, Technology, Engineering, and Mathematics. It is an educational approach that integrates these four disciplines to promote critical thinking, problem-solving, and innovation skills among students.
              </p>
              <p className="leading-relaxed text-gray-800 mt-4">
                The relevance of STEM for kids is multifaceted and crucial in today's rapidly changing world. Here are some key reasons why STEM education is important for children:
              </p>
              <ol className="list-decimal pl-6 space-y-4 mt-4">
                <li className="text-gray-800">
                  <strong>Fostering curiosity and exploration:</strong> STEM activities encourage children to ask questions, explore their surroundings, and develop a deep understanding of the world around them. This cultivates a natural curiosity and a love for learning from an early age.
                </li>
                <li className="text-gray-800">
                  <strong>Developing problem-solving skills:</strong> STEM education emphasizes hands-on learning experiences that challenge children to think critically, analyze problems, and devise creative solutions. These problem-solving skills are invaluable in all aspects of life.
                </li>
                <li className="text-gray-800">
                  <strong>Preparing for future careers:</strong> Many of the fastest-growing and highest-paying jobs are in STEM fields. By introducing STEM concepts early on, children can develop an interest and aptitude for these fields, opening up a wide range of career opportunities in the future.
                </li>
                <li className="text-gray-800">
                  <strong>Promoting innovation and creativity:</strong> STEM activities often involve designing, building, and experimenting, which fosters creativity and innovative thinking. Children learn to think "outside the box" and develop the ability to approach challenges from different angles.
                </li>
                <li className="text-gray-800">
                  <strong>Enhancing logical and analytical thinking:</strong> STEM subjects, particularly mathematics and science, require logical and analytical thinking skills. By engaging in STEM activities, children strengthen these skills, which are essential for academic success and real-world applications. STEM projects can be challenging, but the process of overcoming obstacles and achieving success instills a sense of confidence and perseverance in children. They learn the value of persistence and resilience in the face of setbacks.
                </li>
              </ol>
              <p className="leading-relaxed text-gray-800 mt-4">
                By introducing STEM education at an early age, children develop a strong foundation in these critical areas, setting them up for success in an increasingly technology-driven and innovation-focused world. STEM education not only equips children with valuable skills but also nurtures their innate curiosity and fosters a lifelong love for learning and exploration.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">A Comprehensive list of STEM resources for Serwaa Akoto Academy</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Cool STEM Websites</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {stemWebsites.map((site, index) => (
                      <li key={index} className="mb-1">
                        <a href={site.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {site.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Government STEM Initiatives</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {governmentInitiatives.map((initiative, index) => (
                      <li key={index} className="mb-1">
                        <a href={initiative.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {initiative.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Science Games and Apps</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {scienceGamesApps.map((app, index) => (
                      <li key={index} className="mb-1">
                        <a href={app.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {app.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Math Games and Apps</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {mathGamesApps.map((app, index) => (
                      <li key={index} className="mb-1">
                        <a href={app.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {app.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">STEM Camps and Programs</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {stemCamps.map((camp, index) => (
                      <li key={index} className="mb-1">
                        <a href={camp.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {camp.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Books</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {books.map((book, index) => (
                      <li key={index} className="mb-1">
                        <a href={book.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {book.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-school-green">Teachers/Educators</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {teachersEducators.map((resource, index) => (
                      <li key={index} className="mb-1">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className={gradientLinkClass}>
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StemResources;
