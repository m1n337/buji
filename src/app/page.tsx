'use client';

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [bujiClick, onBujiClick] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div 
            className="flex max-w-5xl w-full flex-col items-center"
            style={{marginTop: '20px', marginBottom: '15px'}}
      >
          <div>
            {
              bujiClick && <div style={{width: '6%', marginLeft: '50px', position: 'absolute'}}> 
                <div style={{marginBottom: '20px'}}>
                  <Image
                    src="/images/muyu-3.png"
                    alt='muyu-3'
                    layout='responsive'
                    width={100}
                    height={100}
                    objectFit='contain'
                  />
                </div>
                <h3 
                  className={`mb-4 text-1xl font-semibold`}
                  style={{ whiteSpace: 'nowrap' }}
                >功德 +1</h3>
              </div>
            }

            <div 
              className={`${bujiClick ? 'rotating' : ''}`}
              style={{width: '25%', marginLeft: '7.5rem', position: 'relative', top: '1.5rem'}}
            >
              <Image
                src="/images/muyu-2.png"
                alt='muyu-2'
                layout='responsive'
                width={100}
                height={100}
                objectFit='contian'
              />
            </div>
          </div>
          <div
            style={{width: '5rem'}}
          >
            <Image
              src="/images/muyu-1.png"
              alt='muyu'
              layout='responsive'
              width={100}
              height={100}
              objectFit='contian'
            />
          </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div
          className="group w-full rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={() => {
            onBujiClick(true);
            setTimeout(() => onBujiClick(false), 1000);
          }}
        >
          <h2 className={`mb-3 justify-center text-4xl font-semibold`}>
            不急
          </h2>
        </div>
      </div>
      <div>
        Content...
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          11's{' '} Home
          </a>
        </div>
    </main>
  )
}
