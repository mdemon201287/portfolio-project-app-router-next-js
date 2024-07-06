// app/contact/page.tsx
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-6">
          Feel free to reach out to me through any of the following methods:
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-green-100 rounded-lg">
            <FaWhatsapp className="text-green-500 text-3xl" />
            <a href="https://wa.me/8801873785288" className="text-green-700 hover:underline text-lg">
              +8801873785288
            </a>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-red-100 rounded-lg">
            <MdEmail className="text-red-500 text-3xl" />
            <a href="mailto:mdemon201287@gmail.com" className="text-red-700 hover:underline text-lg">
              mdemon201287@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}