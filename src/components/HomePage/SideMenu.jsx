import React from 'react';

function SideMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'New Arrivals', link: '/new-arrivals' },
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Kids', link: '/kids' },
    { name: 'Sale', link: '/sale' },
    { name: 'My Account', link: '/account' },
    { name: 'Shopping Bag', link: '/cart' },
    { name: 'Store Locator', link: '/stores' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <>
      {/* Overlay - حالا با opacity و pointer-events برای انیمیشن نرم‌تر */}
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
                // انیمیشن fade-in و slide-in کوچک با تأخیر
                className={`transform transition-all duration-300 ease-out ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 0.05}s` : '0s' }} // تأخیر در باز شدن
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