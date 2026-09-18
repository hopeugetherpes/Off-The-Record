export type Drop = {
  id: string
  slug: string
  name: string
  type: string
  address: string
  city: string
  state: string
  country: string
  countryCode: string
  size: string
  date: string
  dateIso: string
  status: 'Working'
  note: string
  details: string[]
  coordinates: [number, number]
  format?: string
  url: string
}

export const drops: Drop[] = [
  {
    id: 'DD-2765',
    slug: '2765',
    name: 'White Cliffs of Conoy',
    type: 'USB drop',
    address: 'Northwest Lancaster County River Trail',
    city: 'Bainbridge',
    state: 'PA',
    country: 'United States',
    countryCode: 'US',
    size: '16 GB',
    date: '18 Aug 2026',
    dateIso: '2026-08-18',
    status: 'Working',
    note: 'Mounted behind a bench near the White Cliffs of Conoy on the Northwest Lancaster County River Trail.',
    details: [
      'The installation sits on a support behind a bench along the river trail.',
      'Approach on foot or by bicycle from a public park; the nearby private driveway is not an access route.',
    ],
    coordinates: [-76.6537, 40.0726],
    format: 'FAT32',
    url: '/db/2765',
  },
  {
    id: 'DD-2764',
    slug: '2764',
    name: 'USB128Go',
    type: 'USB drop',
    address: 'Public-space installation',
    city: 'Paris',
    state: '',
    country: 'France',
    countryCode: 'FR',
    size: '128 GB',
    date: '12 Aug 2026',
    dateIso: '2026-08-12',
    status: 'Working',
    note: 'A 128 GB public drop registered in Paris, France.',
    details: ['A high-capacity Off The Record installation available in public space in Paris.'],
    coordinates: [2.3522, 48.8566],
    url: '/db/2764',
  },
  {
    id: 'DD-2763',
    slug: '2763',
    name: 'unit',
    type: 'USB drop',
    address: 'Ainavillo 1962',
    city: 'Concepción',
    state: 'Concepción',
    country: 'Chile',
    countryCode: 'CL',
    size: '2 GB',
    date: '06 Aug 2026',
    dateIso: '2026-08-06',
    status: 'Working',
    note: 'A small urban drop described by its maker as a place outside time.',
    details: ['The maker describes the location as “a place lost in time”.'],
    coordinates: [-73.0498, -36.827],
    url: '/db/2763',
  },
  {
    id: 'DD-2762',
    slug: '2762',
    name: 'The Beeman Makes Good',
    type: 'USB drop',
    address: 'N Orange St & W High St',
    city: 'Carlisle',
    state: 'PA',
    country: 'United States',
    countryCode: 'US',
    size: '16 GB',
    date: '24 Jul 2026',
    dateIso: '2026-07-24',
    status: 'Working',
    note: 'Attached to a support pillar beside a pedestrian underpass in Carlisle.',
    details: [
      'The installation is reachable from the sidewalk at the PA-641 pedestrian underpass.',
      'It is fixed to a support pillar near the middle of the bridge.',
    ],
    coordinates: [-77.2082, 40.203],
    format: 'FAT32',
    url: '/db/2762',
  },
  {
    id: 'DD-2761',
    slug: '2761',
    name: 'Chaos Club by Sirius',
    type: 'Other',
    address: 'Community space',
    city: 'Belgrad',
    state: '',
    country: 'Serbia',
    countryCode: 'RS',
    size: '256 GB',
    date: '21 Jul 2026',
    dateIso: '2026-07-21',
    status: 'Working',
    note: 'A community-space drop connected through a short USB-C extension in Belgrad, Serbia.',
    details: [
      'This installation uses a compact SSD and a USB-C extension so phones, tablets and laptops can connect.',
      'Always eject or unmount the storage cleanly before disconnecting it.',
    ],
    coordinates: [20.4573, 44.7872],
    url: '/db/2761',
  },
  {
    id: 'DD-2760', slug: '2760', name: 'DC Lock your love', type: 'USB drop', address: '498 2nd St SW',
    city: 'Washington', state: 'DC', country: 'United States', countryCode: 'US', size: '64 GB',
    date: '22 Jun 2026', dateIso: '2026-06-22', status: 'Working',
    note: 'A 64 GB public installation in Washington, DC.', details: ['Registered near 2nd Street SW in Washington.'],
    coordinates: [-77.0091, 38.885], url: '/db/2760',
  },
  {
    id: 'DD-2759', slug: '2759', name: 'Rudolf5', type: 'USB drop', address: 'Rudolfstraße 5',
    city: 'Karlsruhe', state: 'Baden-Württemberg', country: 'Germany', countryCode: 'DE', size: '128 GB',
    date: '22 Jun 2026', dateIso: '2026-06-22', status: 'Working',
    note: 'A 128 GB installation on Rudolfstraße in Karlsruhe.', details: ['Registered in Karlsruhe, Germany.'],
    coordinates: [8.4037, 49.0069], url: '/db/2759',
  },
  {
    id: 'DD-2758', slug: '2758', name: 'Infinidrop☆', type: 'USB drop', address: 'Erlenstrasse 39',
    city: 'Basel', state: 'Basel-Stadt', country: 'Switzerland', countryCode: 'CH', size: '64 GB',
    date: '13 Jun 2026', dateIso: '2026-06-13', status: 'Working',
    note: 'A 64 GB public installation in Basel.', details: ['Registered on Erlenstrasse in Basel.'],
    coordinates: [7.5886, 47.5596], url: '/db/2758',
  },
  {
    id: 'DD-2757', slug: '2757', name: "C'mon, Dover", type: 'USB drop', address: '2480 W Canal Rd',
    city: 'Dover', state: 'PA', country: 'United States', countryCode: 'US', size: '16 GB',
    date: '11 Jun 2026', dateIso: '2026-06-11', status: 'Working',
    note: 'A 16 GB installation in Dover, Pennsylvania.', details: ['Registered on West Canal Road in Dover.'],
    coordinates: [-76.85, 40.006], url: '/db/2757',
  },
  {
    id: 'DD-2756', slug: '2756', name: 'DD-B170-87E9-VDT', type: 'USB drop', address: 'Chemin de la Chapelle',
    city: 'Couvet', state: 'Neuchâtel', country: 'Switzerland', countryCode: 'CH', size: '14 GB',
    date: '06 Jun 2026', dateIso: '2026-06-06', status: 'Working',
    note: 'A 14 GB installation in Couvet, Neuchâtel.', details: ['Registered near Chemin de la Chapelle.'],
    coordinates: [6.634, 46.926], url: '/db/2756',
  },
  {
    id: 'DD-2755', slug: '2755', name: 'The Old South Broad Street Bridge Overpass', type: 'USB drop', address: '8th St',
    city: 'Lebanon', state: 'PA', country: 'United States', countryCode: 'US', size: '16 GB',
    date: '17 Apr 2026', dateIso: '2026-04-17', status: 'Working',
    note: 'A 16 GB installation by a bridge overpass in Lebanon, Pennsylvania.', details: ['Registered near 8th Street.'],
    coordinates: [-76.411, 40.34], url: '/db/2755',
  },
  {
    id: 'DD-2754', slug: '2754', name: 'Dornbirn Bridge', type: 'USB drop', address: 'Kanalgasse',
    city: 'Dornbirn', state: 'Vorarlberg', country: 'Austria', countryCode: 'AT', size: '16 GB',
    date: '15 Apr 2026', dateIso: '2026-04-15', status: 'Working',
    note: 'A 16 GB installation in Dornbirn, Austria.', details: ['Registered near Kanalgasse in Vorarlberg.'],
    coordinates: [9.7438, 47.4125], url: '/db/2754',
  },
  {
    id: 'DD-2753', slug: '2753', name: 'A fine fishing hole!', type: 'USB drop', address: '3198–3192 Safe Harbor Rd',
    city: 'Conestoga', state: 'PA', country: 'United States', countryCode: 'US', size: '32 GB',
    date: '05 Mar 2026', dateIso: '2026-03-05', status: 'Working',
    note: 'A 32 GB installation near Safe Harbor Road in Conestoga.', details: ['Registered in Lancaster County, Pennsylvania.'],
    coordinates: [-76.346, 39.94], url: '/db/2753',
  },
  {
    id: 'DD-2752', slug: '2752', name: 'THE BABY, THE HIT, THE COVEN RETREAT', type: 'USB drop', address: 'Rue de la Source 49',
    city: 'Saint-Gilles', state: 'Brussels', country: 'Belgium', countryCode: 'BE', size: '8 GB',
    date: '14 Feb 2026', dateIso: '2026-02-14', status: 'Working',
    note: 'An 8 GB installation in Saint-Gilles, Brussels.', details: ['Registered on Rue de la Source.'],
    coordinates: [4.345, 50.826], url: '/db/2752',
  },
  {
    id: 'DD-2751', slug: '2751', name: 'Flx-drop-02', type: 'USB drop', address: 'Hüningerstrasse 41',
    city: 'Basel', state: 'Basel-Stadt', country: 'Switzerland', countryCode: 'CH', size: '14 GB',
    date: '02 Feb 2026', dateIso: '2026-02-02', status: 'Working',
    note: 'A 14 GB installation in Basel.', details: ['Registered on Hüningerstrasse in Basel.'],
    coordinates: [7.5886, 47.5596], url: '/db/2751',
  },
]

export const featuredDrops = drops.slice(0, 5)

export function getDrop(slug: string) {
  return drops.find((drop) => drop.slug === slug)
}
