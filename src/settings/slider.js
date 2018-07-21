export default (type) => {
  const settings = {
    default: {
      infinite: true,
      arrows: false
    },
    homepage: {
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  }
  return type ? Object.assign({}, settings.default, settings[type]) : settings.default
}
