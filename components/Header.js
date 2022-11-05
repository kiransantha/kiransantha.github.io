import { useState } from 'react';
import Link from 'next/link';

const cmb = '#0b74fd', clb = '#00bffe', cdg = '#0d4c3c',  cdr = '#981f29';
const cw = '#fefefe', cg = '#656c7b', cdb = '#0e172f';

const header = clb, header_left_link = cw, header_left_link_hover = cdb, header_left_link_active = cdb;
const header_right_link = cw, header_right_link_hover = cdb, header_right_link_active = cdb;

export default function Header(props) {

	return (
		<div className = 'header'>
			<div className = 'header-container'>
	      <div className = 'header-left'>
	        <Link href = '/' legacyBehavior>
	        	<a id = 'name'><b>Kiran Sai Santa</b></a>
	        </Link>
	      </div>

	      <div className = 'header-right'>
	        <Link href = '/about' legacyBehavior><a>Projects</a></Link>
	        <Link href = '/about' legacyBehavior><a>Certificates</a></Link>
	        <Link href = '/about' legacyBehavior><a>Resume</a></Link>
	      </div>
			</div>

      <style jsx>{`
	      .header-container {
			    display: flex;
			    flex: 1;
			    flex-direction: row;
			    height: 8vh;
			    padding: 2vh 5vw 2vh 5vw;
			    background: ${header};
			    box-shadow: ${cg} 0px 0px 4px 0px;
			    position: fixed;
			    top: 0;
			    left: 0;
			    right: 0;
			  }

			  .header-left {
			    display: flex;
			    flex: 1;
			    align-items: center;
			  }

			  .header-left a {
			    font-family: 'Source Sans Pro', sans-serif;
			    font-size: 1.2em;
			    text-decoration: none;
			    color: ${header_left_link};
			  }

			  .header-left a:hover {
			    color: ${header_left_link_hover};
			  }

			  .header-left a:active {
			    color: ${header_left_link_active};
			  }

			  .header-right {
			    display: flex;
			    flex: 3;
			    flex-direction: row-reverse;
			    align-items: center;
			  }

			  .header-right a {
			    padding: 0 1vw 0 1vw;
			    font-family: 'Source Sans Pro', sans-serif;
			    font-size: 1.2em;
			    text-decoration: none;
			    color: ${header_right_link};
			  }

			  .header-right a:hover {
			    color: ${header_right_link_hover};
			  }

			  .header-right a:active {
			  	color: ${header_right_link_active};
			  }

			  @media screen and (max-width: 920px) {
			  	.header-container {
			  		padding: 10px 2vw 10px 2vw;
			  		overflow-x: scroll;
			  	}

			  	#name {
			  		display: none;
			  	}

			  	img {
			  		display: flex;
			  	}
				}

			  @media screen and (max-width: 480px) {
			  	.header-container {
			  		padding: 10px 2vw 10px 2vw;
			  		overflow-x: scroll;
			  	}
				}

				@media screen and (max-width: 300px) {
					img {
						display: none;
					}
				}

		  `}</style>
    </div>
	)
}