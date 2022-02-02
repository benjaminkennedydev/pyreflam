import React from 'react';
import '../styles/datatable.css';

/**
 * A very basic functional react tag.  No state is managed 
 * in this component, and the component renders whatever
 * content is passed into the arguments.
 */
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