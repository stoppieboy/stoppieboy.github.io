import smoothScroll from "@/Utility/smoothScroll"
import Link from "next/link"

const SmoothLink = (props) => {
    return <Link {...props} onClick={smoothScroll}>{props.children}</Link>
}

export default SmoothLink;