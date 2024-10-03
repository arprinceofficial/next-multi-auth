export default function Label({ value, children, textSize }) {
    return (
        <label className={`block font-medium text-gray-700 dark:text-gray-300 mb-2 ${textSize}`}>
            {value ? (
                <span>{value}</span>
            ) : (
                <span>{children}</span>
            )}
        </label>
    )
}
