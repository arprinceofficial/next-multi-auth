import { useColorMode } from '@/app/context/ColorModeContext';

export default function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleToggle = () => {
        if (colorMode === 'system') {
            toggleColorMode('light');
        } else if (colorMode === 'light') {
            toggleColorMode('dark');
        } else if (colorMode === 'dark') {
            toggleColorMode('sepia');
        } else {
            toggleColorMode('system');
        }
    };

    return (
        <div className="color_mode">
            {colorMode === 'system' && (
                // <i
                //     className="w-5 h-5 cursor-pointer text-gray-500 dark:text-white"
                //     onClick={handleToggle}
                //     title="System"
                // >1</i>
                <div onClick={handleToggle} title="System" className="cursor-pointer text-gray-500 dark:text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="icon w-5 h-5 cursor-pointer"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
                        ></path>
                    </svg>
                </div>
            )
            }
            {
                colorMode === 'light' && (
                    <div onClick={handleToggle} title="Light" className="cursor-pointer text-gray-500 dark:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="icon w-5 h-5 cursor-pointer"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 6V3M8.929 8.929L6.808 6.808M6 16H3m13 13v-3m9.192-.808l-2.121-2.12M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121M22 16a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
                            ></path>
                        </svg>
                    </div>
                )
            }
            {
                colorMode === 'dark' && (
                    <div onClick={handleToggle} title="Dark" className="cursor-pointer text-gray-500 dark:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="icon w-5 h-5 cursor-pointer"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.294 5A11.19 11.19 0 1 0 27 18.706s-5.723 2.19-10.81-2.897C11.105 10.723 13.295 5 13.295 5"
                            ></path>
                        </svg>
                    </div>
                )
            }
            {
                colorMode === 'sepia' && (
                    <div onClick={handleToggle} title="Sepia" className="cursor-pointer text-gray-500 dark:text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="icon w-5 h-5 cursor-pointer"
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="M1.382 8.505v5.058a5.057 5.057 0 0 0 5.057 5.058h3.677a5.057 5.057 0 0 0 5.057-5.058V8.506zM11.887.16a.69.69 0 0 1 .086.972c-.642.765-.784 1.287-.586 1.637c.062.109.593.948.715 1.207c.276.585.312 1.152.074 1.822a4.6 4.6 0 0 1-.751 1.328h3.881q.656.024.95.335q.164.171.237.432l.06-.002a3.448 3.448 0 0 1 0 6.897l-.116-.004A6.44 6.44 0 0 1 10.117 20H6.438a6.436 6.436 0 0 1-6.436-6.437V8.337q-.03-.65.244-.92q.275-.27.809-.29h2.953a.7.7 0 0 1 .144-.17C4.762 6.44 5.16 5.9 5.36 5.337c.114-.32.101-.51-.022-.771c-.078-.166-.569-.942-.667-1.116c-.539-.952-.242-2.044.728-3.202a.69.69 0 1 1 1.057.886c-.642.765-.783 1.287-.585 1.637c.061.109.593.948.715 1.207c.275.585.312 1.152.073 1.822a4.6 4.6 0 0 1-.75 1.328h.858a.7.7 0 0 1 .144-.17C7.52 6.44 7.918 5.9 8.118 5.337c.114-.32.102-.51-.022-.771c-.078-.166-.569-.942-.667-1.116c-.539-.952-.242-2.044.729-3.202a.69.69 0 1 1 1.056.886c-.641.765-.783 1.287-.585 1.637c.062.109.593.948.715 1.207c.276.585.312 1.152.073 1.822a4.6 4.6 0 0 1-.75 1.328h.859a.7.7 0 0 1 .143-.17c.61-.518 1.007-1.058 1.207-1.621c.114-.32.102-.51-.022-.771c-.078-.166-.568-.942-.667-1.116c-.538-.952-.242-2.044.729-3.202a.69.69 0 0 1 .971-.086m4.665 9.11v4.138a2.069 2.069 0 0 0 0-4.138"
                            ></path>
                        </svg>
                    </div>
                )
            }
        </div >
    );
}
