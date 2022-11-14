import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={node.data.target.fields.file}
        description={node.data.target.fields.description}
      />
    ),
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
      <div className="mt-16">
        <h3 className="mb-4 text-xl font-bold">About the Artist__</h3>
        <p className="leading-relaxed">{about}</p>
      </div>
      <div className="mt-16">
        <h3 className="mb-4 text-xl font-bold">{author.name}__</h3>
        <p className="leading-relaxed">{author.about}</p>
      </div>
    </div>
  )
}
