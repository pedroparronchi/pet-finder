import React from 'react';

import '../../assets/css/paginate.css';

const paginate = props => {

    const renderPaginate = () => {
        const { pagination } = props;
        const view = [];

        if (pagination && pagination.total_pages) {

            const previousPage = pagination.current_page - 1 === 0 ? 1 : pagination.current_page - 1;
            const nextPage = pagination.current_page + 1 > pagination.total_pages ? pagination.total_pages : pagination.current_page + 1;

            view.push(<button key={"previous"} onClick={() => props.onClick(previousPage)}>&laquo; </button>)

            for (let i = 0; i < pagination.total_pages; i++) {
                view.push(<button
                    key={i + 1}
                    onClick={() => props.onClick(i + 1)}
                    className={i + 1 === pagination.current_page ? 'active' : ''}>
                    {i + 1}
                </button>);
            }

            view.push(<button key={"next"} onClick={() => props.onClick(nextPage)}>&raquo;</button>);
        }

        return view;
    }

    return (
        <div className="pagination">
            {renderPaginate()}
        </div>
    );
}

export default paginate;