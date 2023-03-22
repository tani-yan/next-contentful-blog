import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content, text) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={node.data.target.fields.file}
        description={node.data.target.fields.description}
      />
    ),
  },
  renderText: (text) => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
})

export default function PostBody({ content, about, author }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className={markdownStyles['markdown']}>
        <div>
          {documentToReactComponents(content, customMarkdownOptions(content))}
        </div>
      </div>
    </div>
  )
}
