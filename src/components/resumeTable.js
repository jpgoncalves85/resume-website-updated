import { useState } from "react";
import userInfo from "./userInfo";
import "./table.css";


function resumeTable() {

	


	return(
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Middle Initial</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Years of Experience</th>
						<th>Current Position</th>
						<th>Resume File</th>
					</tr>
				</thead>

				<tbody>

				</tbody>
			</table>

		</div>

		
	)
}

export default resumeTable;