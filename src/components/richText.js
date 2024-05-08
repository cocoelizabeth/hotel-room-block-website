import * as React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import "./richTextStyles.css"
const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b>{text}</b>,
        [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
        [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
        [MARKS.CODE]: (text, key) => <code>{text}</code>
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <div className="h1">{children}</div>,
        [BLOCKS.HEADING_2]: (node, children) => <div className="h2">{children}</div>,
        [BLOCKS.HEADING_3]: (node, children) => <div className="h3">{children}</div>,
        [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
        [BLOCKS.UL_LIST]: (node, children) => (<ul>{children}</ul>),
        [BLOCKS.OL_LIST]: (node, children) => (<ol>{children}</ol>),
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="careers-bullets">{children}</li>,
    }
}

const RichText = ({ title, copy, ...props }) => {
    // let pressLink;
    // if (projectPressLink) {
    //     pressLink = (
    //         <div className='press-link'>
    //             <a className='nav-links' href={projectPressLink} target="_blank">PRESS LINK</a>
    //         </div>
    //     )
    // } else {
    //     pressLink = <div className="display-none"></div>
    // }

    return (
        <div className="richTextContainer">
            {renderRichText(copy, options)}
        </div>
    )
}
export default RichText;
