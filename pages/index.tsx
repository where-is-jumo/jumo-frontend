import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/repos" as="/repos">
        <a>repos</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
)
