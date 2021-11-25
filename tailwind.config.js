module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        extend: {
            screens: {
                print: { raw: 'print' },
            },
            transitionProperty: {
                height: 'height',
                width: 'width',
            },
        },
    },
    variants: {
        extend: {
            scale: ['active', 'group-hover'],
        },
    },
    plugins: [],
};
