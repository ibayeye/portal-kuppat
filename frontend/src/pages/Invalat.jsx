import React from 'react';
import speakerNS from '../assets/NS-038-5.jpg';

const products = [
  {id: 1, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 2, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 3, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 4, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 5, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 6, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 7, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  {id: 8, name: 'Speaker Nubwo NS-038', href: '#', imageUrl: speakerNS, imageAlt: "Front of men's Basic Tee in black.", color: 'Hitam'},
  // More products...
];

export default function InvalatPages() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Daftar Inventaris Alat Kuppat</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-40 mt-8">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
