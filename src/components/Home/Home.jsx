import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    const [allCourse, setallCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setallCourse(data));
    }, []);

    const handleSelectedCourse = (course) => {
        console.log(course);
        const isExist = selectedCourse.find((item) => item.id === course.id);

        let credit = course.credit;
        let price = course.price;

        if (isExist) {
            alert('Course already taken');
        } else {
            selectedCourse.forEach((item) => {
                credit = credit + item.credit;
            });

            const remaining = 20 - credit;
            if (credit > 20) {
                alert('Credit limit exceeded');
            } else {
              setRemaining(remaining);
      
              setTotalCredit(credit);
              setSelectedCourse([...selectedCourse, course]);
              const totalPriceTillNow = totalPrice;
              setTotalPrice(totalPriceTillNow + price);
            }
        }
    };
    return (
        <div>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4 mx-auto px-8 md:px-16 lg:px-24 py-5">
                {/* cards */}
                <div className="sm:col-span-12 md:col-span-7 lg:col-span-9">
                    <Courses handleSelectedCourse={handleSelectedCourse} courses={allCourse}></Courses>
                </div>

                {/* sidebar */}
                <div className="sm:col-span-12 md:col-span-5 lg:col-span-3">
                    <Sidebar selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;