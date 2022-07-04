import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-24">
                <div className="w-8 h-8 border-t-4 border-b-4 border-[#503DD4] rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;