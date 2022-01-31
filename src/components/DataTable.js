import React, { Component } from 'react';
import Cell from './Cell';
import '../styles/datatable.css';

export default class DataTable extends Component {
	render() {
		const { headings, rows } = this.props;

		return (
			<table className="table">
				<thead>
					<tr key="heading">
						{headings.map((item, i) => {
							return (
								<Cell 
									key={`heading-${i}`}
									content={headings[i]}
									header={true}
								/>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{rows.map((item, i) => {
						return (
							<tr key={`row-${i}`}>
								{rows[i].map((cell, j) => {
									return (
										<Cell 
											key={`${i}-${j}`} 
											content={rows[i][j]}
										/>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}
}