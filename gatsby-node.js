/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions }) => {
  const circularReference = {
    fn: () => {},
  }
  circularReference.self = circularReference
  const indirectCircular = {
    down1: {
      down2: {},
    },
  }
  indirectCircular.down1.down2.deepCircular = indirectCircular

  testNode = {
    id: `id1`,
    parent: null,
    children: [],
    unsupported: () => {},
    inlineObject: {
      field: `fieldOfFirstNode`,
      re: /re/,
    },
    repeat: `foo`,
    repeat2: `bar`,
    repeat3: {
      repeat3: {
        test: () => {},
        repeat: `bar`,
      },
    },
    inlineArray: [1, 2, 3, Symbol(`test`)],
    internal: {
      type: `Test`,
      contentDigest: `digest1`,
      // owner: `test`,
    },
    circularReference,
    deep: {
      indirectCircular,
    },
  }

  actions.createNode(testNode)
}
