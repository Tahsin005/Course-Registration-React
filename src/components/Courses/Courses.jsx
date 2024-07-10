import Course from "../Course/Course";
import PropTypes from 'prop-types'
const Courses = ({courses}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {
                courses.map((course, idx) => (
                    <Course key={idx} course={course}></Course>
                ))
            }
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
}
export default Courses;