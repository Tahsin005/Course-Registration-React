import PropTypes from "prop-types";
import './Course.css'
const Course = ({ course }) => {
  const { id, course_image, course_details, course_name, price, credit } =
    course;
  return (
    <>
      <div>
        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg w-full"
              src={course_image}
              alt=""/>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start">
                {course_name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-900 text-start">
              {course_details}
            </p>
            <div className="info my-3">
              <p> $ Price :  {price} </p>
              <p> ◧ Credit : {credit} </p>
            </div>
            <button className="bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white w-full text-center p-2">Select</button>
          </div>
        </div>
      </div>
    </>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Course;
