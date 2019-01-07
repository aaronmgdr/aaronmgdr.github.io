import React from "react"
import Layout from '../components/layout'
import Block from '../components/block'

export default () => (
  <Layout title="Meta">
    <Block>
      <h2> Why I (Probably) Over-Engineered This</h2>
      <p>
        This is a two page site written with <a href="https://github.com/aaronmgdr/aaronderuvo.com">React and built on the Gatsby framework</a>.
        I could have easily built this site quickly with plain HTML and CSS.
      </p>
      <p>
        But this isn't just a personal and professional about me, it's a playground.
        And I'm here to have some fun with it.
      </p>
    </Block>
  </Layout>
)
