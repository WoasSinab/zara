/** @type {import('tailwindcss').Config} */
export default { // اگر پروژه شما با Vite ساخته شده، معمولا export default هست. اگر Create React App، ممکنه module.exports = { باشه
  content: [
    // این مسیرها Tailwind رو راهنمایی می‌کنن که کجا فایل‌های HTML/JS/JSX شما رو برای کلاس‌ها اسکن کنه.
    // مطمئن بشید که تمام مسیرهایی که فایل‌های React شما در اونها کلاس‌های Tailwind رو استفاده می‌کنن، اینجا پوشش داده شده باشن.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // پوشش دهنده src/App.jsx, src/main.jsx, src/index.jsx
    "./src/components/**/*.{js,ts,jsx,tsx}", // پوشش دهنده فایل‌های داخل src/components
    "./src/pages/**/*.{js,ts,jsx,tsx}",     // پوشش دهنده فایل‌های داخل src/pages
  ],
  theme: {
    extend: {
      colors: {
        'zara-red': '#CB6146', // این رنگ سفارشی شماست
        // اگر قبلا رنگ‌های دیگه ای هم اضافه کرده بودید، اینجا اضافه کنید
        // 'google-blue': '#1a73e8',
      },
      fontFamily: {
        // مطمئن بشید که font-family شما برای Playfair Display اینجا به درستی تعریف شده باشه
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};