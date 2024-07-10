import Course from "../Course/Course";
import PropTypes from 'prop-types'
const Courses = ({courses, handleSelectedCourse}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {
                courses.map((course, idx) => (
                    <Course key={idx} course={course} handleSelectedCourse={handleSelectedCourse}></Course>
                ))
            }
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleSelectedCourse: PropTypes.func.isRequired,
}
export default Courses;