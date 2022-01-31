import React from 'react';
import '../styles/datatable.css';

export default function Cell({ content, header }) {

	return header 
		? (
			<th className="cell cell-header">
				{content}
			</th>
		  )
		: (
			<td className="cell">
				{content}
			</td>
		)
}