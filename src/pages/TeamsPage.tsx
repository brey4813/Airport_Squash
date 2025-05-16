import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const TeamsPage: React.FC = () => {
  const { t } = useTranslation();

  const bundesligaTeams = [
    { pos: 1, team: 'Paderborn SC 1', played: 10, won: 8, lost: 2, setsFor: 28, setsAgainst: 12, points: 16 },
    { pos: 2, team: 'Sportwerk Hamburg 1', played: 10, won: 7, lost: 3, setsFor: 26, setsAgainst: 14, points: 14 },
    { pos: 3, team: 'Bremer SC 1', played: 10, won: 6, lost: 4, setsFor: 24, setsAgainst: 16, points: 12 },
    { pos: 4, team: 'SC Hasbergen 1', played: 10, won: 5, lost: 5, setsFor: 20, setsAgainst: 20, points: 10 },
    { pos: 5, team: 'Airport Squash eV 1', played: 10, won: 3, lost: 7, setsFor: 14, setsAgainst: 26, points: 6 },
    { pos: 6, team: 'Caballero Kaifu 1', played: 10, won: 1, lost: 9, setsFor: 8, setsAgainst: 32, points: 2 }
  ];

  return (
    <>
      <PageHeader 
        title={t('teams.title', 'Our Teams')}
        description={t('teams.description', 'Meet our competitive teams')}
        imageSrc="https://i.imgur.com/iFx3mE3.jpeg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Trophy className="w-8 h-8 text-red-600 mr-4" />
              <h2 className="text-3xl font-bold">{t('teams.bundesliga.title', 'Bundesliga Team')}</h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.position', 'Pos')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.team', 'Team')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.played', 'PJ')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.won', 'G')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.lost', 'P')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.setsFor', 'Sets+')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.setsAgainst', 'Sets-')}</th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('teams.table.points', 'Points')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {bundesligaTeams.map((team) => (
                    <tr 
                      key={team.pos}
                      className={team.team === 'Airport Squash eV 1' ? 'bg-red-50' : 'hover:bg-gray-50'}
                    >
                      <td className="px-6 py-4">{team.pos}</td>
                      <td className="px-6 py-4 font-medium">{team.team}</td>
                      <td className="px-6 py-4">{team.played}</td>
                      <td className="px-6 py-4">{team.won}</td>
                      <td className="px-6 py-4">{team.lost}</td>
                      <td className="px-6 py-4">{team.setsFor}</td>
                      <td className="px-6 py-4">{team.setsAgainst}</td>
                      <td className="px-6 py-4 font-semibold">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <iframe 
                src="https://www.squash-liga.com/bundesliga/bundesliga-nord/spieltag.html" 
                className="w-full h-[600px] rounded-lg shadow-lg"
                title={t('teams.schedule.title', 'Bundesliga Schedule')}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamsPage;