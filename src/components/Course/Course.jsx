import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {id, course_image, course_details, course_name, price, credit} = course;
    return (
        <div>
            
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
}
export default Course;