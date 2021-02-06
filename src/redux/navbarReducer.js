let initialState = {
  friends: [
    {
      avatar: 'https://f1.upet.com/A_r2u6uZhnxA_x.jpg',
      name: 'Tony'
    },
    {
      avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg',
      name: 'Alex'
    },
    {
      avatar: 'https://i.pinimg.com/564x/c8/27/78/c827782e12851cd2cf4c5161c4f5445a.jpg',
      name: 'Max'
    },
  ]
}

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default navbarReducer;