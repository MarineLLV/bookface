/* import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    st0: {
        fill: '#B2D9C1'
    },

    st1: {
        fill: '#81BB27'
    },

    st2: {
        fill: '#D7DF78'
    },

    st3: {
        fill: '#E8ADCF'
    },

    st4: {
        fill: '#F59A30'
    },

    st5: {
        fill: '#93D3EA'
    },

    st6: {
        fill: '#F0ABCD'
    }
}
));

function Logo() {
    const classes = useStyles();

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0'
            y='0'
            enableBackground='new 0 0 595.28 841.89'
            viewBox='0 0 595.28 841.89'
        >
            <g>
                <path
                    d='M295.34 393.08s13.02-15.33 25.53-16.1c12.51-.77 28.34 9.45 28.34 9.45s13.28 9.96 24.51 5.36c11.23-4.6-15.57 18.64-15.57 18.64s-12.31 4.6-22.24 3.57c-9.93-1.02-20.4-9.45-20.4-9.45s-15.57-8.17-19.15-7.15c-3.57 1.03-1.02-4.32-1.02-4.32z'
                    className='st0'
                ></path>
                <path
                    d='M324.36 371.62s14.55-19.4 35.49-12.51 29.11 12 32.94 11.49c3.83-.51-2.04 9.45-2.04 9.45s-5.36 5.87-9.7 6.89c-4.34 1.02-15.06 5.11-16.6 4.09-1.53-1.02-9.96-2.55-12.26-5.36s-17.87-11.79-25.53-11.26c-7.66.53-2.3-2.79-2.3-2.79z'
                    className='st1'
                ></path>
                <path
                    d='M352.28 353.23s11.23-13.79 27.83-9.96c16.6 3.83 23.49 13.53 31.66 8.68 8.17-4.85-3.83 11.57-3.83 11.57s-11.49 6.05-20.43 4.26-18.38-9.6-22.47-10.16c-4.09-.56-12.77-2.26-12.77-2.26v-2.13z'
                    className='st2'
                ></path>
                <path
                    d='M375.89 338.81s.27-.36.79-.95c2.4-2.72 42.35 9.38 36.87 10.91s-12.26 1.28-18.38-1.91c-6.13-3.19-14.17-6.89-15.96-6.64s-4-.78-4-.78l3.88-4.3s7.18-7.18 14.57-6.16 13.51 6.38 17.47 6.89c3.96.51 14.02 1.91 14.02 1.91s2.7.13-1.26 3.19-7.14 6.73-9.28 7.4'
                    className='st4'
                ></path>
                <path
                    d='M400.02 327.06s32.94-15.83 37.53-15.7.89 3.96.89 3.96-10.75 18.26-12.4 18.89-3.69 1.79-9.31 0c-5.62-1.79-3.32-.64-5.62-1.79-2.3-1.15-16.09-3.56-12.51-4.98 3.57-1.42 3.9-1.42 3.9-1.42'
                    className='st3'
                ></path>
                <path
                    d='M294.46 398.51s.12 4.77 5.39 10.55c5.28 5.79 17.36 21.79 25.7 22.81s15.66-2.38 15.66-2.38 9.53-6.81 11.06-10.04c1.53-3.23 2.21-4.16 2.21-4.16l-9.19 1.61s-7.24 1.36-9.83 1.19c-2.59-.17-7.7-1.51-10.08-2.8-2.38-1.29-7.32-4.35-7.32-4.35l-4.6-3.06s-3.57-2.38-4.43-2.89c-.85-.51-6.13-3.57-8-3.91-1.86-.36-6.57-2.57-6.57-2.57z'
                    className='st5'
                ></path>
            </g>
            <g>
                <path d='M426.04 338.35s-.41-.73-2.79-1.1c-2.38-.36 4.83-1.85 4.83-1.85s1.19-.06.68.7c-.51.77-1.54 3.28-1.54 3.28'></path>
                <path d='M373.79 339.28s1.28-4.49 8.68-9.47c7.4-4.98 13.52-3.2 16.21-1.19 2.69 2.02 13.2 4.17 13.2 4.17s8.32 2.88 11.96 2.37c3.64-.51 3.96-1.4 3.96-1.4s2.3-.32.7 1.66c-1.6 1.98-7.49 1.78-7.49 1.78s-3.68-.76-4.12-.89-4.15-.83-5.17-1.15c-1.02-.32-6.97-2-6.97-2s-6.52-2.08-6.7-2.27-4.39-2.24-6.62-2.01c-2.23.23-7.34 1.76-7.34 1.76s-2.04 1.14-3.38 2.29c-1.34 1.15-3.26 3.51-3.26 3.51l-1.65 2.36-.57.63-1.42.22v-.37z'></path>
                <path d='M422.5 337.19c3.99.47 6.56-1.13 6.56-2.02 0-.89 9.18-14.79 9.18-14.79s4.51-6.81 4.34-8.43c-.17-1.62-2.02-2.89-2.02-2.89s-1.34-.89-2.23-.64-3.38.96-3.38.96l-4.15 1.6s-21.32 8.36-22.85 8.87c-1.53.51-12.08 5.63-12.7 6.32-.62.69 1.41 1.32 1.41 1.32l1.38-.3s6.21-2.35 9.91-4.36c3.7-2.02 22.98-9.04 22.98-9.04s4.91-2.94 6.89-2.43 1.98 1.66 1.98 1.66-.57 1.34-1.98 3.06c-1.4 1.72-6.51 9.51-6.51 9.51s-4.4 8.3-5.43 8.68c-1.02.38-3.83.89-3.83.89'></path>
                <path d='M397.86 371.97s-.08-2.36-2.27-2.18c-2.19.17-2.8.81-2.8.81s2.33-.32 2 1.06c-.33 1.39-1.15 3.85-1.15 3.85l4.22-3.54z'></path>
                <g>
                    <path d='M349.21 354.85s3.66-7.15 13.19-11.4c9.53-4.26 13.85-4.78 18.69-2.91 4.84 1.87 15.1 6.82 15.1 6.82s11.91 3.67 18.42 1.03c6.51-2.64 10.91-9.53 11.44-10.04s1.2.94 1.2.94-.51 2.21-2.21 4-3.23 3.49-4.26 3.91-3.53 2.4-5.79 3.32c-2.26.92-4.15 2.47-7.57 2.77-3.41.3-6.8-2.17-6.8-2.17l-4.27-2.13s-9.02-4.51-13.45-5.87-8.17-1.7-8.17-1.7-2.64.53-4.26 1.2c-1.62.67-5.36 1.27-10.81 4.33s-7.4 6.3-7.4 6.3l-.43 2.13.03.5-2.81-.16.16-.87z'></path>
                    <path d='M394.09 369.45v.88s.07.07.83-.28c.23-.11 8.51-3.29 10.85-4.05s2.13-1.28 3.62-2.55c1.49-1.28 2.38-2.89 2.38-2.89s1.91-3.19 2.38-4.04c.47-.85 1.11-3.7 1.11-3.7s.26-1.02 0-1.74-.64-.94-.64-.94-.85.95-.41.96.37.38.41 1.42c.04 1.04-3.68 6.65-3.75 6.76-.07.11-2.84 4.14-4.07 4.81-1.23.67-7.92 2.96-7.92 2.96'></path>
                </g>
                <path d='M357.37 410.7s19.31-15.07 19.04-18.7c-.28-3.63 2.09 0 2.09 0v1.91s-1.02 3.91-6.98 8.34c-5.96 4.43-6.13 5.83-11.74 8.45l-5.62 2.62 3.21-2.62z'></path>
                <path d='M362.22 390.43s1.61 1.64 8.19 0c6.57-1.64 11.23-2.99 14.11-4.84 2.87-1.85 8.62-7.53 9.32-10.72.7-3.19 2.43-3.7 2.43-3.7s3.83-.13 0 4.53-6.13 7.53-6.13 7.53-1.72 1.72-5.3 3.77c-3.57 2.04-6 3.48-8.36 4-2.36.52-8.13 2.84-12.34 1.76-4.21-1.08-1.92-2.33-1.92-2.33z'></path>
                <path d='M321.64 373.98s-.19-2.3 1.53-4.34 5.23-4.4 5.23-4.4l4.15-3s11.15-6.91 17.43-6.51 16.83 1.63 25.23 6.94c8.4 5.31 15.36 5.76 15.36 5.76s1.54.48 6.83-1.09-2.04 3.62-5.49 3.28c-3.45-.34-8.49-.92-10.15-1.68-1.66-.77-7.21-4.04-7.47-4.09-.26-.06-19.09-7.84-24.26-6.69-5.17 1.15-5.81.77-6.7 1.28-.89.51-6.88 2.36-7.87 3.06-1 .7-5.27 4.09-5.27 4.09s-4.99 3.57-5.72 4.53-1.18 1.85-1.18 1.85l-.26 1.38-1.39-.37z'></path>
                <path d='M292.91 396.85c-.64-.47-1.4-3.78 2.55-8.38 3.96-4.6 11.62-9.19 14.11-10.21 2.49-1.02 9.07-4.45 15.58-3.85 6.52.6 7.24 1.49 7.97 1.36s6.64 2.22 6.64 2.22 8.13 4.33 9.34 5.18c1.21.85 3.76 2.79 4.68 3.79.92 1 5.8 2.37 5.8 2.37s5.32 2.6 7.5 1.86c2.18-.75 10.3-2.72 15.3-4.69 5-1.98-4.77 4.02-4.77 4.02s-.56.47-2.77.87-6.16 1.07-7.83 1.3-6.77-.77-7.72-1.21c-.96-.45-4.21-1.21-5.74-2.17-1.53-.96-6-4.66-6.32-4.98s-2.43-1.66-3.32-2.17c-.89-.51-5.55-2.68-6.26-2.81s-3.96-1.72-6.77-1.98c-2.81-.26-5.23-1.4-6.13-1.21-.89.19-4.47.7-5.74 1.09-1.28.38-3.64.77-6.38 2.04-2.74 1.28-5.23 2.11-6.89 3.19s-2.11 1.34-3 2.11-4.34 3.64-5.49 5.62c-1.15 1.98-1.71 1.73-2.23 3.64-.52 1.91-.55 2.7-.55 2.7l-1.3.32h-.26z'></path>
                <path d='M294.91 399.9c.99 3.13 1.45 5.15 2.73 6 .07.05.22.14.21.15-.02.04-5.4-3.11-5.4-3.11s-.85-5.27 0-5.87c.85-.6 4.23.23 4.67.25.44.02 7.47 1.58 8.93 2.75s5.37 1.83 8.71 4.1c3.34 2.28 4.66 3.87 7.3 5.32 2.64 1.45 14.72 7.02 22.47 4.66 7.74-2.36 8.52-2.08 11.96-3.16s.72 7.35.72 7.35-1.45 3.83-6.64 8.17-14.38 10.28-23.96 9.95c-9.58-.33-7.19-5.27-7.19-5.27s2.38 3.06 10.38 1.62 11.57-3.23 14.04-4.68c2.47-1.45 7.15-4.85 7.49-5.62.34-.77 4.09-5.94 4-7.22s-3.91.53-3.91.53-8.09 2.6-13.54 1.67c-5.45-.94-5.38-.4-9.36-1.53-3.98-1.13-9.53-4.09-10.47-5.02-.94-.94-5.7-5.02-8.43-5.87-3.43-1.07-4.75-1.81-10.98-4.6-1.78-.8-3.82-.86-3.73-.57z'></path>
            </g>
            <path d='M171.69 453.33s1.02-25.79 29.62-44.68 32.68-18.52 43.91-19.98c11.23-1.46 33.57-1.66 45.7 4.8 12.13 6.46 35.61 16.09 50.62 41.55 15 25.46 12.45 44.87 12.45 44.87s-2.67 33.96-18.69 49.02-34.92 36-56.62 37.28-56.94-1.02-62.3-5.62c-5.36-4.6-33.45-23.23-39.32-38.04-5.88-14.82-13.8-50.82-5.37-69.2z'></path>
            <ellipse
                cx='257.58'
                cy='474.61'
                className='st3'
                rx='83.74'
                ry='80.17'
            ></ellipse>
            <g>
                <path d='M209.55 411.7s3.06-3.06 3.83 0-.51 15.06-1.91 22.98c-1.4 7.91-8.04 62.3-8.04 62.3v31.66s-3.83 6.72-4.34-2.51c-.52-9.24 7.4-111.62 10.46-114.43z'></path>
                <path d='M202.4 497.49s10.47-8.17 13.02-8.94 7.15-1.02 7.15-1.02 2.81-.26-3.83 4.98c-6.64 5.23-15.57 10.6-15.57 10.6l-.77-5.62z'></path>
                <path d='M187.34 508.98l11.72-9.96 2.54-33.28h5.7l-3.74 30.11.63 22.07-4.98 1.93-.15-13.16s-6.87 3.57-8.4 7.4c-1.53 3.82-3.32-5.11-3.32-5.11z'></path>
                <path d='M181.98 438.51s56.17-39.06 83.49-30.89c27.32 8.17 0 20.94 0 20.94l-52.34 30.38s29.87-4.6 36.77-3.32c6.89 1.28 16.34 2.55 19.15 8.68 2.81 6.13-4.6 18.13-4.6 18.13s-34.09 34.39-61.28 42.13c-27.19 7.73-15.83-15.57-15.83-15.57l3.06.77s-3.06 5.87-1.28 8.17c1.79 2.3-.26 6.38 15.06 0s41.36-25.02 44.43-28.6 13.53-10.47 14.55-17.36c1.02-6.89-8.94-10.21-8.94-10.21s-29.62-1.28-44.68 3.32c-15.06 4.6-5.87-6.13-5.87-6.13s-3.32-3.57 14.81-13.28 46.72-24.71 46.72-24.71 7.4-3.35 2.3-5.66c-5.11-2.31-16.56-1.14-16.56-1.14L212.36 426l-26.81 15.32-2.55.77-1.02-3.58z'></path>
            </g>
            <g>
                <image
                    width='162'
                    height='233'
                    display='none'
                    overflow='visible'
                    transform='matrix(.4791 0 0 .4519 252.191 423.598)'
                    xlinkHref='data:image/jpeg;base64,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'
                ></image>
                <path d='M305.64 467.96H307s.94 3.32.68 4c-.26.68 1.11 9.87.43 11.49s4.17-1.53 6.21-5.45c2.04-3.91 4.17-12.6 7.4-10.04 3.23 2.55 1.19 3.32 1.19 3.32s-.6-.17-1.45-.51c-.85-.34-1.7-.09-2.38 2.13s-2.04 5.09-2.81 7.01-5.19 6.18-6.89 6.77c-1.7.6-2.3-.43-3.15-1.28-.85-.85-.6-6.72-.6-6.72V467.96'></path>
                <path d='M327.28 477.77s-2.38 12.17 1.62 12.17 8.17-2.64 8.17-2.64 2.21-1.96 2.04-2.38c-.17-.43-2.13 1.87-5.53 2.21-3.4.34-5.53-2.38-4.68-3.28.85-.89 6.72-.98 6.72-.98s3.66-2.23 2.98-6.95c-.68-4.71-5.4-5.9-6.72-5.31-1.32.59-3.15 1.28-3.83 3.57-.68 2.31-.77 3.59-.77 3.59z'></path>
                <path
                    d='M329.55 478.34s.34-2.64 2.04-3.49c1.7-.85 2.89.85 2.89.85s2.13 3.22 0 4.54c-2.13 1.33-4.94 1.16-4.94 1.16s-.1-2.51.01-3.06z'
                    className='st6'
                ></path>
                <path d='M313.01 483.96s-.98 10.13 2.42 8.85c3.4-1.28 9.89-7.23 11.16-8.85s1.53-5.36 1.53-5.36l-2.98 3.23s-6.38 6.72-7.83 7.23c-1.45.51-3.57 2.04-2.72-2.64.85-4.68 2.13-17.62 8.25-15.32 6.13 2.3-2.34-3.61-2.34-3.61'></path>
                <path d='M305.64 467.96s-10.38 9.53-9.02 19.57c1.36 10.04 5.11-.51 5.62-.85.51-.34 3.4-8 3.4-8s-1.36-2.32-2.72 1.23c-1.36 3.54-2.89 7.62-2.89 7.62s-4.09 3.64-.34-7.62 5.96-8.03 5.96-8.03v-3.92z'></path>
                <path d='M259.47 444.89s32.43-25.79 54.51-19.02 8.43 13.53 8.43 13.53-2.17-1.27-1.53-2.93 1.91-2.43 1.91-2.43-2.55-4.6-10.21-5.11c-7.66-.51-18.38.26-22.21 1.66-3.83 1.4-17.49 7.28-20.68 10.09s-5.36 5.36-5.36 5.36 10.85 0 11.87 8.43-.89 24.64-.89 24.64l-4.98 46.09s-1.79 2.89-3.06.93c-1.28-1.96.89-18.04.89-18.04s1.79-14.3 3.19-24.51 2.17-17.26 2.17-17.26l.64-9.42s-3.45-10.21-14.04-7.53c-10.61 2.67-.65-4.48-.65-4.48z'></path>
                <path d='M280.02 434.94L283.21 433.02'></path>
                <path d='M279.38 434.94L276.19 454.34 276.47 458.94 277.61 457.4 281.62 433.98z'></path>
            </g>
            <path d='M257.81 488.81s26.83-18.77 36.65-11.23c9.82 7.53-1.16 2.81-1.16 2.81s.26-4.59-17.62 1.92-16.21 9.83-16.21 9.83-2.68-1.03-1.66-3.33z'></path>
        </svg>
    );
}

export default Logo; */