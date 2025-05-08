import React, { useEffect, useState } from 'react';
import products from './data'; // Ensure this imports the products array correctly

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const productsToMap = products && products.default && Array.isArray(products.default)
    ? products.default
    : Array.isArray(products) ? products : [];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative">
      <div className="container mx-auto py-12 px-4">

        {/* Website Name and Punchline (Kept the refined style) */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-6xl font-serif font-extrabold text-center text-blue-700 dark:text-blue-400 drop-shadow-lg">
            The DailyFind
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center italic mt-3 max-w-lg">
            Discover new or essential items regularly
          </p>
        </div>

        {/* Product Grid Section (Reverted styling closer to original, kept gap-4) */}
        {productsToMap.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"> {/* Reverted gap to 4 */}
            {productsToMap.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110 flex flex-col items-center transition-transform"
              >
                {/* Image (Reverted size and styling) */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-md mb-2" // Reverted size and styling
                />
                {/* Product Name (Reverted size and weight) */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-2 text-center">
                  {product.name}
                </h2>
                {/* Description (Reverted styling, ensured no overflow hidden) */}
                <p className="text-gray-600 dark:text-gray-400 text-center mt-1"> {/* Reverted styling, added mt-1 */}
                  {product.description}
                </p>
                {/* Category (Reverted styling) */}
                <div className="mt-3 w-full text-center"> {/* Reverted styling */}
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Category: {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <p className="text-center text-xl text-gray-600 dark:text-gray-400 col-span-full">
             No products found or an error occurred loading products.
           </p>
        )}

        {/* About Section (Kept the refined style) */}
        <div className="mt-20 pt-12 border-t border-gray-300 dark:border-gray-700">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
            About The DailyFind
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Welcome to The DailyFind, your curated online marketplace dedicated to bringing
            you a delightful discovery of new and essential products for every facet of your life.
            From cutting-edge electronics that power your day to captivating books that
            transport you, from stylish apparel that expresses your unique personality to
            efficient home appliances that simplify your routines, and the daily necessities
            that keep life running smoothly – we bring it all to your fingertips.
          </p>
           <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            We believe in the joy of finding quality items that enhance your everyday. Our
            selection is hand-picked for visual appeal and practicality, ensuring a seamless
            and inspiring online shopping experience. Explore our diverse collection and
            make The DailyFind your daily habit for discovering products you'll love.
          </p>
        </div>

      </div>

      {/* Scroll Buttons positioned on the bottom right with spacing */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50"> {/* Container for buttons */}
        {/* Scroll to Top Button (inside container) */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Reverted styling slightly
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Scroll to Bottom Button (inside container, spaced by space-y-4) */}
        <button
          onClick={scrollToBottom}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50" // Reverted styling slightly
          aria-label="Scroll to bottom"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V6" />
           </svg>
        </button>
      </div>

    </div>
  );
}

export default App;
