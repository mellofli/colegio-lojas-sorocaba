/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, MapPin, User, ChevronRight, BookOpen, Phone } from 'lucide-react';
import { useState } from 'react';
import type { Lodge, NewsItem, EventItem, Speaker } from '../constants';
import { isPastEvent } from '../utils';

export function NewsCard({ item }: { item: NewsItem }) {
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.png', '.webp', '.jpg', '.jpeg', '.bmp', '.svg'];
  const [imageError, setImageError] = useState(false);

  const getImagePath = () => {
    if (!item.image) return null;
    if (item.image.startsWith('http')) return item.image;
    if (imageError) return null;
    return `${item.image}${extensions[extIndex]}`;
  };

  const imagePath = getImagePath();

  return (
    <div className="masonic-card group">
      <div className="h-56 md:h-48 bg-white/5 overflow-hidden relative">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            onError={() => {
              if (extIndex < extensions.length - 1) {
                setExtIndex(prev => prev + 1);
              } else {
                setImageError(true);
              }
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-masonic-blue/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
            <Landmark className="text-white/10 w-12 h-12" />
          </div>
        )}
        <div className="absolute top-4 left-4 bg-masonic-gold text-masonic-blue text-[10px] uppercase tracking-widest font-bold px-2 py-1">
          Notícia
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-medium">
          <Calendar size={14} className="text-masonic-gold" />
          <span>{item.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-masonic-gold transition-colors text-white uppercase tracking-tight">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {item.excerpt}
        </p>
        <button className="flex items-center gap-2 text-masonic-gold text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
          Ler Mais <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.jpg', '.webp', '.jpeg', '.bmp', '.png', '.svg'];
  const [imageError, setImageError] = useState(false);

  const getImagePath = () => {
    if (!event.image) return null;
    if (event.image.startsWith('http')) return event.image;
    if (imageError) return null;
    return `${event.image}${extensions[extIndex]}`;
  };

  const ended = isPastEvent(event.date);
  const imagePath = getImagePath();

  return (
    <div className={`flex border border-white/10 overflow-hidden hover:shadow-md hover:border-masonic-gold/30 transition-all min-h-[100px] ${ended ? 'bg-white/[0.02] opacity-70 grayscale-[0.5]' : 'bg-white/5'}`}>
      <div className="text-center min-w-[75px] flex flex-col items-center justify-center py-4 px-2 bg-black/40 border-r border-white/5 shrink-0">
        <p className={`text-2xl font-bold font-serif leading-none ${ended ? 'text-slate-500' : 'text-masonic-gold'}`}>{event.date.split(' ')[0].split('/')[0]}</p>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
          {event.date.includes('/') ? event.date.split('/')[1] : event.date.split(' ')[2]}
        </p>
      </div>
      {imagePath && (
        <div className="w-24 sm:w-24 overflow-hidden shrink-0 border-r border-white/5">
          <img 
            src={imagePath} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-50" 
            onError={() => {
              if (extIndex < extensions.length - 1) {
                setExtIndex(prev => prev + 1);
              } else {
                setImageError(true);
              }
            }}
          />
        </div>
      )}
      <div className="flex-1 p-4 flex flex-col justify-center relative">
        <div className="flex items-center gap-2 mb-1">
           <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 ${
             event.type === 'Ritualística' ? 'bg-masonic-gold text-masonic-blue' :
             event.type === 'Social' ? 'bg-green-900 text-green-100' :
             event.type === 'Palestra' ? 'bg-white/10 text-white border border-white/20' :
             'bg-white/5 text-slate-300'
           }`}>
            {event.type}
          </span>
          {ended && (
            <span className="text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 bg-red-600/80 text-white">
              ENCERRADO
            </span>
          )}
        </div>
        <h4 className={`text-sm font-bold uppercase leading-snug ${ended ? 'text-slate-400' : 'text-slate-200'}`}>{event.title}</h4>
        <p className="text-[11px] text-slate-400 italic mt-1 line-clamp-1">{event.location}</p>
      </div>
    </div>
  );
}

export function SpeakerCard({ speaker, onSelect }: { speaker: Speaker, onSelect?: (lecture: string) => void }) {
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.jpg', '.webp', '.jpeg', '.bmp', '.png', '.svg'];
  const speakerImg = speaker.image || `/assets/speakers/${speaker.id}${extensions[extIndex]}`;

  return (
    <div className="bg-white border border-slate-200 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-20 h-20 border-2 border-masonic-blue flex items-center justify-center text-masonic-blue shrink-0 overflow-hidden">
          {extIndex < extensions.length ? (
            <img 
              src={speakerImg} 
              alt={speaker.name} 
              className="w-full h-full object-cover"
              onError={() => setExtIndex(prev => prev + 1)}
            />
          ) : (
            <div className="italic text-2xl font-serif">
              {speaker.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="masonic-sidebar-title-gold mb-4 rounded-sm">
            {speaker.name}
          </div>
          <p className="text-[10px] font-bold text-masonic-blue uppercase tracking-[0.2em] mb-4">{speaker.title}</p>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed bg-slate-50 p-4 border-l-2 border-masonic-blue">{speaker.bio}</p>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">
              Palestras de Instrução Disponíveis
            </h4>
            <div className="space-y-2">
              {speaker.lectures.map((lecture, idx) => (
                <div 
                  key={idx} 
                  className="group bg-slate-50 p-4 border-l-2 border-transparent hover:border-masonic-blue hover:bg-white hover:shadow-md transition-all flex items-center justify-between cursor-pointer"
                  onClick={() => onSelect?.(lecture)}
                >
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{lecture}</span>
                  <button className="bg-masonic-blue text-white text-[9px] font-bold px-3 py-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    SOLICITAR
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LodgeCard({ lodge }: { lodge: Lodge }) {
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.png', '.webp', '.jpg', '.jpeg', '.bmp', '.svg'];
  const lodgeImg = lodge.image || `/assets/lodges/${lodge.id}${extensions[extIndex]}`;

  return (
    <div className="bg-white/5 p-6 rounded-none border border-white/10 hover:border-masonic-gold transition-colors group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4 h-22 shrink-0">
        <div className="flex-1 mr-2">
          <h3 className="text-sm font-bold font-serif group-hover:text-masonic-gold transition-colors text-white uppercase tracking-tight line-clamp-2">A.R.L.S. {lodge.name}</h3>
          <p className="text-masonic-gold font-bold text-xs uppercase">Nº {lodge.number}</p>
        </div>
        <div className="w-22 h-22 bg-white/5 p-1 flex items-center justify-center text-masonic-gold border border-white/5 shrink-0 overflow-hidden group-hover:scale-110 transition-transform">
          {extIndex < extensions.length ? (
            <img 
              src={lodgeImg} 
              alt={lodge.name} 
              className="w-full h-full object-contain"
              onError={() => setExtIndex(prev => prev + 1)}
            />
          ) : (
            <Landmark size={28} />
          )}
        </div>
      </div>
      <div className="space-y-3 text-sm text-slate-400 flex-1">
        <div className="flex items-start gap-2">
          <MapPin size={16} className="text-masonic-gold shrink-0 mt-0.5" />
          <span className="line-clamp-2 leading-snug">{lodge.address}, {lodge.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-masonic-gold shrink-0" />
          <span className="truncate">Sessões: <span className="font-semibold text-slate-200">{lodge.meetingDay}</span></span>
        </div>
        <div className="flex items-center gap-2">
          <User size={16} className="text-masonic-gold shrink-0" />
          <span className="truncate">Rito: <span className="font-semibold text-slate-200">{lodge.ritual}</span></span>
        </div>
        {lodge.phone && (
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-masonic-gold shrink-0" />
            <span className="font-semibold text-slate-200 truncate">{lodge.phone}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Landmark(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7 12 2" />
    </svg>
  );
}
