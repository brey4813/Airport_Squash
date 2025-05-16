import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const VirtualTourPage: React.FC = () => {
  const courts = [
    {
      id: 1,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=21&y=-180&p=5&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 2,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=23&y=-183&p=4&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 3,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=25&y=-540&p=5&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 4,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=23&y=-183&p=4&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 5,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=5"
    },
    {
      id: 6,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=25&y=-540&p=5&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 7,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=19&y=-1081&p=5&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    },
    {
      id: 8,
      image: "https://i.imgur.com/TgIHUTk.jpeg",
      tourUrl: "https://tour.keepeyeonball.com/Tour/d77705fd-24dd-44a1-9f12-15bf3648036b/4K?sc=15&y=-1077&p=5&tz=100&r=1.22;0.23&l=0.00;0.00&mz=-23.63&d=0&m=0"
    }
  ];

  const [selectedCourt, setSelectedCourt] = React.useState(courts[0]);

  return (
    <>
      <PageHeader 
        title="Virtual Tour"
        description="Explore our professional squash courts in 360°"
        imageSrc="https://i.ibb.co/Q7fVJhFQ/foto-19.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courts.map((court) => (
              <motion.div 
                key={court.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  selectedCourt.id === court.id ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setSelectedCourt(court)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src={court.image} 
                  alt={`Court ${court.id}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Court {court.id}</h3>
                  <p className="text-gray-600 mt-2">Click to view 360° tour</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-gray-50 border-b">
              <h2 className="text-2xl font-bold">Court {selectedCourt.id} - 360° Tour</h2>
            </div>
            <iframe 
              src={selectedCourt.tourUrl}
              className="w-full h-[600px]"
              title={`Court ${selectedCourt.id} Virtual Tour`}
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VirtualTourPage;