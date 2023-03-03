import Footer from "../scenes/Footer";
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";
import Card from "../components/Card";
import FormPlace from "../components/FormPlace";
import { Link } from "react-router-dom";


const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) =>
            (<Card key={post.id}{...post} />)

        )
    }
    return (
        <h2 className="mt-5 font-bold text-purple-600 text-xl uppercase">
            {title}
        </h2>
    )

}


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [yallPosts, setYallPosts] = useState(null);
    const [searchText, setSearchText] = useState("something");

    return (
        <section className="max-w-7xl mx-auto font-opensans pt-10 pb-16 pl-20 pr-20 border-purple-500 border-4 rounded-xl">

            {/* Header */}
            <div className="flex flex-col items-start">
                <h1 className="font-extrabold text-[32px]"> OpenAI Image Generator
                </h1>
                <p className="mt-2 text-gray-400 text-[16px] max-w[500px]">Provide an assortment of creative and visually impressive pictures produced via DALL-E's API. </p>
                <Link to="/make-post" className="mt-5 font-opensans font-medium hover:bg-purple-700 transition-all hover:scale-105 duration-500 bg-purple-600 text-white px-4 py-2 rounded-lg">Generate</Link>
            </div>

            {/* Form */}
            <div className="mt-16">
                <FormPlace />
            </div>

            {/* Cards */}

            <div className="mt10">
                {
                    loading ? (
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    ) : (
                        <div>
                            {searchText && (
                                <h2 className='font-medium text-gray-400 text-xl mb-3'
                                >
                                    Search results for <span className="text-black">{searchText}</span>

                                </h2>
                            )}
                            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1
                            gap-3">
                                {searchText ? (
                                    <RenderCards data={[]} title="No pictures found" />
                                ) : (
                                    <RenderCards data="yallPosts" title="No results found" />
                                )}
                            </div>
                        </div>

                    )
                }
            </div>


        </section>
    );
};

export default Home;