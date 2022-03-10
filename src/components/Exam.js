import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react'

export default function Exam() {
	const [data, setData] = useState();
	const [document] = useFirstPrismicDocument()


	return document ? (

		<div style={{ marginTop: "4em" }}>
			<Container>
				<div style={{ paddingTop: '2em' }}>
					<center>
						<h1>
							{document.data.super_title} {document.data.title}
						</h1>
						<h4>{document.data.subtitle}</h4>
					</center>
				</div>
				<hr className='my-4'></hr>
				<div className='desc' style={{ textAlign: 'justify' }}>
					<PrismicRichText field={document.data.description} />
				</div>
				<center>
					{document.data.available ? (
						<div className='btm'>
							<a href={document.data.url}>
								<Button className='stud-btn' style={{ borderRadius: '10px', background: 'linear-gradient(to right, rgb(255, 100, 0), rgba(255,10,0))', border: 'none' }}>
									Join Meet
								</Button>
							</a>
						</div>
					) :
						(
							<div className='btm'>
								<Button className='stud-btn' disabled="true" style={{ borderRadius: '10px', background: 'linear-gradient(to right, rgb(255, 100, 0), rgba(255,10,0))', border: 'none' }}>
									Exam not active
								</Button>
							</div>


						)
					}

				</center>
			</Container>
		</div>
	) : (
		<div className='my-4'>
			<Container>
				<div className='loading'>
					<svg width="50" height="50" viewBox="0 0 131 130" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M65.4722 129.581C101.185 129.581 130.136 100.63 130.136 64.9175C130.136 29.2046 101.185 0.253418 65.4722 0.253418C29.7593 0.253418 0.80835 29.2046 0.80835 64.9175C0.80835 100.63 29.7593 129.581 65.4722 129.581ZM65.4722 123.383C97.762 123.383 123.938 97.207 123.938 64.917C123.938 32.6274 97.762 6.45117 65.4722 6.45117C33.1824 6.45117 7.00635 32.6274 7.00635 64.917C7.00635 97.207 33.1824 123.383 65.4722 123.383Z" fill="url(#paint0_linear_333_83)" />
						<defs>
							<linearGradient id="paint0_linear_333_83" x1="65.4723" y1="0.253418" x2="65.4723" y2="129.581" gradientUnits="userSpaceOnUse">
								<stop stop-color="#FF5C00" />
								<stop offset="0.628531" stop-color="#FF5C00" stop-opacity="0" />
							</linearGradient>
						</defs>
					</svg>

				</div>
			</Container>
		</div>
	)
}
