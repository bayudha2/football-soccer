import React from 'react';
import Button from '../Button';

export default function IconText() {
    return (
        <Button type="link" to="/" className="font-bold text-3xl text-gray-800">
            Soccer
            <span className="text-purple-400">API</span>
        </Button>
    );
}
