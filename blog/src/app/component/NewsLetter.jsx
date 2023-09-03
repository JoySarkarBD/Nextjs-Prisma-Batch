import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section className="py-12 md:py-24 bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="py-16 px-8 md:px-12 xl:px-18 bg-gray-800 border-2 border-gray-700 rounded-xl">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                                <div>
                                    <h3 className="font-heading tracking-tight text-4xl font-bold text-white mb-4">
                                        Stay in the loop
                                    </h3>
                                    <p className="text-lg text-gray-400">
                                        Get the latest updates delivered into your inbox.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="lg:max-w-md lg:ml-auto">
                                    <div className="sm:flex mb-5 items-center">
                                        <input
                                            className="py-3 px-4 h-12 w-full mb-3 sm:mb-0 sm:mr-3 text-gray-400 placeholder-gray-400 bg-gray-800 border border-gray-700 outline-none ring ring-transparent focus:ring-teal-800 rounded-lg"
                                            type="email"
                                            placeholder="Your email"
                                        />
                                        <button
                                            className="sm:flex-shrink-0 group relative w-full sm:w-auto h-12 flex xs:inline-flex items-center justify-center px-4 p-px font-bold text-gray-700 bg-white rounded-lg transition-all duration-300 focus:outline-none"
                                            type="submit"
                                        >
                                            <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-gray-500 animate-pulse group-hover:ring-0 transition duration-300" />
                                            <span>Subscribe</span>
                                        </button>
                                    </div>
                                    <span className="block text-sm text-gray-500">
              No spam. You can unsubscribe anytime.
            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;