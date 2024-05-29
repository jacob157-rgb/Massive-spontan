function StraightTrough({label}) {
return (
    <div className="flex justify-center">
        <div className="w-full">
            <div className="relative flex items-center py-2 md:py-1">
                <div className="flex-grow border-t border-gray-500"></div>
                <span className="flex-shrink mx-4 font-medium text-gray-600">{label}</span>
                <div className="flex-grow border-t border-gray-500"></div>
            </div>
        </div>
    </div>
)
}

export default StraightTrough