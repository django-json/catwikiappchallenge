import React, { createElement } from 'react';

import './list.styles.css';

import CatBreedTitleItem from '../catbreedtitle-item/catbreedtitle-item.component';

const defaultProps = {
    itemRenderer: CatBreedTitleItem
};

function List({ items, itemRenderer, className, ...props }) {
    return (
        <ul className={`${className} list`}>
            {items.map((item, index) => {
                // //Create id if none
                // if (!item.hasOwnProperty('id')) {
                //     item.id = index;
                // }

                // Set new props for the item renderer
                const newProps = Object.assign(
                    { key: index },
                    { item },
                    {
                        ...props
                    }
                );

                // Assign new props to the item renderer
                return createElement(itemRenderer, newProps);
            })}
        </ul>
    );
}

List.defaultProps = defaultProps;
List.displayName = 'List';
export default List;
