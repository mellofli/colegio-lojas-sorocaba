/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LodgeData } from '../data/lojas';
import { ExternalLink } from 'lucide-react';

// Fix for default marker icon in leaflet with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapaLojasProps {
  lojas: LodgeData[];
}

export default function MapaLojas({ lojas }: MapaLojasProps) {
  // Center map in the middle of the Sorocaba region
  const center: [number, number] = [-23.5015, -47.4612];
  const zoom = 10;

  const openRoute = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <div className="h-[500px] w-full border border-white/10 relative z-0">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lojas.map((loja) => (
          <Marker key={loja.id} position={[loja.lat, loja.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-masonic-blue text-sm mb-1">{loja.name} nº {loja.number}</h3>
                <p className="text-xs text-slate-600 mb-2">{loja.address}, {loja.city}</p>
                <button
                  onClick={() => openRoute(loja.lat, loja.lng)}
                  className="flex items-center gap-2 bg-masonic-gold text-masonic-blue px-3 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-masonic-gold-dark transition-all w-full justify-center"
                >
                  <ExternalLink size={12} />
                  Abrir Rota
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
