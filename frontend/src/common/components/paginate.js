import React from 'react';

import '../../assets/css/paginate.css';

const paginate = () => (
    <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" className="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">&raquo;</a>
    </div>
);

export default paginate;