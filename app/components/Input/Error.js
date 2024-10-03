export default function Error({ message, textSize }) {
    return (
        <>
            {message && (
                <div>
                    <p className={`text-red-600 dark:text-red-400 mt-2 ${textSize}`}>
                        {message}
                    </p>
                </div>
            )}
        </>
    )
}
