import { Component } from "react";

class App extends Component {

  state = {
    data: [],
    test: 0
  }

  // 挂到真实DOM后执行里面的操作
  componentDidMount() {

    // fetch获取数据, 然后setState
    const url = 'https://xieranmaya.github.io/images/cats/cats.json'
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.map((entry) => {
            return entry.url
          }),
        })
      })
  }

  render() {
    const { data } = this.state
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
    console.log(result)
    return <ul>{result}</ul>
  }

}

export default App