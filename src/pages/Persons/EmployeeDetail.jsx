import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import AnimalEmoji from '../../Employees/AnimalEmoji';
import Experience from '../../Employees/Experience';
import Loading from '../../Loading/Loading';
import ErrorHandling from '../../ErrorHandling/ErrorHandling';
import styles from './EmployeeDetails.module.css';

const EmployeeDetail = ({ handleDelete, handleEdit, apiUrl }) => {
  const { id } = useParams();
  const { get } = useAxios();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    salary: '',
    location: '',
    department: '',
    skills: '',
    title:'',
    phone:'',
    email:'',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await get(`${apiUrl}/${id}`);
      if (data) {
        setEmployee(data);
        setEditFields({
          salary: data.salary,
          location: data.location,
          department: data.department,
          skills: data.skills,
          title: data.title,
          phone: data.phone,
          email: data.email,
        });
        simulateLoading(() => setLoading(false));
      }
    };
    getData();
  }, []);

  const simulateLoading = (callback) => {
    setTimeout(callback, 1000);
  };

  const handleRemove = (e) => {
    handleDelete(id);
    alert(`${employee.name}'s details are deleted successfully`);
    navigate(-1);
  };

  const handleSave = () => {
    const requiredFields = ['salary', 'location', 'department', 'skills','title','phone','email'];
    for (let field of requiredFields) {
      if (!editFields[field]) {
        setError(`Please enter ${field}`);
        return;
      }
    }
    setError('');
    handleEdit(id, editFields);
    alert(`${employee.name}'s information updated successfully`);
  
    setEmployee(prev => ({
      ...prev,
      ...editFields,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditFields({
      salary: employee.salary,
      location: employee.location,
      department: employee.department,
      skills: employee.skills,
      title: employee.title,
      phone: employee.phone,
      email: employee.email,
    });
    setIsEditing(false);
  };

  if (!employee) return 'Loading employee details...';

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.imageSection}>
            {employee.gender === 'Male' ? (
              <img src="/image/male.avif" alt="male" className={styles.image} />
            ) : (
              <img src="/image/female.jpg" alt="female" className={styles.image} />
            )}
          </div>

          <div className={styles.textSection}>
            <div className={styles.textWrapper}>
              <h2>{employee.name}</h2>

              {isEditing ? (
                <>
                  <div className={styles.editForm} >
                    <label><strong>Title:</strong></label>
                    <input
                        type="text"
                        value={editFields.title}
                        onChange={(e) =>  setEditFields({ ...editFields, title: e.target.value })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Salary:</strong></label>
                    <input
                        type="number"
                        value={editFields.salary}
                        onChange={(e) => setEditFields({ ...editFields, salary: e.target.value })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Location:</strong></label>
                    <input
                        type="text"
                        value={editFields.location}
                        onChange={(e) => setEditFields({ ...editFields, location: e.target.value })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Department:</strong></label>
                    <input
                        type="text"
                        value={editFields.department}
                        onChange={(e) =>  setEditFields({ ...editFields, department: e.target.value })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Skills:</strong></label>
                    <input
                        type="text"
                        value={editFields.skills}
                        onChange={(e) =>  setEditFields({ ...editFields, skills: e.target.value.split(',') })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Phone:</strong></label>
                    <input
                        type="text"
                        value={editFields.phone}
                        onChange={(e) =>  setEditFields({ ...editFields, phone: e.target.value })}
                    />
                  </div>
                  <div className={styles.editForm} >
                    <label><strong>Email:</strong></label>
                    <input
                        type="email"
                        value={editFields.email}
                        onChange={(e) =>  setEditFields({ ...editFields, email: e.target.value })}
                    />
                  </div>
                </>
                ) : (
                <>
                  <p><strong>Title:</strong> {employee.title}</p>
                  <p><strong>Salary:</strong> {employee.salary}</p>
                  <p><strong>Location:</strong> {employee.location}</p>
                  <p><strong>Department:</strong> {employee.department}</p>
                  <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
                  <p><strong>Phone:</strong> {employee.phone}</p>
                  <p><strong>Email:</strong> {employee.email}</p>
                  <p><strong>Start Date:</strong> {employee.startDate}</p>
                  <AnimalEmoji animal={employee.animal} />
                  <Experience startDate={employee.startDate} />
                </>
              )}

              {error && <ErrorHandling error={error} />}

            </div>
          </div>
          <div className={styles.buttons}>
            {isEditing ? (
              <>
                <button onClick={handleSave} className={styles.saveButton}>Save</button>
                <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
              </>
            ) : (
              <>
              <button onClick={() => setIsEditing(true)} className={styles.editButton}>Edit</button>
              <button onClick={() => navigate(-1)} className={styles.backButton}>Back</button>
              <button onClick={handleRemove} className={styles.removeButton}>Remove</button>
            </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDetail;
