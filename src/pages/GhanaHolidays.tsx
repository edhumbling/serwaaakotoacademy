import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GhanaHolidays = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Ghana Public Holidays</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">Official Holidays in Ghana</h2>
              <p className="leading-relaxed text-gray-800">
                Ghana observes several public holidays throughout the year, including both national and religious holidays. 
                These holidays are important cultural and historical events that reflect Ghana's diverse heritage and values.
              </p>
              <p className="leading-relaxed text-gray-800 mt-4">
                Below is the official calendar of Ghana's public holidays. This calendar is maintained by Google and is always up-to-date 
                with the latest holiday information.
              </p>
            </section>
            
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="w-full overflow-hidden rounded-lg shadow-md" style={{ height: '600px' }}>
                <iframe 
                  src="https://calendar.google.com/calendar/u/0/embed?color=%2316a765&src=en.gh%23holiday@group.v.calendar.google.com&ctz=Africa/Accra&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH" 
                  style={{ border: '0' }} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  title="Ghana Public Holidays Calendar"
                ></iframe>
              </div>
            </section>
            
            <section className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-school-seaBlue">School Calendar</h2>
              <p className="leading-relaxed text-gray-800">
                At Serwaa Akoto Academy, we follow the official Ghana Education Service (GES) academic calendar, 
                which includes these public holidays as well as school-specific dates such as term beginnings and endings, 
                examination periods, and school events.
              </p>
              <p className="leading-relaxed text-gray-800 mt-4">
                Parents and students should note that while the school observes all national holidays, 
                there may be additional school-specific holidays or events throughout the academic year. 
                For the most up-to-date information on school-specific dates, please refer to our termly newsletters 
                or contact the school administration.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GhanaHolidays;
