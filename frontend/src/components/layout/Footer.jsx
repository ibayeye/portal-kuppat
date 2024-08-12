// src/components/layout/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kuppat Barokah</h3>
            <p>
              Jl. Margamulya No. 123, Desa Cimalaka, Kecamatan Cimalaka, Kabupaten Sumedang, Provinsi Jawa Barat
            </p>
            <p className="mt-2">Email: info@kuppatbarokah.org</p>
            <p className="mt-2">Telepon: (021) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Dashboard</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">Tentang Kami</a></li>
              <li className="mb-2"><a href="/invalat" className="hover:underline">Inventaris Alat</a></li>
              <li className="mb-2"><a href="/agenda" className="hover:underline">Agenda</a></li>
              <li className="mb-2"><a href="/dokumen" className="hover:underline">Dokumen</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF size={24} /></a>
              <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© 2024 Kuppat Barokah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
