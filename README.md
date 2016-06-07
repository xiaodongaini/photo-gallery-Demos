# photo-gallery-Demos
这是一个基于 webpack 和 React 构造的图片画廊应用，个人学习 Webpack 和 React 的 Demo

##  如何使用  ##

直接下载下来，在chrome浏览器中打开index.html 即可看到效果


## React升级踩过的坑  ##

1,根据ref获取Node节点

```
var stageDOM = ReactDOM.findDOMNode(this.refs.stage);

var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0);
```

视频中用的是 var stageDOM = React.findDOMNode(this.refs.stage)

2,如果子组件位置会改变（如在搜索结果中）或者有新组件添加到列表开头（如在流中）情况会变得更加复杂。如果子级要在多个渲染阶段保持自己的特征和状态，在这种情况下，你可以通过给子级设置惟一标识的 key 来区分。
务必 把 key 添加到子级数组里组件本身上，而不是每个子级内部最外层 HTML 上。
在这个案例中：添加 ImgFigure 和 ControllerUnit 的时候，设置 key 

```
imgFigures.push(<ImgFigure key={value.fileName} data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)} />);
					controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)}  center={this.center(index)} />);
				}.bind(this));
```

