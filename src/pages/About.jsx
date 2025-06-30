import styles from './About.module.css'
const About = () => {
    return (
      <main className={styles.container}>
        <div className={styles.image}>
            <img
                src="/public/icons/about-image.avif"   // Update this path to your actual image location
                alt="Team working together"
                className={styles.aboutImage}
            />
        </div>

        <h2>About:</h2>
        <p>
          <span className={styles.highlight}>HRAPP </span> is a web application designed to manage and view the list of employees working at Helsinki Business College. It provides detailed information about each employee in an organized and user-friendly interface.
        </p>
  
        <h2>Key Features:</h2>
<ul>
  <li>Displays all employees in a clean card format.</li>
  <li>Allows users to <strong className={styles.message}>add new employees</strong>, saving their details to both the database and the UI in real-time.</li>
  <li>Supports <strong className={styles.message}>editing</strong> existing employee information with options to save or cancel changes.</li>
  <li>Enables <strong className={styles.message}>deletion </strong>of employee records with a confirmation prompt before proceeding.</li>
  <li>Shows confirmation messages when an employee’s details are successfully added or edited.</li>
  <li>
    Automatically displays messages based on employee experience:
    <ul>
      <li>🎉 For work anniversaries at 5, 10, 15 years, a message prompts: <strong className={styles.message}>"Schedule recognition meeting"</strong>.</li>
      <li>🔔 For employees with less than 6 months of service:<strong className={styles.message}>"Schedule probation review"</strong> .</li>
    </ul>
  </li>
  <li>Displays an animal emoji for each employee based on the selected animal.</li>
  <li>Users can <strong className={styles.message}>search </strong>for employees by <strong>Name</strong>, <strong>ID</strong> and <strong >Department</strong>.</li>
  <li>Employees can be <strong className={styles.message}>filtered </strong>by <strong>Title</strong> using a dropdown or search interface.</li>
  <li>Includes a custom React hook, <strong className={styles.message}>useAxios</strong>, to manage all REST API calls cleanly and efficiently.</li>
</ul>

  
        <h2>Technology Used:</h2>
        <ul>
          <li><strong className={styles.message}>React </strong>for building the user interface</li>
          <li><strong className={styles.message}>JSON Server </strong>as a mock backend database</li>
          <li>Custom Axios Hook <strong className={styles.message}>(useAxios)</strong> for handling API requests</li>
          <li><strong className={styles.message}>CSS Modules</strong> for modular and scoped styling</li>
        </ul>
      </main>
    );
  };
  
  export default About;
  