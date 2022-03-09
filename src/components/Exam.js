import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react'

export default function Exam() {
	const [data, setData] = useState();
	const [document] = useFirstPrismicDocument()


	return document ? (

		<div className='my-4'>
			<Container>

				<h1>
					{document.data.super_title} {document.data.title}
				</h1>
				<h4>{document.data.subtitle}</h4>
				<hr className='my-4'></hr>
				<div style={{ textAlign: 'justify' }}>
					<PrismicRichText field={document.data.description} />
				</div>
				<center>
					<a href={document.data.url}>
						<Button style={{borderRadius:'10px', background: 'linear-gradient(to right, rgb(255, 100, 0), rgba(255,10,0))', border: 'none'}}>
							Join Meet
						</Button>
					</a>
				</center>
			</Container>
		</div>
	) : (
		<div className='my-4'>
			<Container>
				Please wait
			</Container>
		</div>
	)
}
