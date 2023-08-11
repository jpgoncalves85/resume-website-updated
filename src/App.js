
import Headers from './headers';
import userInfo from "./components/userInfo";
import Home from './components/Home';
import resumeTable from "./components/resumeTable";
import {Route, Routes} from "react-router-dom";


function App() {
	
	return (
		<>
			<Headers />
			<div className="containter">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/userInfo" element={<userInfo />} />
					<Route path="/resumeTable" element={<resumeTable />} />

				</Routes>
			</div>
		</>
		
	)
}

export default App;