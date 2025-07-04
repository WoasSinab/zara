function Footer() {
  return (
    <div className="mb-12">
      {/* بخش بالا */}
      <div className="flex flex-col md:flex-row md:mx-40 mx-6 mb-12 gap-12 md:gap-0 justify-between font-medium">
        <FooterSection
          title="SOCIAL"
          items={[
            { icon: 'instagram', label: 'INSTAGRAM' },
            { icon: 'linkedin', label: 'LINKEDIN' },
            { icon: 'x', label: 'X' },
            { icon: 'facebook', label: 'FACEBOOK' },
          ]}
        />
        <FooterTextSection
          title="ABOUT US"
          items={['OUR STORY', 'EVENTS', 'CAREERS', 'STORES']}
        />
        <FooterTextSection
          title="SERVICES"
          items={['CONTACT US', 'SIZE & FIT GUIDE', 'DELIVERY', 'RETURNS', 'FAQS']}
        />
        <FooterTextSection
          title="HELP"
          items={['MEN', 'WOMEN', 'ACCESSIBILITY', 'PRE - ORDER', 'ON - SALE', 'GIFT CARDS']}
        />
      </div>

      {/* خط جداکننده */}
      <div className="px-6 md:px-40 flex justify-center">
        <div className="w-full h-px bg-gray-200" />
      </div>

      {/* بخش پایین */}
      <div className="text-[#CB6146] mx-6 md:mx-40 my-8 font-medium text-sm md:text-md flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center">
        <p className="text-center">2023 - DESIGN BY SINAB</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <span>Sitemap</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
}

function FooterSection({ title, items }) {
  return (
    <div className="flex flex-col gap-10 text-[#CB6146]">
      <h2 className="font-medium text-2xl md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-6 text-sm">
        {items.map((item, index) => (
          <div className="flex items-center gap-3" key={index}>
            <FooterIcon name={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterTextSection({ title, items }) {
  return (
    <div className="flex flex-col gap-10 text-[#CB6146]">
      <h2 className="font-medium text-2xl md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 text-sm">
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function FooterIcon({ name }) {
  const icons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="14" cy="10" r="4" />
        <circle cx="18" cy="6" r="1" />
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 666 680" width="20" height="20" fill="currentColor">
        <path d="M0 98v498c0 47 37 84 84 84h498c23 0 45-11 59-25c15-15 25-34 25-59V98c0-47-37-84-84-84H84c-25 0-44 10-59 25C11 53 0 75 0 98zm90 66c0-32 26-60 58-60c33 0 60 28 60 60c0 33-27 59-60 59c-32 0-58-26-58-59zm161 411V270c0-7 7-13 12-13h85c12 0 12 14 12 23c24-24 55-30 87-30c78 0 128 37 128 119v206c0 7-6 13-12 13h-88c-7 0-12-7-12-13V389c0-31-9-48-44-48c-44 0-55 29-55 68v166c0 7-7 13-14 13h-87c-5 0-12-7-12-13zm-159 0V270c0-7 7-13 12-13h87c8 0 13 5 13 13v305c0 7-6 13-13 13h-87c-6 0-12-7-12-13z" />
      </svg>
    ),
    x: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93ZM17.61 20.64h2.04L6.49 3.24H4.3Z" />
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.96H15.83c-1.49 0-1.96.92-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default Footer;
