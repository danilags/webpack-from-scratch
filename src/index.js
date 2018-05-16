import React from 'react';
import ReactDOM from 'react-dom';

import Search from './component/Search';

const Index = () => {
    return (
        <Search />
    )
}

ReactDOM.render(<Index />, document.getElementById('index'))
