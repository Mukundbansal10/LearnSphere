import axios from 'axios';
import { useEffect } from 'react';
function App() {
useEffect(() => {
axios.get('http://localhost:5000').then(response => {
console.log(response.data);
});
}, []);
return (
<div>
<h1>Welcome to E-Learning Platform</h1>
</div>
);
}
export default App;