import Link from 'next/link';

const cmb = '#0b74fd', clb = '#00bffe', cdg = '#0d4c3c',  cdr = '#981f29';
const cw = '#fefefe', cg = '#656c7b', cdb = '#0e172f';

const card_container_hover_border = cg;
const title_text = cw, title_text_hover = clb;
const title_text_active = cmb, tag_text = cw;

export default function CardLayout(props) {
	return (
		<div className = 'card-layout'>
			{props.projectObjs.map((projectObj, index) => {
				//const imgSrc = require(`../images/${metadata.metadata.imgName}?resize`);
				//const imgSrcWebp = require(`../images/${metadata.metadata.imgName}?resize&format=webp`);

				const imgId = 'project-images/' + projectObj.name + '/' + projectObj.imgName;
				return (
					<Link href={`/designs/${projectObj.name}`} 
						key = {projectObj.name} legacyBehavior>
						<a className = 'card-container' key = {projectObj.name} 
							style={{ 
								display: (props.currentId==0 || props.currentId==projectObj.categoryId)?
								'block': 'none', 
							}}
						>
							<div className = 'img-container'>
			          <img src={imgId} alt = {projectObj.name} />

				         <div className = 'info-container'>
					    		<div className = 'description-container'>
					        	<p className = 'title-text'>{projectObj.title}</p>
									</div>

									<div className = 'tags-container'> 
				    				<div className = 'tags-container-tag'>
				    					{projectObj.usedTools.map((tool_name, index) => {
				    						return (
				    								<p className = 'tag'>{tool_name}</p>
				    						)
				    						})}
										</div>
									</div>
								</div>
							</div>
						</a>
					</Link>
				)}
			)}

      <style jsx>{`
        // font-family: 'Alegreya Sans', sans-serif;
        // font-family: 'Montserrat', sans-serif;
        // font-family: 'Source Sans Pro', sans-serif;
      	
      	.card-layout {
      		display: flex;
      		flex-direction: row;
      		flex-wrap: wrap;
      		margin: 1vh 11vw 1vh 11vw;
      	}

			  .card-container {
			  	display: flex;
			    flex: 0 1 24vw;
			    flex-direction: column;
			    flex-wrap: wrap;
			    box-sizing: border-box;
			    margin: 1vh 0.87vw 1vh 0.87vw;
			    overflow: hidden;
			    border-radius: 5px;
			    box-shadow: ${cg} 0px 2px 4px 0px;
			  }

			  .img-container {
			  	display: flex;
			  	position: relative;
			  	width: 100%;
			  	max-width: 100%;
			  	overflow: hidden;
			  }

			  img {
			  	width: 100%;
			  	max-width: 100%;
			  	height: 15vw;
			  	overflow: hidden;
			  	object-fit: cover;
			  	transition: transform .5s ease;
			  	transform: scale(1);
			  	opacity: 0.85;
			  }

			  img:hover {
			  	opacity: 1.0;
			  	transform: scale(1.1);
			  }

			  .info-container {
			  	position: absolute;
			  	bottom: -0;
			  	display: flex;
			  	flex: 100%;
			  	width: 100%;
			  	flex-direction: column;
			  	flex-wrap: wrap;
			  	overflow-wrap: break-word;
			  	padding: 0 1vw 0 1vw;
			  	background: #574A26BB
			  }

			  .title-text {
			  	font-family: 'Alegreya Sans', sans-serif;
			  	font-weight: bold;
			  	font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
			  	text-decoration: none;
			  	overflow-wrap: break-word;
			  	color: ${title_text};
			  	margin-top: 1vh;
			  }

			  .description-container {
			  	display: flex;
			  	flex-direction: column;
			  	max-width: 100%;
			  }

			  .tags-container {
			  	display: flex;
			  	flex: 100%;
			  	max-width: 100%;
			  	flex-direction: column-reverse;
			  	margin-bottom:1vh;
			  }

			  .tags-container-tag {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
			  }

			  .tag {
			    font-family: 'Source Sans Pro', sans-serif;
			    font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
			    color: ${tag_text};
			    text-decoration: none;
			    margin-right: 1em;
			  }

				@media screen and (max-width: 1100px) {
			  	.card-layout {
			  		flex-direction: row;
			  		margin: 1vh 5vw 1vh 5vw;
			  	}

			  	.card-container {
			  		flex: 0 1 43vw;
			  		margin: 1vh 1vw 1vh 1vw;
			  	}

			  	img {
				  	width: 100%;
				  	max-width: 100%;
				  	height: 23vw;
				  	object-fit: cover;
			  	}

			  }

			  @media screen and (max-width: 480px) {
			  	.card-layout {
			  		flex-direction: row;
			  		margin: 1vh 5vw 1vh 5vw;
			  	}

			  	.card-container {
			  		flex: 0 1 90vw;
			  		margin: 1vh 0 1vh 0;
			  		border-bottom: 3px solid ${card_container_hover_border};
			  	}

			  	img {
				  	width: 100%;
				  	max-width: 100%;
				  	height: 45vw;
				  	object-fit: cover;
			  	}

			  }

		  `}</style>
    </div>
	)
}