// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// export default class Example extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">Example Component</div>

//                             <div className="card-body">I'm an example component!</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';
import Add from './Add';
import ListPosts from './List';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<ListPosts />} />
                        <Route path='/create' element={<Add />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
