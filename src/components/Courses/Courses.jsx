import Course from "../Course/Course";
import PropTypes from 'prop-types'
const Courses = ({courses}) => {
    return (
        <div>
            {
                courses.map((course, idx) => (
                    <Course key={idx} course={course}></Course>
                ))
            }
            <h1>{courses.length}</h1>
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
}
export default Courses;