import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    const [allCourse, setallCourse] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setallCourse(data));
    }, []);
    return (
        <div>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4 mx-auto px-8 md:px-16 lg:px-24 py-5">
                {/* cards */}
                <div className="sm:col-span-12 md:col-span-7 lg:col-span-9">
                    <Courses courses={allCourse}></Courses>
                </div>

                {/* sidebar */}
                <div className="sm:col-span-12 md:col-span-5 lg:col-span-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;