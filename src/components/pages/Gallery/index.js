import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import Image from "./image"
import * as style from "./style.module.scss"

const Gallery = ({ tokens }) => {
  const diff = 14
  const [count, setCount] = useState(diff)

  return (
    <div>
      <div className={style.container}>
        {tokens.slice(0, count).map((token) => {
          return (
            <Link
              to={`/explorer/search/?asset=${token.fingerprint}`}
              className={style.nft}
              key={token.fingerprint}
            >
              <Image
                nft={token.metadataNft}
                minted={token.minted}
                assetName={token.assetName}
              />
              <div className={style.name}>{token.assetName}</div>
            </Link>
          )
        })}
      </div>
      {count < tokens.length && (
        <div className="mt-3 pb-2 text-center">
          <Button type="primary" onClick={() => setCount(count + diff)}>
            {tokens.length - count >= diff && (
              <strong>Show next {diff} assets</strong>
            )}
            {tokens.length - count < diff && (
              <strong>Show last {tokens.length - count} assets</strong>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Gallery