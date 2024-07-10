import PropTypes from "prop-types";
import "./Course.css";
const Course = ({ course, handleSelectedCourse }) => {
  const { id, course_image, course_details, course_name, price, credit } =
    course;
  return (
    <>
      <div key={id} className="p-6 flex flex-col place-content-between shadow-xl rounded-md h-full">
      <div>
        <img className="w-full" src={course_image} alt="course image" />
      </div>
      <div className="card-body">
        <h2 className="text-start text-2xl font-bold my-3">{course_name}</h2>
        
        
        <p className="text-sm text-start my-2">
          {course_details}
        </p>
        <div className="info">
            <h2 className="text-md font-semibold">
            Price: <span>{price}</span>
            </h2>
            <h2 className="text-md font-semibold">Credit: {credit}</h2>
        </div>
        <div className="card-actions justify-center mt-4">
          <a onClick={() => handleSelectedCourse(course)} className="bg-blue-600 text-white text-center hover:text-black hover:bg-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full block"
          >
            Select
          </a>
        </div>
      </div>
    </div>
    </>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourse: PropTypes.func.isRequired,
};
export default Course;
