import skills from '../public/assets/skills';
import certifications from '../public/assets/certifications';

const About = () => {
  return (
    <div className='about'>
      <div className='about--heading'>About</div>
      <div className='about--summary'>
        Overall 5 years of experience in the software industry, with passion to
        code and a zeal to learn new technologies. Keen interest in developing
        new websites, components, making them stable and improve performance.
      </div>
      <div className='about--heading'>Skills</div>
      <div className='about__skills__all'>
        {skills.map((skill) => (
          <div key={skill.name} className='about__skills__all__each'>
            <div className='about__skills__all__each__bar--heading'>
              {skill.name}
            </div>
            <div className='about__skills__all__each__bar--progress'>
              <div
                className='about__skills__all__each__bar__progress--value'
                style={{ width: `${skill.progress}%` }}>
                {skill.name}
              </div>
            </div>
            <span className='about__skills__all__each--progress'>
              {skill.progress}%
            </span>
          </div>
        ))}
      </div>
      <div className='about--heading'>Certifications</div>
      <div className='certifications__all'>
        {certifications.map((certification) => (
          <div className='certifications__all__each' key={certification.id}>
            <div className='certifications__all__each--logo'>
              {certification.logo && certification.logo}
            </div>
            <div className='certifications__all__each--details'>
              <div className='certifications__all__each__heading'>
                <div className='certifications__all__each__heading--title'>
                  {certification.name}
                </div>
                <div className='certifications__all__each__heading--date'>
                  {certification.date}
                </div>
              </div>
              <div className='certifications__all__each--subHeading'>
                {certification.by}
              </div>
              {certification.url && (
                <div className='certifications__all__each__link'>
                  <span className='certifications__all__each__link--heading'>
                    URL:&nbsp;
                  </span>
                  <a
                    className='certifications__all__each__link--url'
                    target='_blank'
                    rel='noreferrer'
                    href={certification.url}>
                    {certification.url}
                  </a>
                </div>
              )}
              <div className='certifications__all__each__stats'>
                {certification.duration && (
                  <div className='certifications__all__each__stats--duration'>
                    <span>Duration: </span>
                    <span>{certification.duration}</span>
                  </div>
                )}
                {certification.score && (
                  <div className='certifications__all__each__stats--score'>
                    <span>Score: </span>
                    <span>{certification.score}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
