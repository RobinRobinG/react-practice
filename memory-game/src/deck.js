
function shuffle(array) {
  const _array = array.slice(0)
  for (let i = 0; i < array.length - 1; i++) {
    let randIdx = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[randIdx]
    _array[randIdx] = temp
  }
  return _array;
}

export default function initializeDeck() {
  let id = 0;
  const cards = ['react', 'reactu', 'redux', 'vue', 'angular', 'javascript',
    'ruby', 'rails'
  ].reduce((acc, type) => {
    acc.push(...[{
      id: id++,
      type
    }, {
      id: id++,
      type
    }])
    return acc
  }, [])

  return shuffle(cards);
}