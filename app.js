const body = document.getElementsByTagName('body')[0]
const h = require('izi/vanilla-h')
const img = h('img')
const hr = h('hr', { style: { width: '100%' } })
const a = h('a')

const imgTitle = h('span', { style: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontShadow: '1px 1px 0px white, -2px 3px 5px blue',
} })

const pageTitle = h('h3', { style: { width: '100%', textAlign: 'center' } })
const imgWrapper = h('a', { style: {
  position: 'relative',
  border: '1px dashed',
  margin: '2px',
} })

const host = 'http://image.noelshack.com/fichiers/2016/'
const list = require('./list')
const image = ({src, w, h}) => imgWrapper({
  href: `https://www.google.fr/searchbyimage?site=search&image_url=${encodeURIComponent(host + src)}`,
  target: '_blank',
  style: {
    background: `hsla(${~~(Math.random() * 360)}, 100%, 71%, 1)`
  }
}, [
  img({ src: host + src, width: w, height: h }),
  imgTitle('google '+ src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.')))
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
    a({ href: '/all.zip' }, 'clique-ici-pour-tout-telecharger-xd.zip'),
  ]),
  hr(),
  list.sort((a, b) => (a.h - b.h) || (a.w - b.w) || (a.src - b.src)).map(image)
]))
