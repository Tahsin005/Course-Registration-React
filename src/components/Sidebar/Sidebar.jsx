import PropTypes from 'prop-types';

const Sidebar = ({selectedCourse, remaining, totalCredit, totalPrice}) => {
  return (
    <div className="mt-6">
      <h4 className="font-bold my-4 text-blue-600">Credit Hour Remaining : {remaining} hr </h4>
      <hr />
      <h2 className="font-bold my-4">Course Name : </h2>

      <ol>
        {selectedCourse.map((Course, idx) => (

          <li className='' key={idx}>{idx + 1} - {Course.course_name}</li>
        ))}

      </ol>
      <hr />
      <h3 className="font-bold my-4">Total Credit Hour : {totalCredit}</h3>
      <hr />
      <h3 className="font-bold my-4">Total Price : {totalPrice}$</h3>
    </div>
  );
};

Sidebar.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default Sidebar;
