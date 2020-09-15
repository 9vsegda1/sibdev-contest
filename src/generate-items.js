export default function generateItems(items) {
  return items.map(({title, desription, type, coupon, image}, idx) => {
    return ` 
      <div class="content__item content__item_new
        ${idx === 0 
          ? 'content__item_active'
          : ''
        }" data-image="${image}" 
        style="background-image: url('./images/${image}'); background-repeat:no-repeat; background-position: right bottom;"
        
        >
        <div class="content__item__top">
          <h2>${title}</h2>
          <span>${desription}</span>
        </div>
        <div class="content__item__bot">
          <span>${coupon}</span>
          <p>${type}</p>
        </div>
      </div>
    `
  }).join('')
}




