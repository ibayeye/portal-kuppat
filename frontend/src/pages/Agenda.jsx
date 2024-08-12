import euroImage from '../assets/euro2024.jpeg'
import copaImage from '../assets/copa.jpeg'


import umbulImage from '../assets/umbul.jpg'
import dekorasiImage from '../assets/dekorasi.jpg'
import donasiImage from '../assets/donasi.jpeg'

const nobar = [
  {name: 'Nobar Euro 2024', description: 'Lokasi Beskem Kuppat', imageSrc: euroImage, imageAlt: '', href: '#'},
  {name: 'Nobar Copa America 2024', description: 'Lokasi Beskem Kuppat', imageSrc: copaImage, imageAlt: '', href: '#'},
]
const agustusan = [
  {name: 'Pasang Umbul Umbul', description: 'Jalan Margamulya', imageSrc: umbulImage, imageAlt: '', href: '#'},
  {name: 'Persiapan Pawai', description: 'Halaman Kontrakan Pak Lili', imageSrc: dekorasiImage, imageAlt: '', href: '#'},
  {name: 'Sumbangan Agustusan', description: 'Wilayah RT 04 RW 02', imageSrc: donasiImage, imageAlt: '', href: '#'},
]

export default function Example() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Daftar Agenda</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-6">
          <h2 className="text-2xl font-bold text-gray-900">Nobar Sepak Bola</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {nobar.map((nobar) => (
              <div key={nobar.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={nobar.imageSrc}
                    alt={nobar.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={nobar.href}>
                    <span className="absolute inset-0" />
                    {nobar.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{nobar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-6">
          <h2 className="text-2xl font-bold text-gray-900">Agustusan</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {agustusan.map((agustusan) => (
              <div key={agustusan.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={agustusan.imageSrc}
                    alt={agustusan.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={agustusan.href}>
                    <span className="absolute inset-0" />
                    {agustusan.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{agustusan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
