import Head from 'next/head';
import Link from 'next/link';

const cmb = '#0b74fd', clb = '#00bffe', cdg = '#0d4c3c',  cdr = '#981f29';
const cw = '#fefefe', cg = '#656c7b', cdb = '#0e172f';

const header_background = cw; 
const greetings_heading = clb, greetings_role = cg, greetings_description = cdb;

const home_page_url = 'https://kiransantha.github.io/';
const description = "Kiran Sai Santa";

export default function Home({ postsMetaData }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <meta name = 'description' content = {description} />
        <meta name="author" content="Kiran Sai Santa" />
        <meta name="keywords" content={'3d visualization,portfolio,architecture,interior design'} />

        <title>{'Kiran Sai Santa'}</title>
      </Head>
      
      <div>
        <div className = 'header-info'>
          <div className = 'profile-section'>
            <img className = 'profile-image' src = '/images/profile/kiran-sai-santa.jpg'
                  alt = 'Kiran Sai Santa'/>
          </div>

          <div className = 'greetings-section'>
            <p className = 'greetings-heading'>Kiran Sai Santa, <span className = 'role-type'>IGBC AP Associate</span></p>
            <p className = 'greetings-role'>3D VISUALIZER</p>
            <p className = 'greetings-description'>Focused on creating Exterior Facades, 
            Interior Designing, Elevations, and Creative Spaces.
            </p>
            <p className = 'greetings-description'>High interest in Sustainability Planning, and Designing.
            Knowledge of Sustainable Design Elements and IGBC Green Building Standards. 
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        // font-family: 'Alegreya Sans', sans-serif;
        // font-family: 'Montserrat', sans-serif;
        // font-family: 'Source Sans Pro', sans-serif;
        
        .header-info {
          display: flex;
          flex: 100%;
          flex-direction: row;
          background: ${header_background};
          padding: 2vh 0vw 1vh 0vw;
        }

        .profile-section {
          display: flex;
          flex: 35%;
          flex-direction: column;
          max-width: 35%;
          align-items: end;
          padding: 1vh 2.5vw 1vh 2.5vw;
        }

        .profile-image {
          width: 50%;
          max-width: 50%;
          height: auto;
          border-radius: 5%;
        }

        .greetings-section {
          display: flex;
          flex: 65%;
          flex-direction: column;
          align-items: start;
          padding: 2vw 20vw 2vw 2vw;
        }

        .greetings-heading {
          font-family: 'Alegreya Sans', sans-serif;
          font-weight: bold;
          font-size: 3em;
          text-align: center;
          color: ${greetings_heading};
        }

        .role-type {
          font-size: 0.7em;
          font-weight: normal;
        }

        .greetings-role {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5em;
          padding-top: 1vh;
          color: ${greetings_role}
        }

        .greetings-description {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 2em;
          padding-top: 1vh;
          color: ${greetings_description}
        }
      `}</style>
    </div>
  )
}
