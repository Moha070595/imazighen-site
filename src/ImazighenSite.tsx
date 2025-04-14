
import React from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";


import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export default function ImazighenSite() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-gray-600">{t('subtitle')}</p>
        <div className="flex justify-center gap-2 mt-4">
          <Button onClick={() => changeLanguage('fr')}>FR</Button>
          <Button onClick={() => changeLanguage('ar')}>AR</Button>
          <Button onClick={() => changeLanguage('tz')}>TZ</Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('origin_title')}</h2>
            <p>{t('origin_text')}</p>
            <img src="https://tse4.mm.bing.net/th?id=OIP.6fRq0Ww492-mqzwjXEru0QHaFQ&pid=Api" alt="Carte Tamazgha" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('language_title')}</h2>
            <p>{t('language_text')}</p>
            <img src="https://tse3.mm.bing.net/th?id=OIP.kAZV3HZxyi3IhuIRFwJYrwHaKl&pid=Api" alt="Alphabet Tifinagh" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('culture_title')}</h2>
            <p>{t('culture_text')}</p>
            <img src="https://tse3.mm.bing.net/th?id=OIP.FAKZt80IhocPyveLx-4TKAHaF-&pid=Api" alt="Fête Yennayer" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('spirituality_title')}</h2>
            <p>{t('spirituality_text')}</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Soufisme_marocain_-_Moussem.jpg/640px-Soufisme_marocain_-_Moussem.jpg" alt="Soufisme marocain" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('social_title')}</h2>
            <p>{t('social_text')}</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tajmaat_kabylie.jpg/640px-Tajmaat_kabylie.jpg" alt="Tajmaat en Kabylie" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('resistance_title')}</h2>
            <p>{t('resistance_text')}</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Abd_el-Krim.jpg/640px-Abd_el-Krim.jpg" alt="Abd el-Krim" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('touareg_title')}</h2>
            <p>{t('touareg_text')}</p>
            <img src="https://tse4.mm.bing.net/th?id=OIP.RILMcoAyBQU3iI5eE573lAHaFh&pid=Api" alt="Touareg dans le désert" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">{t('modernity_title')}</h2>
            <p>{t('modernity_text')}</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Drapeau_amazigh.svg/640px-Drapeau_amazigh.svg.png" alt="Drapeau amazigh" className="mt-4 rounded-xl"/>
          </CardContent>
        </Card>
      </section>

      <motion.section className="mt-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold mb-4">{t('more_info')}</h2>
        <a href="https://www.youtube.com/watch?v=5c_PdanDQKc" target="_blank" rel="noopener noreferrer">
          <Button>{t('watch_doc')}</Button>
        </a>
      </motion.section>
    </div>
  );
}
