import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/16/solid"

const ExpandCollapse = ({isExpanded}: {isExpanded: boolean}) => {
    return isExpanded ? <ChevronDoubleUpIcon className='w-5 h-5' /> : <ChevronDoubleDownIcon className='w-5 h-5' />
}

export default ExpandCollapse