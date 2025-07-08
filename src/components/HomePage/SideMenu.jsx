import React from 'react';

function SideMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: 'Home', link: '/' }, // لینک به صفحه اصلی با هش روتینگ
    { name: 'Products', link: '#/zaraproducts' }, // لینک به صفحه محصولات (صفحه 1) با هش روتینگ
    { name: 'Login', link: '#/login' }, // مثال: آیتم‌های عمومی
    { name: 'Shopping Bag', link: '#/cart' },   // مثال: آیتم‌های عمومی
    // آیتم‌های اضافی مانند New Arrivals, Women, Men, Kids, Sale, Store Locator, Contact Us حذف شدند
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Side Menu itself */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#FFFCEE] shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-end">
          {/* Close Button */}
          <button onClick={onClose} className="text-gray-700 text-2xl p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items - با انیمیشن تأخیردار */}
        <nav className="mt-4">
          <ul className="list-none p-0 m-0">
            {menuItems.map((item, index) => (
              <li key={item.name}
                className={`transform transition-all duration-300 ease-out ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 0.05}s` : '0s' }}
              >
                <a
                  href={item.link}
                  className="block py-3 px-4 text-gray-800 text-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideMenu;