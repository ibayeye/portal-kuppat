import React from "react";
import iqbalImage from "../assets/ibay.jpg";
import emonImage from "../assets/emon.jpg";
import budiImage from "../assets/budi.jpg";
import budi2Image from "../assets/budi2.jpg";
import jajangImage from "../assets/jajang.jpg";
import gilangImage from "../assets/gilang.jpg";
import ejenImage from "../assets/ejen.jpg";
import udanImage from "../assets/udan.jpg";
import nanoImage from "../assets/nano.jpg";
import { FaInstagram } from "react-icons/fa";
import Map from "../components/layout/Map";

const people = [
  { name: "Muhamad Iqbal Ramadan", role: "Developer", imageUrl: iqbalImage, sosmed: FaInstagram },
  { name: "Firman Mulya Nugraha", role: "Penghuni Bes", imageUrl: emonImage, sosmed: FaInstagram },
  { name: "Budi Munawar Rahman", role: "Penghuni Bes", imageUrl: budiImage, sosmed: FaInstagram },
  { name: "Moch. Gilang", role: "Penghuni Bes", imageUrl: jajangImage, sosmed: FaInstagram },
  { name: "Zaelani", role: "Penghuni Bes", imageUrl: ejenImage, sosmed: FaInstagram },
  { name: "Gilang Fatahillah", role: "Penghuni Bes", imageUrl: gilangImage, sosmed: FaInstagram },
  { name: "Adi Ramdhan Fahlevi", role: "Penghuni Bes", imageUrl: udanImage, sosmed: FaInstagram },
  { name: "Riyano Nano", role: "Penghuni Bes", imageUrl: nanoImage, sosmed: FaInstagram },
  { name: "Budi Munawar Rahman", role: "Penghuni Bes", imageUrl: budiImage, sosmed: FaInstagram },
  { name: "Budi Munawar Rahman", role: "Penghuni Bes", imageUrl: budiImage, sosmed: FaInstagram }
  // More people...
];

export default function AboutPages() {
  return (
    <div className="bg-white py-6 sm:py-6">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kuppat Barokah
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kumpulan Pemuda Pemudi RT 04 adalah sebuah organisasi sosial kemasyarakatan sebagai wadah dan 
            sarana pengembangan setiap anggota masyarakat yang tumbuh dan berkembang atas dasar kesadaran dan tanggung jawab 
            sosial dari, oleh dan untuk masyarakat terutama generasi muda khususnya di Dusun Margamulya RT 04 RW 02.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-30 w-20 rounded-lg"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <div className="flex items-center mt-2">
                    <a href="https://instagram.com" className="text-gray-500 hover:text-pink-500">
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
        <div className='mt-8'>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 text-center">
            Lokasi Kami
          </h2>
        <Map />
        </div>
    </div>
  );
}
