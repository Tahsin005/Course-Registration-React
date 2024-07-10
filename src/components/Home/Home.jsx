import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";

const Home = () => {
    const [allCourse, setallCourse] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setallCourse(data));
    }, []);
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
                {/* cards */}
                <div>
                    <Courses courses={allCourse}></Courses>
                </div>

                {/* sidebar */}
            </div>
        </div>
    );
};

export default Home;