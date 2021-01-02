import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "./Product_List";
import Detail from "./Detail";
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/Detail/:id" component={Detail} />
				<Route path="/" component={List} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
