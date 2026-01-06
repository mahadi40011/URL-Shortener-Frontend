import React, { useState } from "react";

const Home = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <section
      className="relative min-h-screen pt-24 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/x81f5v4h/images-q-tbn-ANd9-Gc-S6k-ML-r-ZPncz-KGOMS4-MWHAbl-ZFt-Ymr-RRHRx-Q-s.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-5xl w-full px-4 text-center text-white">
        {/* Title and Subtitle */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Shorten Your <span className="text-green-400">Links</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto">
          Simplify your online presence. Convert long, complex URLs into short,
          shareable links in just one click.
        </p>

        {/* Input Box and button */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 md:p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full relative">
              <input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="w-full px-6 py-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-500/50 truncate transition-all"
              />
            </div>

            <button
              onClick={handleShorten}
              className="w-full md:w-auto px-10 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-lg shadow-lg shadow-cyan-500/30 transition-all active:scale-95 whitespace-nowrap"
            >
              Generate Short URL
            </button>
          </div>

          {/* Shortened URL Result Area */}
          {shortUrl && (
            <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
              <p className="text-green-300 font-mono text-lg break-all">
                {shortUrl}
              </p>
              <button
                onClick={copyToClipboard}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Home;
