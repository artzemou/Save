// hello-world.jsx

import React from 'react';

var data = [{
  "innerText": "O`clock"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
},{

  "innerText": "InfiniteScroll"
}]


class Item extends React.Component {
  render() {
    console.log(this.props.Key)

      return (

        <div className="item">{this.props.data.innerText}</div>
      )



  }

}

export default class InfiniteScroll extends React.Component {
  render() {
    return (
      <div className="infiniteScollContainer">
          {data.map((item, index) =>
                   (<Item key={index} Key={index}  data={item} />))
          }
      </div>
    )
  }
}

/*{data.map((item, index) =>
         (<Item key={index}  data={item} />))
}*/
