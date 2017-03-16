const body = document.getElementsByTagName('body')[0]
const h = require('izi/vanilla-h')
const img = h('img')
const hr = h('hr', { style: { width: '100%' } })
const a = h('a')

const imgTitle = h('span', { style: {
  position: 'absolute',
  bottom: 0,
  left: 0,
} })

const pageTitle = h('h3', { style: { width: '100%', textAlign: 'center' } })
const imgWrapper = h('a', { style: {
  position: 'relative',
  border: '1px dashed',
  display: 'flex',
  alignItems: 'center',
  padding: '1px',
  margin: '2px',
} })

const list = require('./list')
const image = props => imgWrapper({
  href: `https://www.google.fr/searchbyimage?site=search&image_url=${
    encodeURIComponent(props.src)}`,
  target: '_blank',
  style: { background: `hsla(${~~(Math.random() * 360)}, 100%, 71%, 1)` },
}, [
  img(props),
  imgTitle('google '+ props.src.slice(props.src.lastIndexOf('/') + 1,
    props.src.lastIndexOf('.')))
])

const container = h({
  style: {
    fontFamily: '"Comic Sans MS", "Comic Sans", fantasy, monospace',
    color: 'blue',
    background: 'hotpink',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})

h.replaceContent(body, container([
  pageTitle([
    'Les Stickers jvc pr les schlags - ',
    a({ href: '//www.mediafire.com/file/mb5luhee8uum8b7/jvc-smileys.zip' },
      'clique-ici-pour-tout-telecharger-xd.zip'),
  ]),
  hr(),
  list.sort((a, b) => (a.height - b.height)
    || (a.width - b.width)
    || (a.src - b.src)).map(image)
]))
