const Work = () => {
  return (
    <div className='work'>
      <div className='work--heading'>Work</div>
      <div className='work__experience'>
        <div className='work__container'>
          <div className='work__company__duration'>
            <div className='work__company'>Virtusa Limited, Pune, India</div>

            <div className='work__duration'>05/2021 - Present</div>
          </div>
          <div className='work__designation'>Senior Consultant</div>
          <div className='project__container'>
            <ul className='work__points'>
              <div className='work__subHeading'>
                UI for handling Insurance Data(03/2022 - Present)
              </div>
              <li>
                <strong>Building</strong> a new web application for handling
                Insurance data using React Js.
              </li>
              <li>
                <strong>Designing </strong> and <strong>developing </strong>the
                UI components independently.
              </li>
              <li>Collaboration with team member for code quality reviews.</li>
              <li>
                Using client's React based CSS library for styling the
                application.
              </li>
              <li>
                <strong>Agile </strong>methodology is followed for deliverables.
                Using Git for version control and code merging.
              </li>
            </ul>
            <ul className='work__points'>
              <div className='work__subHeading'>
                UI for an Automation Tool (05/2021 - 02/2022)
              </div>
              <li>
                <strong>Enhanced </strong>2 year old existing React application
                by implementing new features and resolving design and
                functionality issues through root cause analysis.
              </li>
              <li>
                Used Profiler in<strong> React Developer Tools </strong> to
                collect performance information of the application.
              </li>
              <li>
                <strong>Optimised </strong>and
                <strong> ensured scalability </strong>of the components through
                techniques like <strong>Code-Splitting </strong>&#38;
                <strong> Memoization </strong>
                which reduced the amount of code needed during the initial load
                and avoided unnecessary re-rendering
              </li>
              <li>
                Multiple layers of call made to the SQL server for fetching the
                data. This was made effective using Async Await in Node Js.
              </li>
              <li>
                Wrote <strong>SQL queries </strong>to fetch concise data from
                the SQL server.
              </li>
              <li>
                Organised regular standup call with client to track progress and
                gather design and functional requirements.
              </li>
              <li>
                <strong>Libraries used: </strong>React Js, React-Bootstrap, Node
                Js, Express Js, SQL. Git for version control. JIRA for work
                management.
              </li>
              <li>Used Git &#38; Bitbucket for version control</li>
            </ul>
          </div>
        </div>

        <div className='work__container'>
          <div className='work__company__duration'>
            <div className='work__company'>Infosys Limited, Pune, India</div>
            <div className='work__duration'>01/2017 - 04/2021</div>
          </div>

          <div className='work__designation'>Associate Consultant</div>
          <div className='project__container'>
            <ul className='work__points'>
              <div className='work__subHeading'>Domain - Banking</div>
              <li>
                <strong>Migrated existing legacy </strong>banking application to
                <strong> React </strong>Application.
              </li>
              <li>
                Built various forms to handle users' data, performed various
                <strong> validations </strong>on the form fields.
              </li>
              <li>
                Worked in Agile Methodologies for incremental development to
                deliver better application.
              </li>
              <li>
                <strong>Libraries used:</strong> React, Redux, React-Redux,
                TypeScript. Git for version control.
              </li>
            </ul>
            <ul className='work__points'>
              <div className='work__subHeading'>Domain - eLearning</div>
              <li>Worked as a React JS developer</li>
              <li>
                Used <strong> React Class components</strong>, states, props,
                routing and various lifecycle methods.
              </li>
              <li>
                Worked with other developers to maintain the functionality of
                the website.
              </li>
              <li>
                <strong>Libraries used:</strong> React, Bootstrap
              </li>
            </ul>
            <ul className='work__points'>
              <div className='work__subHeading'>Domain - eCommerce</div>
              <li>
                Worked as a Front End Web developer to create and modify web
                pages
              </li>
              <li>
                Designed page layout using
                <strong>HTML, CSS &#32; JavaScript </strong>and adding dynamic
                functionality to each module
              </li>
              <li>Validated input fields in the front end of application</li>
              <li>
                Built <strong>responsive, accessible</strong> and
                <strong> dynamic </strong>web pages to enable users to easily
                navigate site.
              </li>
            </ul>
            <ul className='work__points'>
              <div className='work__subHeading'>
                Infosys Foundation Training
              </div>
              <li>
                <strong>Successfully completed </strong> SAP ABAP programming
                language training
              </li>
              <li>
                <strong>Created POC </strong>- a shopping cart application using
                SAP ABAP as part of training
              </li>
              <li>
                <strong>Learnt </strong>practical and theoretical concepts in
                Python, OOPS and SQL Database
              </li>
              <li>
                <strong>Created POC </strong>- a social networking project
                called “Pyspace” using the above concepts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
