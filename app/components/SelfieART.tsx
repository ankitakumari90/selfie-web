"use client";

import Image from "next/image";

export default function SelfieSteps() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">
        The Art of Selfie Expression
      </h1>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          {/* Yellow area */}
          <div className="bg-yellow-500 p-6 rounded-t-lg flex justify-center relative">
            <Image
              src="/photoes/Click_photo.jpg"
              alt="Click Photo"
              width={200}
              height={350}
              className="rounded-lg"
            />
            {/* White label box */}
            <span className="absolute -bottom-0.5 left-0.5 bg-white text-black font-semibold px-3 py-1 rounded">
              Click Photo
            </span>
          </div>
          {/* Text area */}
          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-xs">
              Take a photo of you at a live event or doing something you would
              want signed by the celebrity.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-6 rounded-t-lg flex justify-center relative">
            <Image
              src="/photoes/Submit_photo.jpg"
              alt="Submit Photo"
              width={200}
              height={350}
              className="rounded-lg"
            />
            <span className="absolute -bottom-0.5 left-0.5 bg-white text-black font-semibold px-3 py-1 rounded">
              Submit Photo
            </span>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-xs">
              Submit the photo to your favorite celebrity for a chance to win a
              personalized NFT photo.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-6 rounded-t-lg flex justify-center relative">
            <Image
              src="/photoes/get_nft.jpg"
              alt="Get NFT"
              width={200}
              height={350}
              className="rounded-lg"
            />
            <span className="absolute -bottom-0.5 left-0  bg-white text-black font-semibold px-3 py-1 rounded">
              Get NFT
            </span>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-xs">
              Receive your Selfie.Live NFT!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
