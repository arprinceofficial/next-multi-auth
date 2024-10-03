import Image from "next/image";

export default function ApplicationLogo({ width, height, sizes }) {
    return (
        <>
            <Image
                src="https://queue.arprince.me/img/main-logo.png"
                alt="logo"
                width="0"
                height="0"
                sizes={sizes}
                style={{ width: width, height: height }}
                priority
            />
        </>
    )
}
