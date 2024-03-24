import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Link from 'next/link'

const customMarkdownOptions = (content, text) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = node.data.target.sys.contentType.sys.id

      if (entry === 'codeBlock') {
        const fileName = node.data.target.fields.fileName

        return (
          <>
            {fileName && (
              <div>
                <span>{fileName}</span>
              </div>
            )}
            <SyntaxHighlighter 
              language={node.data.target.fields.language} 
              style={dracula}
              customStyle={{
                fontSize: '0.8125em',
                lineHeight: '1.692'
              }}
            >
              {node.data.target.fields.code}
            </SyntaxHighlighter>
          </>
        )
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={node.data.target.fields.file}
        description={node.data.target.fields.description}
      />
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      let anchorAttrs = {}
      {
        anchorAttrs = {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      }
      return (
        <a href={node.data.uri} {...anchorAttrs}>
          {children}
        </a>
      )
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      return (
        <Link href={`/entry/${node.data.target.fields.slug}`}>
          <a>{children}</a>
        </Link>
      )
    },
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
