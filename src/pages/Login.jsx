function Login() {
  return (
    <div className='lg:mx-40 flex lg:flex-row flex-col items-center lg:gap-34 gap-24 '>
      <div className='lg:w-1/2 '>
        <img className='' src='https://s6.uupload.ir/files/frame_267_qg9f.png' alt='' />
      </div>

      <div className='lg:w-1/2 flex flex-col gap-6'>
        <h1 className='lg:text-3xl text-2xl'>Beautiful experience with Zara</h1>
        <p>Choose one of the options to go.</p>

        <div className="flex flex-col gap-6 justify-between relative w-full max-w-lg">
          <div className='relative w-full max-w-lg'>
            <input
              type='text'
              placeholder='Gmail'
              className='w-full p-6 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-400'
            />
            <span className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg'></span>
          </div>
          <div className='relative w-full max-w-lg'>
            <input
              type='text'
              placeholder='Password'
              className='w-full p-6 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-400'
            />
            <span className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 text-lg'>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 15 15'>
                <path
                  fill='currentColor'
                  fill-rule='evenodd'
                  d='M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>
          </div>

          <div className='flex items-center justify-center my-2'>
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
        <span className='px-4 md:px-8 text-gray-400 text-sm md:text-MD uppercase tracking-wider whitespace-nowrap'>
          or
        </span>
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
      </div>

          <div className='flex lg:flex-row flex-col gap-3 justify-between my-6'>
            <div className='bg-gray-200 px-16 py-6 rounded-md flex  justify-center items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 128 128'>
                <path
                  fill='#fff'
                  d='M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z'
                />
                <path
                  fill='#e33629'
                  d='M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z'
                />
                <path
                  fill='#f8bd00'
                  d='M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z'
                />
                <path
                  fill='#587dbd'
                  d='M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z'
                />
                <path
                  fill='#319f43'
                  d='M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z'
                />
              </svg>
            </div>
            <div className='bg-gray-200 px-16 py-6 rounded-md flex  justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M14.122 4.682c1.35 0 2.781.743 3.8 2.028c-3.34 1.851-2.797 6.674.578 7.963c-.465 1.04-.687 1.505-1.285 2.426c-.835 1.284-2.01 2.884-3.469 2.898c-1.295.012-1.628-.853-3.386-.843c-1.758.01-2.125.858-3.42.846c-1.458-.014-2.573-1.458-3.408-2.743C1.198 13.665.954 9.45 2.394 7.21C3.417 5.616 5.03 4.683 6.548 4.683c1.545 0 2.516.857 3.794.857c1.24 0 1.994-.858 3.78-.858ZM13.73 0c.18 1.215-.314 2.405-.963 3.247c-.695.902-1.892 1.601-3.05 1.565c-.21-1.163.332-2.36.99-3.167C11.43.755 12.67.074 13.73 0Z"/></svg>
            </div>
            <div className='bg-gray-200 px-16 py-6 rounded-md flex  justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 171"><defs><linearGradient id="logosMetaIcon0" x1="13.878%" x2="89.144%" y1="55.934%" y2="58.694%"><stop offset="0%" stop-color="#0064E1"/><stop offset="40%" stop-color="#0064E1"/><stop offset="83%" stop-color="#0073EE"/><stop offset="100%" stop-color="#0082FB"/></linearGradient><linearGradient id="logosMetaIcon1" x1="54.315%" x2="54.315%" y1="82.782%" y2="39.307%"><stop offset="0%" stop-color="#0082FB"/><stop offset="100%" stop-color="#0064E0"/></linearGradient></defs><path fill="#0081FB" d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82c3.677 5.947 9.16 8.466 14.751 8.466c7.211 0 13.808-1.79 26.52-19.372c10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927c0-23.52-5.484-49.623-17.564-68.273c-8.574-13.23-19.684-21.313-31.907-21.313c-13.22 0-23.859 9.97-35.815 27.75c-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07c-14.2 18.91-26.324 26.076-42.287 26.076c-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148z"/><path fill="url(#logosMetaIcon0)" d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0C85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49c6.802 8.243 11.565 10.7 17.752 10.7c15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363c-11.395 0-21.49-2.475-32.654-13.007c-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428c-10.923 0-20.2 7.666-27.963 19.39z"/><path fill="url(#logosMetaIcon1)" d="M73.312 27.802c-10.923 0-20.2 7.666-27.963 19.39c-10.976 16.568-17.698 41.245-17.698 64.944c0 9.775 2.146 17.28 4.95 21.82L9.027 149.482C2.973 139.413 0 126.202 0 111.148C0 83.772 7.514 55.24 21.802 33.206C34.48 13.666 52.774 0 73.757 0z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
