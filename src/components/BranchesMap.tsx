'use client'; // يعمل على جهة العميل (React Leaflet)

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ===============================
// أيقونة Marker مخصصة
// ===============================
const customIcon = new L.Icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// ===============================
// بيانات الفروع (كلها)
// ===============================
type Branch = {
  id: number;
  name: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
};

const branches: Branch[] = [
  // ===== بنغازي (3 فروع) =====
  {
    id: 1,
    name: 'فرع قاريونس',
    city: 'بنغازي',
    address: 'محلات نادي الأهلي، قاريونس',
    lat: 32.108808,
    lng: 20.082395,
  },
  {
    id: 2,
    name: 'فرع الهواري',
    city: 'بنغازي',
    address: 'طريق النهر - الهواري (قرب مديرية الأمن)',
    lat: 32.089971,
    lng: 20.058,
  },
  {
    id: 3,
    name: 'فرع سوق المصرية',
    city: 'بنغازي',
    address: 'سوق المصرية',
    lat: 32.1159, // مؤقتة (مضبوطة بصريًا)
    lng: 20.0618, // مؤقتة
  },

  // ===== باقي المدن =====
  {
    id: 4,
    name: 'فرع عين زارة',
    city: 'طرابلس',
    address: 'عين زارة بعد الدبلوماسي مول',
    lat: 32.780774,
    lng: 13.260604,
  },
  {
    id: 5,
    name: 'فرع البيضاء',
    city: 'البيضاء',
    address: 'السوق الفوقي خلف التجيش شارع العيادة رقم 1',
    lat: 32.762222,
    lng: 21.755833,
  },
  {
    id: 6,
    name: 'فرع سرت',
    city: 'سرت',
    address: 'مقابل شارع 5 بالقرب من مفترق شارع دبي',
    lat: 31.206389,
    lng: 16.588056,
  },
  {
    id: 7,
    name: 'فرع طبرق',
    city: 'طبرق',
    address: 'شارع شاهر روحه',
    lat: 32.083611,
    lng: 23.976389,
  },
];

// ===============================
// دالة توزيع الفروع داخل نفس المدينة
// (علشان 3 فروع بنغازي يبانوا وما يركبوش)
// ===============================
const getPositionWithOffset = (
  branch: Branch,
  allBranches: Branch[]
): [number, number] => {
  const sameCity = allBranches.filter((b) => b.city === branch.city);
  const index = sameCity.findIndex((b) => b.id === branch.id);

  // إزاحة صغيرة جدًا ومتوازنة
  const step = 0.0018;
  const centeredIndex = index - (sameCity.length - 1) / 2;
  const offsetLng = centeredIndex * step;

  return [branch.lat, branch.lng + offsetLng];
};

// ===============================
// مكون الخريطة
// ===============================
const BranchesMap = () => {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/20">
      <MapContainer
        center={[32.108108, 20.081695]} // بنغازي كنقطة بداية
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {branches.map((branch) => {
          const position = getPositionWithOffset(branch, branches);

          return (
            <Marker
              key={branch.id}
              position={position}
              icon={customIcon}
            >
              <Popup>
                <div dir="rtl" className="text-right">
                  <strong>{branch.name}</strong>
                  <br />
                  {branch.city}
                  <br />
                  {branch.address}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default BranchesMap;
