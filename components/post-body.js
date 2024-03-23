import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const customMarkdownOptions = (content, text) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = node.data.target.sys.contentType.sys.id;

      if (entry === "codeBlock") {
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
      if (
        !node.data.uri.includes(
          'https://next-contentful-blog-tani-yan.vercel.app'
        )
      ) {
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
    // コードブロックをdivで括る
    // [BLOCKS.PARAGRAPH]: (node, children) => {
    //   if (node.content.length === 1 && node.content[0].marks.find(x => x.type === 'code')) {
    //     return <div>{children}</div>
    //   }
    //   return <p>{children}</p>
    // },
  },
  // renderText: (text) => {
  //   return text.split('\n').reduce((children, textSegment, index) => {
  //     return [...children, index > 0 && <br key={index} />, textSegment]
  //   }, [])
  // },
  // renderMark: {
  //   [MARKS.CODE]: (text) => {
  //     text.shift() // コードブロックのfalseを削除
  //     let language = text.shift() // コードブロックの1行目の言語指定をClassに利用後削除
  //     const classList = language.indexOf(':') ? language.split(':') : []
  //     language = classList[0]?.replace('language-', '')
  //     const fileName = classList[1]
  //     text.shift() // コードブロックの1行目の改行を削除

  //     const value = text.reduce((acc, cur) => {
  //       if (typeof cur !== "string" && cur.type === "br") {
  //         return acc + "\n"
  //       }
  //       return acc + cur
  //     }, "")

  //     return (
  //       <>
  //         {fileName && (
  //           <div>
  //             <span>{fileName}</span>
  //           </div>
  //         )}
  //         <SyntaxHighlighter 
  //           language={language} 
  //           style={dracula}
  //           customStyle={{
  //             fontSize: '0.8125em',
  //             lineHeight: '1.692'
  //           }}
  //         >
  //           {value}
  //         </SyntaxHighlighter>
  //       </>
  //     )
  //   },
  // },
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
