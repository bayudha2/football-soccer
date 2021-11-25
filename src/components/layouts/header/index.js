import React from 'react';

import IconText from '../../elements/IconText';

export const LayoutHeader = () => {
    const renderHeaderItem = () => (
        <div className="flex w-9/12 mx-auto justify-between">
            <IconText />
        </div>
    );

    return (
        <header className="sticky top-0 z-50 py-3 bg-white flex border-b border-gray-200">
            {renderHeaderItem()}
        </header>
    );
};

export default LayoutHeader;
