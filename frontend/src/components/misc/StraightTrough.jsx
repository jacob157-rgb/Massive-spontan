function StraightTrough({label}) {
return (
    <div class="flex justify-center">
        <div class="w-full">
            <div class="relative flex items-center py-5">
                <div class="flex-grow border-t border-gray-500"></div>
                <span class="flex-shrink mx-4 font-medium text-gray-600">{label}</span>
                <div class="flex-grow border-t border-gray-500"></div>
            </div>
        </div>
    </div>
)
}

export default StraightTrough